/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';

const content = [
  {
    title: 'Frontend Development',
    description:
      'Expertise in creating responsive and interactive user interfaces using modern JavaScript frameworks and libraries.',
  },
  {
    title: 'Backend Development',
    description:
      'Proficient in building scalable server-side applications and RESTful APIs using Node.js and Express.',
  },
  {
    title: 'Database Management',
    description:
      'Experience with both SQL and NoSQL databases, including PostgreSQL and MongoDB.',
  },
  {
    title: 'DevOps & Deployment',
    description:
      'Familiar with cloud platforms like AWS and Vercel.',
  },
]

const ResumeModal = ({handlePress}: {handlePress: () => void}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white text-black p-8 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Farouk Bello - Resume</h2>
        <StickyScroll content={content} />
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 rounded-full"
          onClick={handlePress}
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default ResumeModal