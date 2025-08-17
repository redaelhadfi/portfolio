'use client'

import { HeroSection } from "@/components/sections/hero"
import { TrustStrip } from "@/components/sections/trust-strip"
import { FeaturedProjects } from "@/components/sections/featured-projects"
import { WhatIDo } from "@/components/sections/what-i-do"
import { Testimonials } from "@/components/sections/testimonials"
import { CTABand } from "@/components/sections/cta-band"
import { FloatingActionButton } from "@/components/ui/floating-action-button"
import { AnimatedBackground } from "@/components/3d/animated-background"

export default function HomePage() {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Reda El Hadfi",
            "jobTitle": "Software Engineer",
            "url": "https://reda-el-hadfi.com",
            "sameAs": [
              "https://www.linkedin.com/in/reda-elhadfi",
              "https://github.com/redaelhadfi"
            ],
            "knowsAbout": [
              "Software Development",
              "Web Development",
              "Next.js",
              "React",
              "TypeScript",
              "JavaScript",
              "Node.js",
              "Tailwind CSS",
              "Full-Stack Development",
              "Artificial Intelligence"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Rabat",
              "addressCountry": "Morocco"
            }
          })
        }}
      />

      <main className="min-h-screen relative overflow-x-hidden">
        {/* 3D Animated Background */}
        <div className="fixed top-0 left-0 w-full h-full -z-10">
          <AnimatedBackground />
        </div>
        
        <div className="relative z-10">
          {/* Hero Section */}
          <HeroSection />
          
          {/* Trust Strip */}
          <TrustStrip />
          
          {/* Featured Projects */}
          <FeaturedProjects />
          
          {/* Services */}
          <WhatIDo />
          
          {/* Testimonials */}
          <Testimonials />
          
          {/* CTA */}
          <CTABand />
        </div>

        {/* Floating Action Button */}
        <FloatingActionButton />
      </main>
    </>
  )
}
