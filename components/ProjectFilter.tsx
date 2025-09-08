import React from "react";
import { motion } from "framer-motion";
import { Globe, Smartphone, Monitor, Brain, Grid3X3 } from "lucide-react";

interface ProjectFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters = [
  { id: "all", label: "All Projects", icon: Grid3X3 },
  { id: "web", label: "Web Apps", icon: Globe },
  { id: "mobile", label: "Mobile", icon: Smartphone },
  { id: "desktop", label: "Desktop", icon: Monitor },
  { id: "ai", label: "AI/ML", icon: Brain },
];

export const ProjectFilter: React.FC<ProjectFilterProps> = ({
  activeFilter,
  onFilterChange,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {filters.map((filter) => {
        const Icon = filter.icon;
        const isActive = activeFilter === filter.id;

        return (
          <motion.button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              isActive
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-gray-200"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            layout
          >
            <Icon className="w-4 h-4" />
            {filter.label}
            {isActive && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-blue-600 rounded-full -z-10"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
};
