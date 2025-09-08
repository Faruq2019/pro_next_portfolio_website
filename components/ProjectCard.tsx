import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Globe,
  Smartphone,
  Monitor,
  Brain,
  Clock,
  CheckCircle,
  Calendar,
} from "lucide-react";
import { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const categoryIcons = {
  web: Globe,
  mobile: Smartphone,
  desktop: Monitor,
  ai: Brain,
};

const statusConfig = {
  completed: {
    icon: CheckCircle,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
    label: "Completed",
  },
  "in-progress": {
    icon: Clock,
    color: "text-amber-500",
    bg: "bg-amber-50",
    label: "In Progress",
  },
  planned: {
    icon: Calendar,
    color: "text-blue-500",
    bg: "bg-blue-50",
    label: "Planned",
  },
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const CategoryIcon = categoryIcons[project.category];
  const statusInfo = statusConfig[project.status];
  const StatusIcon = statusInfo.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          whileHover={{ scale: 1.1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 text-sm font-medium">
            <CategoryIcon className="w-4 h-4 text-gray-600" />
            <span className="capitalize text-gray-700">{project.category}</span>
          </div>
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <div
            className={`flex items-center gap-1.5 ${statusInfo.bg} backdrop-blur-sm rounded-full px-3 py-1.5 text-sm font-medium`}
          >
            <StatusIcon className={`w-4 h-4 ${statusInfo.color}`} />
            <span className={statusInfo.color}>{statusInfo.label}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, techIndex) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + techIndex * 0.05 }}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg font-medium transition-all duration-200 hover:shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ExternalLink className="w-4 h-4" />
            View Live
          </motion.a>

          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2.5 rounded-lg font-medium transition-all duration-200 hover:shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-4 h-4" />
              Code
            </motion.a>
          )}
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};
