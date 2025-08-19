import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ExternalLink, Github, Calendar, Clock } from 'lucide-react'
import { AnimatedBackground } from '@/components/3d/animated-background'

export const metadata: Metadata = {
  title: 'Projects | Reda El Hadfi - AI Architect & Full-Stack Engineer',
  description: 'Explore my portfolio of AI and full-stack development projects, showcasing innovative solutions and technical excellence.',
}

// Combined list of original and new projects
const projects = [
  // --- Original Projects ---
  {
    id: 'ai-career-toolkit',
    title: 'AI-Powered Career Toolkit',
    description: 'A full-stack career platform using Django and React to generate AI-powered resumes and provide interview preparation.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&auto=format&q=80',
    tags: ['React', 'Django', 'OpenAI API', 'JWT', 'Docker', 'AWS'],
    category: 'AI/ML',
    status: 'Completed',
    timeline: '3 months',
    year: '2024',
    client: 'Freelance Project',
    featured: true,
  },
  {
    id: 'ensa-khouribga-website',
    title: 'ENSA Khouribga University Website',
    description: 'A modern, responsive website for ENSA Khouribga University to showcase academic programs, attract new students, and highlight faculty excellence.',
    image: '/ensa.png',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'CMS'],
    category: 'Full-Stack',
    status: 'Live',
    timeline: '2 months',
    year: '2024',
    client: 'ENSA Khouribga University',
    featured: true,
  },
  {
    id: 'real-time-voting-system',
    title: 'Distributed Real-Time Voting System',
    description: 'Engineered a fault-tolerant, distributed backend capable of processing thousands of votes per second using Kafka for real-time data streaming.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&auto=format&q=80',
    tags: ['Java', 'Kafka', 'React', 'Docker'],
    category: 'Distributed Systems',
    status: 'Completed',
    timeline: '4 months',
    year: '2024',
    client: 'Freelance Project',
    featured: true,
  },
  // --- New Projects from Your List ---
  {
    id: 'bert-pdf-training',
    title: 'BERT Training Using PDF Documents',
    description: 'Developed a custom pipeline to parse, clean, and process PDF documents for training a BERT model, enabling specialized NLP tasks on domain-specific corpora.',
    image: 'https://images.unsplash.com/photo-1583521268322-a7f45f7c5e1e?w=600&h=400&fit=crop&auto=format&q=80',
    tags: ['Python', 'Machine Learning (ML)', 'Data Modeling', 'BERT', 'NLP'],
    category: 'AI/ML',
    status: 'Completed',
    timeline: '6 weeks',
    year: '2025',
    client: 'Freelance Project',
    featured: true,
  },
  {
    id: 'youtube-transcription-app',
    title: 'Python Web App for YouTube Transcription',
    description: 'Built a full-stack web application that leverages AI to transcribe YouTube videos automatically, providing users with downloadable and searchable scripts.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d724e16e599?w=600&h=400&fit=crop&auto=format&q=80',
    tags: ['Python', 'Flask', 'React', 'Natural Language Processing', 'AI'],
    category: 'AI/ML',
    status: 'Completed',
    timeline: '1 month',
    year: '2025',
    client: 'Freelance Project',
    featured: true,
  },
  {
    id: 'web-scraping-schneider-electric',
    title: 'Web Scraping for Schneider Electric Data',
    description: 'Engineered a robust web scraping program to automatically collect and structure product data, handling dynamic content and implementing anti-blocking measures.',
    image: 'https://images.unsplash.com/photo-1629904853716-f0bc64219b1b?w=600&h=400&fit=crop&auto=format&q=80',
    tags: ['Python', 'BeautifulSoup', 'Selenium', 'Data Extraction'],
    category: 'Full-Stack',
    status: 'Completed',
    timeline: '3 weeks',
    year: '2025',
    client: 'Freelance Project',
    featured: true,
  },
  {
    id: '3d-model-software-dev',
    title: '3D Model Creation from Scanned Files',
    description: 'Developed custom software to process and convert 3D scan data into optimized, high-quality 3D models for rendering and visualization purposes.',
    image: 'https://images.unsplash.com/photo-1639922557343-284594c34a2e?w=600&h=400&fit=crop&auto=format&q=80',
    tags: ['Python', '3D Rendering', 'Software Development', '3D Scanning'],
    category: 'Full-Stack',
    status: 'Completed',
    timeline: '2 months',
    year: '2024',
    client: 'Freelance Project',
    featured: true,
  },
  {
    id: 'ai-jockey-betting-program',
    title: 'AI Jockey Challenge Betting Program',
    description: 'Created an AI-driven program to analyze race data and predict outcomes for the "Jockey Challenge," utilizing web scraping and machine learning models.',
    image: 'https://images.unsplash.com/photo-1599232230776-619f71692e62?w=600&h=400&fit=crop&auto=format&q=80',
    tags: ['Java', 'Python', 'Web Scraping', 'AI', 'Software Architecture'],
    category: 'AI/ML',
    status: 'Completed',
    timeline: '5 weeks',
    year: '2025',
    client: 'Freelance Project',
    featured: false,
  },
  {
    id: 'kaggle-text-generation',
    title: 'Kaggle Notebook: Text Generation for Python Code',
    description: 'Authored a Kaggle notebook employing generative AI to produce Python code from natural language prompts, demonstrating advanced model fine-tuning.',
    image: 'https://images.unsplash.com/photo-1678566153959-869e5a88ea54?w=600&h=400&fit=crop&auto=format&q=80',
    tags: ['Python', 'Machine Learning (ML)', 'Generative AI', 'Kaggle'],
    category: 'AI/ML',
    status: 'Completed',
    timeline: '2 weeks',
    year: '2025',
    client: 'Freelance Project',
    featured: false,
  },
  {
    id: 'dynamic-programming-dag-path',
    title: 'Dynamic Programming Expert for DAG Path Problem',
    description: 'Designed and implemented an efficient algorithm using dynamic programming to find the optimal path in a Directed Acyclic Graph (DAG) for a logistics problem.',
    image: 'https://images.unsplash.com/photo-1543357485-d857de7ee455?w=600&h=400&fit=crop&auto=format&q=80',
    tags: ['Python', 'Algorithm', 'Dynamic Programming', 'Data Structures'],
    category: 'Full-Stack',
    status: 'Completed',
    timeline: '3 weeks',
    year: '2025',
    client: 'Freelance Project',
    featured: false,
  },
  {
    id: 'body-motions-time-series',
    title: 'Body Motions Model for Time-Series Analysis',
    description: 'Developed a time-series analysis model to classify and predict body motions from sensor data, applying deep learning techniques for high accuracy.',
    image: 'https://images.unsplash.com/photo-1581009137052-c615d5769336?w=600&h=400&fit=crop&auto=format&q=80',
    tags: ['Python', 'TensorFlow', 'Time-Series Analysis', 'Data Science'],
    category: 'AI/ML',
    status: 'Completed',
    timeline: '1 month',
    year: '2025',
    client: 'Freelance Project',
    featured: true,
  },
  {
    id: 'graph-isomorphism-algorithm',
    title: 'Graph Isomorphism Recognition Algorithm',
    description: 'Implemented a complex algorithm in C++ to determine if two graphs are isomorphic, featuring a custom GUI for visualization and interaction.',
    image: 'https://images.unsplash.com/photo-1635070049013-d375b4122b16?w=600&h=400&fit=crop&auto=format&q=80',
    tags: ['C++', 'Algorithm', 'Software Architecture', 'GUI'],
    category: 'Full-Stack',
    status: 'Completed',
    timeline: '1 month',
    year: '2024',
    client: 'Freelance Project',
    featured: false,
  },
  {
    id: 'ai-saas-tech-documentation',
    title: 'AI-SaaS Startup Technical Documentation',
    description: 'Authored comprehensive technical documentation and system architecture diagrams for an AI-SaaS platform, covering AWS infrastructure, CI/CD pipelines, and OAuth.',
    image: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?w=600&h=400&fit=crop&auto=format&q=80',
    tags: ['Software Architecture', 'AWS', 'OAuth', 'CI/CD', 'Diagrams'],
    category: 'Distributed Systems',
    status: 'Completed',
    timeline: '3 weeks',
    year: '2024',
    client: 'Freelance Project',
    featured: false,
  },
  {
    id: 'midjourney-automation',
    title: 'Midjourney Automation Project',
    description: 'Developed a Python-based automation script using Make.com and Airtable APIs to streamline the image generation workflow with Midjourney.',
    image: 'https://images.unsplash.com/photo-1679412476483-0493e8392630?w=600&h=400&fit=crop&auto=format&q=80',
    tags: ['Python', 'Airtable', 'Automation', 'Make.com', 'API Integration'],
    category: 'AI/ML',
    status: 'Completed',
    timeline: '2 weeks',
    year: '2024',
    client: 'Freelance Project',
    featured: false,
  },
  {
    id: 'react-python-api-components',
    title: 'React & Python Developer for API Components',
    description: 'Built and integrated React components with a Python backend, developing RESTful API endpoints and managing data flow with PostgreSQL.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop&auto=format&q=80',
    tags: ['Python', 'PostgreSQL', 'React.js', 'API Development'],
    category: 'Full-Stack',
    status: 'Completed',
    timeline: '1 month',
    year: '2024',
    client: 'Freelance Project',
    featured: true,
  },
]

const categories = ['All', 'AI/ML', 'Full-Stack', 'Distributed Systems']

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* 3D Animated Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <AnimatedBackground />
      </div>
      
      <div className="relative z-10">
        {/* Header Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                My Projects
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                A showcase of innovative solutions, from AI-powered applications to full-stack platforms. 
                Each project represents a unique challenge solved with cutting-edge technology and best practices.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary" className="text-sm">
                  {projects.length} Projects Completed
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  Multiple Industries
                </Badge>
              <Badge variant="secondary" className="text-sm">
                AI/ML Specialist
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="All" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="h-auto rounded-full bg-muted p-1 gap-1">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="rounded-full px-4 py-1.5 text-sm font-medium text-muted-foreground transition-all
                               hover:text-primary
                               data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects
                    .filter((project) => category === 'All' || project.category === category)
                    .map((project) => (
                      <Card key={project.id} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                        <div className="relative overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={400}
                            height={240}
                            className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge 
                              variant={project.status === 'Completed' ? 'default' : 'secondary'}
                              className="text-xs"
                            >
                              {project.status}
                            </Badge>
                          </div>
                          {project.featured && (
                            <div className="absolute top-4 right-4">
                              <Badge variant="outline" className="text-xs bg-background/80 backdrop-blur-sm">
                                Featured
                              </Badge>
                            </div>
                          )}
                        </div>
                        
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="outline" className="text-xs">
                              {project.category}
                            </Badge>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <Calendar className="w-3 h-3 mr-1" />
                              {project.year}
                            </div>
                          </div>
                          <CardTitle className="text-xl">{project.title}</CardTitle>
                          <CardDescription className="text-sm">
                            {project.description}
                          </CardDescription>
                        </CardHeader>

                        <CardContent>
                          <div className="mb-4">
                            <div className="flex items-center text-xs text-muted-foreground mb-2">
                              <Clock className="w-3 h-3 mr-1" />
                              {project.timeline}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Client: {project.client}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {project.tags.slice(0, 4).map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                            {project.tags.length > 4 && (
                              <Badge variant="secondary" className="text-xs">
                                +{project.tags.length - 4}
                              </Badge>
                            )}
                          </div>
                        </CardContent>

                        <CardFooter className="flex gap-2">
                          <Button asChild size="sm" className="flex-1">
                            <Link href={`/projects/${project.id}`}>
                              <ExternalLink className="w-4 h-4 mr-2" />
                              View Details
                            </Link>
                          </Button>
                          <Button variant="outline" size="sm">
                            <Github className="w-4 h-4" />
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how I can help bring your vision to life with innovative AI solutions and robust full-stack development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">
                Start a Conversation
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/resume">
                Download Resume
              </Link>
            </Button>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}