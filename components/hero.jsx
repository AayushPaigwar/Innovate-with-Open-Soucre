"use client"
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";

const BackgroundSquare = ({ delay = 0 }) => {
  return (
    <div 
      className="w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 border border-gray-300 bg-gray-100 rounded-md relative overflow-hidden shrink-0"
      style={{ 
        opacity: 1,
      }}
    >
      <div 
        className="absolute inset-0 bg-green-400"
        style={{ 
          animation: `greenBlink 3s infinite ${delay}ms`,
          opacity: 0
        }}
      />
    </div>
  );
};

const BackgroundGrid = () => {
  const leftPattern = [
    [1,1,1,1,1],
    [1,1,1],
    [1,1],
    [1,1,1],
    [1,1,1,1,1],
  ];

  const rightPattern = [
    [1,1,1,1,1],
    [1,1,1],
    [1,1],
    [1,1,1],
    [1,1,1,1,1]
  ];

  return (
    <>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left Grid */}
        <div className="grid-container absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 xl:-translate-x-1/3 2xl:-translate-x-1/4">
          {leftPattern.map((row, rowIndex) => (
            <div key={`left-row-${rowIndex}`} className="flex gap-2 mb-2 ml-8">
              {row.map((show, colIndex) => (
                show ? <BackgroundSquare key={`left-${rowIndex}-${colIndex}`} delay={Math.random() * 2000} /> : null
              ))}
            </div>
          ))}
        </div>

        {/* Right Grid */}
        <div className="grid-container absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 xl:translate-x-1/3 2xl:translate-x-1/4">
          {rightPattern.map((row, rowIndex) => (
            <div key={`right-row-${rowIndex}`} className="flex gap-2 mb-2 mr-8 justify-end">
              {row.map((show, colIndex) => (
                show ? <BackgroundSquare key={`right-${rowIndex}-${colIndex}`} delay={Math.random() * 2000} /> : null
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] bg-white flex items-center justify-center overflow-hidden">
      <BackgroundGrid />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-4">
          Contribute To
          <br />
          <span className="relative">
            Open Source
            <span className="absolute inset-x-0 bottom-0 h-3 bg-green-400 -z-10"></span>
          </span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Kickstart your open-source journey with beginner-friendly repository <br /> 
          designed for first-time contributors this Hacktoberfest!
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <Link href="https://hacktoberfest.com/">
              <Button className="w-full bg-black text-white hover:bg-gray-800">
                Hacktoberfest
              </Button>
            </Link>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <Link href="https://github.com/AayushPaigwar/Innovate-with-Open-Soucre">
              <Button variant="outline" className="w-full sm:w-auto px-8 py-3 text-base font-medium">
                <Github className="mr-2" /> Contribute
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}