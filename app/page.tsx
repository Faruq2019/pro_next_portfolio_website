'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contacts from '@/components/Contacts'
import Footer from '@/components/Footer'
import ResumeModal from '@/components/ResumeModal'
import Nav from '@/components/Nav'


export default function Portfolio() {
  const [showResume, setShowResume] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <Nav />
      {/* Hero Section */}
      <Hero onPress={() => setShowResume(true)} />
      {/* About Section */}
      <About />
      {/* Skills Section */}
      <Skills />
      {/* Projects Section */}
      <Projects />
      {/* Contact Section */}
      <Contacts />
      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      {showResume && ( 
        <ResumeModal handlePress={() => setShowResume(false)} />
      )}
    </div>
  )
}