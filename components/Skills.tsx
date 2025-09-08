import React from "react";
import { HoverEffect } from "@/components/ui/card-hover.effect";
import { skills } from "@/data"; // <-- uses your refactored Skill[] data
import { Sparkles } from "lucide-react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

      <div className="relative container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-4">
            <Sparkles className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and proficiency
            levels across various domains
          </p>
        </div>

        {/* Skills Grid */}
        <HoverEffect items={skills} className="animate-fade-in-up" />
      </div>
    </section>
  );
};

export default Skills;
