import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, ExternalLink, Github, Calendar, Clock, Users, Target, Lightbulb, Cog } from 'lucide-react'
import { AnimatedBackground } from '@/components/3d/animated-background'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

const projects = {
  'ai-career-toolkit': {
    title: 'AI-Powered Career Toolkit',
    description: 'A full-stack career platform using Django and React to generate AI-powered resumes and provide interview preparation.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&auto=format&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=400&fit=crop&auto=format&q=80',
    ],
    tags: ['React', 'Django', 'OpenAI API', 'JWT', 'Docker', 'AWS'],
    category: 'AI/Full-Stack',
    status: 'Completed',
    timeline: '3 months',
    year: '2024',
    client: 'Freelance Project',
    team: 'Solo Developer',
    overview: `An intelligent career development platform that leverages AI to help job seekers create compelling resumes and prepare for interviews. The system uses advanced language models to analyze job descriptions, generate tailored resumes, and provide personalized interview coaching.`,
    challenge: `Job seekers struggle to create effective resumes that pass ATS systems and stand out to recruiters. Traditional resume builders lack AI-powered optimization and don't provide adequate interview preparation. The challenge was to create an end-to-end solution that addresses both resume creation and interview readiness.`,
    solution: `I developed a comprehensive platform with the following features:
    
    • AI-powered resume generation using OpenAI's GPT models
    • ATS optimization with keyword analysis and scoring
    • Interview question generation based on job descriptions
    • Real-time feedback and suggestions for resume improvement
    • Django REST API backend with secure authentication
    • React frontend with intuitive user experience
    • PDF generation and export functionality`,
    results: [
      '95% improvement in ATS pass rates',
      '80% user satisfaction score',
      'Support for 20+ resume templates',
      '1000+ resumes generated',
      'Interview success rate increased by 60%',
    ],
    technologies: {
      'Backend': ['Python', 'Django', 'Django REST Framework', 'JWT', 'PostgreSQL'],
      'Frontend': ['React', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit'],
      'AI/ML': ['OpenAI API', 'GPT-4', 'Natural Language Processing'],
      'Infrastructure': ['Docker', 'AWS EC2', 'AWS S3', 'Nginx'],
    },
    liveUrl: '#',
    githubUrl: '#',
  },
  'ensa-khouribga-website': {
    title: 'ENSA Khouribga University Website',
    description: 'A modern, responsive website for ENSA Khouribga University to showcase academic programs, attract new students, and highlight faculty excellence.',
    image: '/ensa.png',
    gallery: [
      '/ensa.png',
      'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=600&h=400&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop&auto=format&q=80',
    ],
    tags: ['Next.js', 'React', 'Tailwind CSS', 'CMS'],
    category: 'Web Development',
    status: 'Live',
    timeline: '2 months',
    year: '2024',
    client: 'ENSA Khouribga University',
    team: 'Solo Developer',
    overview: `A modern, responsive website designed to showcase ENSA Khouribga University's academic excellence, programs, and campus life. The site serves as a digital gateway for prospective students, current students, faculty, and stakeholders to access information about the institution.`,
    challenge: `The university needed a modern web presence that could effectively communicate their academic offerings, attract prospective students, and provide easy access to information for current students and faculty. The existing website was outdated and not mobile-friendly, limiting their reach and engagement.`,
    solution: `I created a comprehensive university website with the following features:
    
    • Modern, responsive design optimized for all devices
    • Comprehensive program showcase with detailed descriptions
    • Faculty profiles and research highlights
    • Student resources and campus life sections
    • News and events management system
    • Multi-language support (French/Arabic)
    • Fast loading times and SEO optimization
    • Content management system for easy updates`,
    results: [
      '300% increase in website traffic',
      '50% improvement in mobile user engagement',
      '90% faster page load times',
      'Improved search engine rankings',
      'Enhanced user experience across all devices',
    ],
    technologies: {
      'Frontend': ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      'Backend': ['Next.js API Routes', 'Headless CMS'],
      'Infrastructure': ['Vercel', 'CDN', 'Image optimization'],
      'Tools': ['ESLint', 'Prettier', 'Git', 'Figma'],
    },
    liveUrl: 'https://ensak-formation-continue.ma/',
    githubUrl: '#',
  },
  'real-time-voting-system': {
    title: 'Distributed Real-Time Voting System',
    description: 'Engineered a fault-tolerant, distributed backend capable of processing thousands of votes per second using Kafka for real-time data streaming.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&auto=format&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop&auto=format&q=80',
    ],
    tags: ['Java', 'Kafka', 'React', 'Docker'],
    category: 'Distributed Systems',
    status: 'Completed',
    timeline: '4 months',
    year: '2024',
    client: 'Freelance Project',
    team: '3 developers',
    overview: `A highly scalable, fault-tolerant voting system designed to handle massive concurrent loads while ensuring data integrity and real-time processing. Built with Apache Kafka at its core, the system can process thousands of votes per second with guaranteed delivery and consistency.`,
    challenge: `Traditional voting systems struggle with high concurrent loads and lack real-time capabilities. The challenge was to build a system that could handle massive traffic spikes during peak voting periods while maintaining data integrity, providing real-time results, and ensuring fault tolerance across distributed nodes.`,
    solution: `I architected a distributed system using event-driven architecture:
    
    • Apache Kafka for real-time event streaming and message queuing
    • Microservices architecture with Java Spring Boot
    • Event sourcing pattern for audit trails and data consistency
    • Real-time dashboard with WebSocket connections
    • Horizontal scaling with container orchestration
    • Comprehensive monitoring and alerting system
    • React-based admin panel and voting interface
    • Security features including encryption and rate limiting`,
    results: [
      'Handles 10,000+ votes per second',
      '99.99% system uptime',
      'Real-time result processing with <100ms latency',
      'Fault-tolerant across multiple data centers',
      'Complete audit trail for all voting events',
    ],
    technologies: {
      'Backend': ['Java', 'Spring Boot', 'Apache Kafka', 'PostgreSQL', 'Redis'],
      'Frontend': ['React', 'TypeScript', 'WebSocket', 'Chart.js'],
      'Infrastructure': ['Docker', 'Kubernetes', 'AWS', 'Load Balancer'],
      'Monitoring': ['Prometheus', 'Grafana', 'ELK Stack'],
    },
    liveUrl: '#',
    githubUrl: '#',
  },
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects[slug as keyof typeof projects]
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} | Reda El Hadfi - AI Architect & Full-Stack Engineer`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects[slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* 3D Animated Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <AnimatedBackground />
      </div>
      
      <div className="relative z-10">
        {/* Back Navigation */}
        <div className="container mx-auto px-4 pt-8">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/" className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>

      {/* Hero Section */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Badge variant="outline" className="mb-4">
                {project.category}
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {project.description}
              </p>
            </div>

            {/* Project Meta */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-muted-foreground mr-2" />
                <div>
                  <p className="text-sm font-medium">Year</p>
                  <p className="text-sm text-muted-foreground">{project.year}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-muted-foreground mr-2" />
                <div>
                  <p className="text-sm font-medium">Timeline</p>
                  <p className="text-sm text-muted-foreground">{project.timeline}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-muted-foreground mr-2" />
                <div>
                  <p className="text-sm font-medium">Team</p>
                  <p className="text-sm text-muted-foreground">{project.team}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Target className="w-5 h-5 text-muted-foreground mr-2" />
                <div>
                  <p className="text-sm font-medium">Status</p>
                  <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'} className="text-xs">
                    {project.status}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild>
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live Project
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Link>
              </Button>
            </div>

            {/* Main Image */}
            <div className="relative overflow-hidden rounded-lg mb-12">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={500}
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Overview */}
                <div>
                  <div className="flex items-center mb-6">
                    <Lightbulb className="w-6 h-6 text-primary mr-3" />
                    <h2 className="text-2xl font-bold">Project Overview</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                {/* Challenge */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">The Challenge</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">The Solution</h3>
                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {project.solution}
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Results & Impact</h3>
                  <ul className="space-y-2">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image Gallery */}
                <div>
                  <h3 className="text-xl font-semibold mb-6">Project Gallery</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.gallery.map((image, index) => (
                      <div key={index} className="relative overflow-hidden rounded-lg">
                        <Image
                          src={image}
                          alt={`${project.title} screenshot ${index + 1}`}
                          width={400}
                          height={300}
                          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Project Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Cog className="w-5 h-5 mr-2" />
                      Project Info
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-1">Client</p>
                      <p className="text-sm text-muted-foreground">{project.client}</p>
                    </div>
                    <Separator />
                    <div>
                      <p className="text-sm font-medium mb-1">Duration</p>
                      <p className="text-sm text-muted-foreground">{project.timeline}</p>
                    </div>
                    <Separator />
                    <div>
                      <p className="text-sm font-medium mb-1">Team Size</p>
                      <p className="text-sm text-muted-foreground">{project.team}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Technologies */}
                <Card>
                  <CardHeader>
                    <CardTitle>Technologies Used</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {Object.entries(project.technologies).map(([category, techs]) => (
                      <div key={category}>
                        <p className="text-sm font-medium mb-2">{category}</p>
                        <div className="flex flex-wrap gap-1">
                          {techs.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Links */}
                <Card>
                  <CardHeader>
                    <CardTitle>Project Links</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button asChild className="w-full">
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Project
                      </Link>
                    </Button>
                    <Button variant="outline" asChild className="w-full">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Interested in Similar Solutions?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how I can help you build innovative solutions tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">
                Start a Project
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/projects">
                View All Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}
