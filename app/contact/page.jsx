"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "07459939217",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "thapabibekuk55@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Woolwich, London UK",
  },
];

import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [emailError, setEmailError] = useState(null);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
      return false;
    }
    setEmailError(null);
    return true;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    // Add the access key
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY);

    try {
        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
                name: formData.get("firstname") + " " + formData.get("lastname"),
                email: formData.get("email"),
                phone: formData.get("phone"),
                message: formData.get("message")
            })
        });

        const data = await res.json();
        
        if (data.success) {
            setSubmissionStatus({ 
                message: "Message submitted successfully!", 
                success: true 
            });
            // Clear the form
            event.target.reset();
        } else {
            setSubmissionStatus({ 
                message: `Error: ${data.message || 'Something went wrong'}`, 
                success: false 
            });
        }
    } catch (error) {
        console.error("Submission error:", error);
        setSubmissionStatus({ 
            message: "Error submitting message. Please try again.", 
            success: false 
        });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.2, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
          <form onSubmit={onSubmit} className="flex flex-col gap-6 p-10 bg-[#000000] rounded-xl contact-box">
  <h3 className="text-4xl text-accent">Want to hire me..</h3>
              <p className="text-white/60">If you have any questions or want to reach out to me  please fill out the form below.</p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstname" placeholder="Firstname" />
                <Input type="text" name="lastname" placeholder="Lastname" />
                <Input type="email" name="email" placeholder="Email address" />
                <Input type="phone" name="phone" placeholder="Phone number" />
              </div>
              {/* textarea */}
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here."
              />
              {/* btn */}
              <Button size="md" className="max-w-40">
                Send message
              </Button>
              {emailError && <p className="text-red-500">{emailError}</p>}
              {submissionStatus && (
                <p className={submissionStatus.success ? "text-green-500" : "text-red-500"}>
                  {submissionStatus.message}
                </p>
              )}
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-lg">{item.title}</h4>
                      <p className="text-white/60">{item.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
