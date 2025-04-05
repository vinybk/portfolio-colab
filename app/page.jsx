'use client';

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import React from "react";
import ParticleBackground from "@/app/ParticleBackground";
import { TypeAnimation } from 'react-type-animation';

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full relative">
      <div className="container mx-auto h-full relative z-10">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left  order-2 xl:order-none">
            <span className="text-xl">Site Reliability Engineer (SRE) | DevOps | Scalable, Decentralized Systems | Open Source | Revospring Maintainer </span>
            <h1 className="h1 mb-6">
            <TypeAnimation
  sequence={[
    'Hello I\'m\nViny Brun Kriesang',  // First display
    4000, // Wait 4 seconds
    '',    // Clear the text
    1000,  // Wait 1 second
    'Hello I\'m\nViny Brun Kriesang',  // Second display
    4000,
    '',
    1000,
    'Hello I\'m\nViny Brun Kriesang',  // Third display
    4000,
  ]}
  wrapper="span"
  speed={50}
  repeat={0}  // Set to 0 since we've manually created 3 iterations
  style={{ whiteSpace: 'pre-line' }}
  className="bg-gradient-to-r from-purple-600 via-pink-600 via-orange-500 to-red-500 text-transparent bg-clip-text"
/>
<span className="text-red-600"></span>

            </h1>
            <div className="xl:w-[] h-full flex flex-col gap-5 p-7 bg-[#070707] rounded-xl order-2 xl:order-none shadow-glow">
              <p className="max-w-[500px] mb-4 text-white/80 leading-relaxed tracking-normal">
              Site Reliability Engineer and Backend Developer passionate about decentralized platforms, and open-source tools. I focus on keeping systems running smoothly at the VM level while deploying apps that help creators reach their audiences.
              </p>
            </div>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              {<a href="/CV Viny Brun Kriesang.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 hover:text-red-600 border-pink-600"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>}
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-yellow-600 rounded-full flex justify-center items-center text-green-400 text-base hover:bg-red-500 hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 photo-shadow-glow">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
