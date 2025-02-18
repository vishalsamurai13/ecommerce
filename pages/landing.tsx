"use client";

import { Menu, ChevronDown, ChevronUp, CircleDot, ArrowRight, X, Instagram } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MusicPlayer from '@/components/player';
import Chatbox from '@/components/chatbox';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// HoverButton Component
const HoverButton = ({ title }: { title: string }) => {
  return (
    <div className="group relative flex items-center justify-center">
      <button className="p-2 rounded-full focus:outline-none transition-all duration-300 ease-in-out w-12 h-12 flex items-center justify-center group-hover:w-32 group-hover:rounded-lg group-hover:bg-white group-hover:bg-opacity-75">
        <div className="animate-breathing">
          <CircleDot className="w-8 h-8 text-white transition-all duration-300 ease-in-out group-hover:opacity-0" />
        </div>
        <span className="absolute opacity-0 text-black font-bold text-md transition-all duration-300 ease-in-out group-hover:opacity-100 uppercase">
          {title}
        </span>
      </button>
    </div>
  );
};

export default function Landing() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bgRef.current) return; // Prevent null errors
  
    const bg = bgRef.current;
    const imageWidth = bg.scrollWidth - window.innerWidth; // Full horizontal scrollable width
  
    // Disable vertical scrolling
    document.documentElement.style.overflowY = "hidden";
    document.body.style.overflowY = "hidden";
  
    let scrollY = 0;
    let targetX = 0;
  
    const onScroll = () => {
      scrollY = window.scrollY;
      targetX = (scrollY / window.innerHeight) * imageWidth;
  
      gsap.to(bg, {
        x: -targetX,
        ease: "none",
        overwrite: true,
      });
    };
  
    window.addEventListener("scroll", onScroll);
  
    return () => {
      // Reset styles on cleanup
      document.documentElement.style.overflowY = "";
      document.body.style.overflowY = "";
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  

  return (
    <div className="relative w-screen h-screen overflow-auto">
      {/* Background + Blur Container */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 min-w-[400vw] lg:min-w-[105vw] min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/background.png')" }}
      />

      {/* Content to Blur */}
      <div className={`absolute inset-0 z-10 transition-all duration-300 ${menuOpen ? 'blur-lg' : ''}`}>
        {/* Header */}
        <div className="fixed w-full p-1 flex flex-row justify-between items-center">
          {/* Menu Button with Animation */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="z-50 relative transition-transform duration-300"
          >   
            <Menu className="w-10 h-10 text-white transform transition-transform duration-300 rotate-0" size={48} />
          </button>

          <div className="flex-grow flex justify-center items-center">
            LOGO
          </div>
        </div>

        {/* Hover Buttons */}
        <div className="absolute top-[550px] left-[370px] lg:top-[580px] lg:left-[380px] lg:block">
          <HoverButton title="Flower Pot" />
        </div>
        <div className="absolute top-[750px] left-[900px] lg:top-[800px] lg:right-[700px] lg:block">
          <HoverButton title="Carpet" />
        </div>
        <div className="absolute top-[650px] left-[1500px] lg:top-[700px] lg:right-[50px] lg:block">
          <HoverButton title="Arm Chair" />
        </div>

        {/* Enter Room Button */}
        <div className="overflow-visible">
          <button className="border border-white bg-black text-white p-2 rounded-full absolute top-[400px] left-[1300px] lg:top-[400px] lg:right-[380px] flex items-center justify-start w-10 h-10 transition-all duration-300 ease-in-out group hover:w-48 hover:rounded-lg hover:bg-black hover:bg-opacity-100 ">
            <span className="opacity-0 text-white font-bold text-sm uppercase transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:ml-4 absolute left-4">
              Enter Room
            </span>
            <span className="absolute right-2 flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-white z-50 transition-all duration-300 ease-in-out" />
            </span>
          </button>
        </div>
      </div>

      {/* Menu Overlay */}
      {menuOpen && (
        <div 
          className="fixed -inset-1 bg-black bg-opacity-50 z-40 backdrop-blur-md transition-opacity duration-300" 
          style={{ backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}
          onClick={() => setMenuOpen(false)}
        >
        </div>
      )}

      {/* Close (X) Icon */}
      {menuOpen && (
        <button 
            onClick={() => setMenuOpen(false)} 
            className="fixed top-4 left-4 z-50 text-white  transition-transform duration-300"
        >
            <X className="w-10 h-10" size={48} />
        </button>
      )}

      <div className={`fixed top-[30px] left-0 bg-transparent bg-opacity-90 text-white z-40 p-4 mt-4 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <ul className="uppercase text-white font-bold">
          <li className="flex items-center gap-3 text-sm cursor-pointer hover:bg-red-600 p-2">Shop</li>
          <li className="flex items-center gap-3 text-sm cursor-pointer hover:bg-red-600 p-2">Lookbook</li>
          <li className="flex items-center gap-3 text-sm cursor-pointer hover:bg-red-600 p-2">Blogs</li>
          <li className="flex items-center gap-3 text-sm cursor-pointer hover:bg-red-600 p-2">Search</li>
          <li className="flex items-center gap-3 text-sm cursor-pointer hover:bg-red-600 p-2">Support</li>
          <li className="flex items-center gap-3 text-sm cursor-pointer hover:bg-red-600 p-2">Store Front</li>
          <li className="flex items-center gap-3 text-sm cursor-pointer mt-10 p-2">
            <Instagram className="w-5 h-5" />
          </li>
        </ul>
      </div>

      <div className="fixed top-4 right-4 z-50">
        {/* Dropdown Menu */}
        <DropdownMenu onOpenChange={(open) => setDropdownOpen(open)}>
        <DropdownMenuTrigger className="flex items-center space-x-2 px-4 py-2">
        <div className="flex items-center space-x-2 text-white text-bold">
            <Image src="/flags/india.png" alt="Indian Flag" className="w-5 h-5" width={48} height={48} />
            <span className='flex gap-2 items-center'>
            INR
            {dropdownOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </span>
        </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='max-h-60 overflow-y-auto'>
        <DropdownMenuItem>
            <div className="flex items-center space-x-2">
            <Image src="/flags/usa.png" alt="USA Flag" className="w-5 h-5" width={48} height={48} />
            <span>US Dollar</span>
            </div>
        </DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
      </div>
        
      {/* Chatbox & Music Player (Not Blurred) */}
      <div className='fixed bottom-0 right-0 pr-2 pb-2 z-50'>
        <MusicPlayer 
          imageSrc="/images/record.png"  
          audioSrc="/music/luther.mp3"  
        />
      </div>
      
      <div className='fixed bottom-20 right-5 z-50'>
        <Chatbox />
      </div>
      
    </div>
  );
}


