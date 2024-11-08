"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ThankYou = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.2, ease: "easeIn" },
      }}
      className="py-12 xl:py-24 h-[84vh] flex items-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="contact-box max-w-[600px] p-12 text-center bg-black border border-black relative">
            {/* RGB Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient blur-xl opacity-50"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-accent mb-6"> ✓ Thank You!</h2>
              <p className="text-white mb-8">
                Your message has been successfully sent. I will get back to you soon.
              </p>
              <Link href="/">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 hover:text-red-600 border-pink-600 transition-all duration-300"
                >
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ThankYou; 