import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, ExternalLink, Github, Calendar, Clock, Users, Target, Lightbulb, Cog } from 'lucide-react'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

const projects = {
  'ai-document-analyzer': {
    title: 'AI Document Analyzer',
    description: 'Advanced document processing system using computer vision and NLP for automated content extraction and analysis.',
    image: '/projects/ai-document-analyzer.jpg',
    gallery: [
      '/projects/ai-document-analyzer-1.jpg',
      '/projects/ai-document-analyzer-2.jpg',
      '/projects/ai-document-analyzer-3.jpg',
    ],
    tags: ['Python', 'TensorFlow', 'FastAPI', 'React', 'Docker'],
    category: 'AI/ML',
    status: 'Completed',
    timeline: '3 months',
    year: '2024',
    client: 'TechCorp Solutions',
    team: '4 developers',
    overview: `This AI-powered document analyzer revolutionizes how businesses process and extract insights from documents. Built with cutting-edge computer vision and natural language processing technologies, the system can automatically identify, categorize, and extract key information from various document types including invoices, contracts, reports, and forms.`,
    challenge: `The client needed to process thousands of documents daily, with manual processing taking weeks and being prone to human error. Different document formats, languages, and quality levels created additional complexity. The solution needed to be highly accurate while being fast enough for real-time processing.`,
    solution: `I developed a comprehensive AI pipeline that combines multiple machine learning models:
    
    • Custom CNN-based document classification system
    • OCR with post-processing using transformer models
    • Named Entity Recognition (NER) for key data extraction
    • Confidence scoring and human-in-the-loop validation
    • RESTful API with real-time processing capabilities
    • React-based dashboard for monitoring and management`,
    results: [
      '95% accuracy in document classification',
      '80% reduction in processing time',
      '90% decrease in manual intervention required',
      'Support for 15+ document types',
      'Processing capacity of 10,000+ documents/day',
    ],
    technologies: {
      'Backend': ['Python', 'FastAPI', 'TensorFlow', 'OpenCV', 'spaCy', 'Celery'],
      'Frontend': ['React', 'TypeScript', 'Material-UI', 'Redux Toolkit'],
      'Infrastructure': ['Docker', 'Kubernetes', 'Redis', 'PostgreSQL', 'AWS S3'],
      'AI/ML': ['TensorFlow', 'Hugging Face Transformers', 'Tesseract OCR', 'NLTK'],
    },
    liveUrl: 'https://demo.techcorp-analyzer.com',
    githubUrl: 'https://github.com/redaelhadfi/ai-document-analyzer',
  },
  'smart-inventory-system': {
    title: 'Smart Inventory Management',
    description: 'Real-time inventory tracking system with predictive analytics and automated reordering capabilities.',
    image: '/projects/smart-inventory.jpg',
    gallery: [
      '/projects/smart-inventory-1.jpg',
      '/projects/smart-inventory-2.jpg',
      '/projects/smart-inventory-3.jpg',
    ],
    tags: ['Node.js', 'MongoDB', 'Next.js', 'TypeScript', 'AWS'],
    category: 'Full-Stack',
    status: 'Completed',
    timeline: '4 months',
    year: '2024',
    client: 'RetailFlow Inc.',
    team: '5 developers',
    overview: `A comprehensive inventory management solution that combines real-time tracking with predictive analytics to optimize stock levels and reduce costs. The system integrates with existing POS systems and provides actionable insights for inventory optimization.`,
    challenge: `RetailFlow Inc. struggled with overstocking and stockouts, leading to $2M annual losses. Their legacy system couldn&apos;t handle real-time updates across 50+ locations, and they lacked predictive capabilities for demand forecasting.`,
    solution: `I architected a modern, scalable solution with the following key features:
    
    • Real-time inventory synchronization across all locations
    • Machine learning-powered demand forecasting
    • Automated reordering based on predictive models
    • Multi-location transfer optimization
    • Advanced reporting and analytics dashboard
    • Mobile app for warehouse staff
    • API integrations with existing POS and accounting systems`,
    results: [
      '45% reduction in carrying costs',
      '60% decrease in stockouts',
      '99.9% system uptime',
      'Real-time sync across 50+ locations',
      '30% improvement in order fulfillment speed',
    ],
    technologies: {
      'Backend': ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT'],
      'Frontend': ['Next.js', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
      'Mobile': ['React Native', 'Expo'],
      'Infrastructure': ['AWS EC2', 'AWS RDS', 'Redis', 'Docker', 'GitHub Actions'],
    },
    liveUrl: 'https://inventory.retailflow.com',
    githubUrl: 'https://github.com/redaelhadfi/smart-inventory',
  },
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects[params.slug as keyof typeof projects]
  
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

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="container mx-auto px-4 pt-8">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/projects" className="flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
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
  )
}
