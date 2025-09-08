"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code2, Users, Award, Coffee } from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { FloatingElements } from "@/components/ui/floating-elements";
import { GradientBackground } from "@/components/ui/gradient-background";
import { StatsCard } from "@/components/ui/stats-card";
import { message } from "@/data";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  const stats = [
    { icon: Code2, value: "3+", label: "Years Experience", delay: 0.1 },
    { icon: Users, value: "50+", label: "Projects Completed", delay: 0.2 },
    { icon: Award, value: "15+", label: "Technologies Mastered", delay: 0.3 },
    { icon: Coffee, value: "1000+", label: "Cups of Coffee", delay: 0.4 },
  ];

  const handleDownloadResume = () => {
    router.push("/Farouk_Bello_Resume.pdf");
  };

  const gotoToContact = () => {
    router.push("/#contact");
  };

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <GradientBackground />
      <FloatingElements />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block"
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              About Me
            </h2>
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
          />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-xl"
            >
              <TextGenerateEffect
                words={message}
                className="text-lg leading-relaxed"
                duration={0.8}
              />
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex gap-4"
            >
              <motion.button
                onClick={handleDownloadResume}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Download Resume
              </motion.button>
              <motion.button
                onClick={gotoToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
              >
                Let's Talk
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-xl"
            />
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-2xl"
            >
              <div className="text-center">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center"
                >
                  <Code2 className="w-16 h-16 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Full Stack Developer
                </h3>
                <p className="text-gray-600">
                  Passionate about creating exceptional digital experiences
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            By the Numbers
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatsCard
                key={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                delay={stat.delay}
              />
            ))}
          </div>
        </motion.div>

        {/* Skills Preview */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200/50"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Core Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "React",
                "Node.js",
                "TypeScript",
                "Next.js",
                "Angular",
                "MongoDB",
                "PostgreSQL",
                "AWS",
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-md border border-gray-200/50 hover:shadow-lg transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
