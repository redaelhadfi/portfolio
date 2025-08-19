'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image' // Import Next.js Image component
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { AnimatedBackground } from '@/components/3d/animated-background'
import { 


  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Clock, 
  Send, 
  CheckCircle,
  Cpu, // Changed icon for AI
  Server, // Changed icon for Backend
  Code, // Changed icon for Full-Stack
  Github,
  Linkedin,


} from 'lucide-react'

// Updated with your real information
const contactMethods = [
  {
    title: 'Email',
    description: 'Best way to reach me',
    value: 'redaelhadfi1@gmail.com',
    icon: Mail,
    action: 'mailto:redaelhadfi1@gmail.com',
    primary: true,
  },
  {
    title: 'Phone',
    description: 'Call for urgent inquiries',
    value: '+212 684233470',
    icon: Phone,
    action: 'tel:+212684233470',
    primary: false,
  },
  {
    title: 'Location',
    description: 'Based in Rabat, Morocco',
    value: 'Available for remote work globally',
    icon: MapPin,
    action: null,
    primary: false,
  },
]

// Updated with your expertise from your resume
const expertiseAreas = [
  {
    title: 'Backend & Cloud Architecture',
    description: 'Architecting scalable backend systems with Python/Django and deploying on AWS with Docker & CI/CD.',
    icon: Server,
  },
  {
    title: 'AI & Data Science Solutions',
    description: 'Developing custom AI models for tasks like data extraction (OCR) and video analysis to drive efficiency.',
    icon: Cpu,
  },
  {
    title: 'Full-Stack Web Applications',
    description: 'Building end-to-end applications with Next.js/React, integrating features like payments (Stripe) and real-time data (Kafka).',
    icon: Code,
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: 'general',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Here you would integrate a real email sending service (e.g., Resend, SendGrid)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background relative overflow-x-hidden flex items-center justify-center">
        <div className="fixed top-0 left-0 w-full h-full -z-10"><AnimatedBackground /></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-md mx-auto text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold mb-4">Message Sent!</h1>
            <p className="text-muted-foreground mb-8">
              Thank you for reaching out, Reda. I&apos;ll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
              <Button variant="outline" asChild><Link href="/">Back to Home</Link></Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-full -z-10"><AnimatedBackground /></div>
      <div className="relative z-10">
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">AI Architect & Full-Stack Developer</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                From Academia to Application
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                I&apos;m a final-year Software Engineering student passionate about building intelligent, scalable solutions. I am currently seeking a <strong>PFE internship</strong> and am also available for <strong>freelance projects</strong>.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary"><Clock className="w-3 h-3 mr-1" /> 24h Response Time</Badge>
                <Badge variant="secondary"><Calendar className="w-3 h-3 mr-1" /> Open to Opportunities</Badge>
                <Badge variant="secondary"><MapPin className="w-3 h-3 mr-1" /> Remote Available</Badge>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl">Send Me a Message</CardTitle>
                      <CardDescription>
                        Have an internship, project, or question? Fill out the form below.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
                            <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Your full name" />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                            <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required placeholder="your.email@example.com" />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="projectType" className="block text-sm font-medium mb-2">Inquiry Type</label>
                          <select id="projectType" name="projectType" value={formData.projectType} onChange={handleInputChange} className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent">
                            <option value="freelance">Freelance Project Inquiry</option>
                            <option value="internship">PFE Internship Opportunity</option>
                            <option value="collaboration">Collaboration Proposal</option>
                            <option value="general">General Question</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject *</label>
                          <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required placeholder="Brief description of your inquiry" />
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                          <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={6} placeholder="Tell me more about the opportunity, project, timeline, etc..." />
                        </div>
                        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" /> Sending...</>
                          ) : (
                            <><Send className="w-4 h-4 mr-2" /> Send Message</>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-8">
                  {/* --- REDESIGNED HIRE ME CARD --- */}
                  <Card className="overflow-hidden">
                    <CardHeader className="p-0">
                      <div className="bg-muted p-4 border-b">
                        <CardTitle>Professional Profiles</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 space-y-4">
                      {/* Freelancer Profile */}
                      <div className="flex items-center gap-4 p-3 rounded-lg border bg-card">
                        <Image
                          src="https://cdn5.f-cdn.com/ppic/279372228/logo/71005125/profile_logo_71005125.jpg"
                          alt="Reda El Hadfi"
                          width={60}
                          height={60}
                          className="rounded-full border-2 border-primary"
                        />
                        <div>
                          <h4 className="font-bold">REDA EL HADFI</h4>
                          <p className="text-xs text-muted-foreground">AI Architect & Full-Stack Pro</p>
                          <Link href="https://www.freelancer.com/u/elhadfi" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary hover:underline">
                            Hire Me on Freelancer.com
                          </Link>
                        </div>
                      </div>
                      {/* Other Links */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Button variant="outline" className="w-full justify-start" asChild>
                          <Link href="https://linkedin.com/in/redaelhadfi" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                          </Link>
                        </Button>
                        <Button variant="outline" className="w-full justify-start" asChild>
                          <Link href="https://github.com/redaelhadfi" target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" /> GitHub
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {contactMethods.map((method) => (
                        <div key={method.title} className="flex items-start">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 ${method.primary ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                            <method.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{method.title}</h4>
                            {method.action ? (
                              <Link href={method.action} className="text-sm text-primary hover:underline">{method.value}</Link>
                            ) : (
                              <p className="text-sm">{method.value}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Key Expertise</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {expertiseAreas.map((service) => (
                        <div key={service.title} className="flex items-start">
                          <service.icon className="w-5 h-5 text-primary mr-3 mt-1" />
                          <div>
                            <h4 className="font-semibold text-sm">{service.title}</h4>
                            <p className="text-xs text-muted-foreground">{service.description}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Current Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center justify-between">
                          <span>Freelance Work</span>
                          <Badge variant="default" className="text-xs bg-green-600">Available</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>PFE Internship</span>
                           <Badge variant="default" className="text-xs">Actively Seeking</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Time Zone</span>
                          <span className="text-muted-foreground">GMT+1 (Morocco)</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-2">What is your availability for a PFE internship?</h3>
                  <p className="text-sm text-muted-foreground">
                    I am available to start immediately and am actively seeking a challenging Research Assistant or Software Engineering role for my final-year project.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Do you only work through Freelancer.com?</h3>
                  <p className="text-sm text-muted-foreground">
                    While I have a strong 5-star reputation on Freelancer.com, I am open to direct collaborations and long-term contracts outside the platform.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">What technologies are you most passionate about?</h3>
                  <p className="text-sm text-muted-foreground">
                    I&apos;m passionate about distributed systems, cloud-native architecture (AWS), and applying deep learning to solve real-world business problems.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Can you handle a project from front to back?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes. As a full-stack developer, I manage projects from UI/UX implementation in React/Next.js to backend and database architecture in Python/Django.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}