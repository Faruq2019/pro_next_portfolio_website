"use client";

import React from "react";
import { ChevronDown, Github, Linkedin, Mail, MapPin } from "lucide-react";

const Hero = ({ onPress }: { onPress: () => void }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center z-10 max-w-4xl">
        {/* Main content */}
        <div className="space-y-8 animate-fade-in-up">
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm text-white/80 animate-slide-down">
            <MapPin className="w-4 h-4" />
            <span>Based in Nigeria</span>
          </div>

          {/* Main heading with gradient text */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="block text-white animate-slide-up">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-slide-up delay-200">
                Farouk
              </span>
            </h1>

            <div className="text-xl md:text-2xl lg:text-3xl text-white/80 font-light animate-slide-up delay-400">
              <span className="inline-block">Full-Stack Developer</span>
              <span className="mx-4 text-purple-400">•</span>
              <span className="inline-block">Problem Solver</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed animate-slide-up delay-600">
            Crafting exceptional digital experiences with modern technologies. I
            transform complex ideas into elegant, scalable solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up delay-800">
            <button
              onClick={onPress}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <a
              href="/Farouk_Bello_Resume.pdf"
              download
              className="group px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center gap-2">
                Download Resume
                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
            </a>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-6 animate-slide-up delay-1000">
            <a
              href="https://github.com/Faruq2019/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300"
            >
              <Github className="w-5 h-5 text-white group-hover:text-purple-300 transition-colors duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/farouk-olalekan-bello/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 text-white group-hover:text-blue-300 transition-colors duration-300" />
            </a>
            <a
              href="mailto:bellofarouk095@gmail.com"
              className="group p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300"
            >
              <Mail className="w-5 h-5 text-white group-hover:text-green-300 transition-colors duration-300" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
