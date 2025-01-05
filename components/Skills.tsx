import React from 'react';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { skills } from '@/data';



const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <HoverEffect items={skills} />
      </div>
    </section>
  )
}

export default Skills