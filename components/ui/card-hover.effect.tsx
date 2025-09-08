import React, { useState } from "react";
import { cn } from "@/utils/cn";
import { LucideIcon } from "lucide-react";

export interface HoverEffectItem {
  title: string;
  description: string;
  icon?: LucideIcon; // 🔥 use component reference
  level?: number;
  category?: string;
}

interface HoverEffectProps {
  items: HoverEffectItem[];
  className?: string;
}

export const HoverEffect: React.FC<HoverEffectProps> = ({
  items,
  className,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
        className
      )}
    >
      {items.map((item, idx) => {
        const Icon = item.icon; // 🔥 prepare icon component
        return (
          <div
            key={idx}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105" />
            <div className="relative z-20 h-full">
              <Card>
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {Icon && (
                        <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white transform group-hover:scale-110 transition-transform duration-300">
                          <Icon size={24} /> {/* 🔥 render dynamically */}
                        </div>
                      )}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {item.title}
                        </h3>
                        {item.category && (
                          <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                            {item.category}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                    {item.description}
                  </p>

                  {item.level && (
                    <div className="mt-auto">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-gray-500">
                          Proficiency
                        </span>
                        <span className="text-xs font-semibold text-gray-700">
                          {item.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out transform origin-left"
                          style={{
                            width:
                              hoveredIndex === idx ? `${item.level}%` : "0%",
                            transitionDelay:
                              hoveredIndex === idx ? "200ms" : "0ms",
                          }}
                        />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 group-hover:border-blue-200 backdrop-blur-sm",
        className
      )}
    >
      {children}
    </div>
  );
};

const CardContent: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return <div className={cn("", className)}>{children}</div>;
};
