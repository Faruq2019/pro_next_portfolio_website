import React from 'react';
import { Button } from '@/components/ui/moving-border'
import { BackgroundBeams } from '@/components/ui/backgorund-beams'

const Contacts = () => {
  return (
    <section id="contact" className="py-20 relative">
      <BackgroundBeams />
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Name</label>
            <input type="text" id="name" className="w-full p-2 bg-gray-800 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input type="email" id="email" className="w-full p-2 bg-gray-800 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea id="message" rows={4} className="w-full p-2 bg-gray-800 rounded"></textarea>
          </div>
          <Button
            borderRadius="0.5rem"
            className="w-full bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  )
}

export default Contacts