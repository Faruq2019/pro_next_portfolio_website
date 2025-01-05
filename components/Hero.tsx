/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { TypewriterEffect } from '@/components/ui/typewriter-effect';
import { SparklesCore } from '@/components/ui/sparkles';
import { Button } from '@/components/ui/moving-border';
import DownloadLink from '@/components/ui/download-link';

const Hero = ({onPress}: {onPress: () => void}) => {
  const resumeUrl = '/Farouk_Bello_Resume.pdf';

  return (
    <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full absolute"
          particleColor="#FFFFFF"
        />
        <div className="text-center z-10">
          <h1 className="text-5xl font-bold mb-4">
            <TypewriterEffect words={[
              { text: "Hi, I'm " },
              { text: "Farouk " },
              { text: "a Full-Stack Developer  based in " },
              { text: " Nigeria" }
            ]} />
          </h1>
          <p className="text-sm mb-8 sm:text-xl">Turning ideas into reality through code</p>
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            onClick={onPress}
          >
            View Resume
          </Button>
          <DownloadLink href={resumeUrl} className="ml-5 py-5" />
        </div>
      </section>
  )
}

export default Hero