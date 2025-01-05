import React from 'react';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { message } from '@/data';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <TextGenerateEffect className='text-center' words={message} />
      </div>
    </section>
  )
}

export default About