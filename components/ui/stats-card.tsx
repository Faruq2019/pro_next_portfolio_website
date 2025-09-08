import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  delay: number;
}

export const StatsCard = ({
  icon: Icon,
  value,
  label,
  delay,
}: StatsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      }}
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200/50 hover:border-blue-300/50 transition-all duration-300"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-4"
      >
        <Icon className="w-6 h-6 text-white" />
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        className="text-2xl font-bold text-gray-800 mb-1"
      >
        {value}
      </motion.div>
      <div className="text-sm text-gray-600 font-medium">{label}</div>
    </motion.div>
  );
};
