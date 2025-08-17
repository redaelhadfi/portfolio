import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ExternalLink, Github, Calendar, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Projects | Reda El Hadfi - AI Architect & Full-Stack Engineer',
  description: 'Explore my portfolio of AI and full-stack development projects, showcasing innovative solutions and technical excellence.',
}

const projects = [
  {
    id: 'ai-document-analyzer',
    title: 'AI Document Analyzer',
    description: 'Advanced document processing system using computer vision and NLP for automated content extraction and analysis.',
    image: '/projects/ai-document-analyzer.jpg',
    tags: ['Python', 'TensorFlow', 'FastAPI', 'React', 'Docker'],
    category: 'AI/ML',
    status: 'Completed',
    timeline: '3 months',
    year: '2024',
    client: 'TechCorp Solutions',
    featured: true,
  },
  {
    id: 'smart-inventory-system',
    title: 'Smart Inventory Management',
    description: 'Real-time inventory tracking system with predictive analytics and automated reordering capabilities.',
    image: '/projects/smart-inventory.jpg',
    tags: ['Node.js', 'MongoDB', 'Next.js', 'TypeScript', 'AWS'],
    category: 'Full-Stack',
    status: 'Completed',
    timeline: '4 months',
    year: '2024',
    client: 'RetailFlow Inc.',
    featured: true,
  },
  {
    id: 'blockchain-voting-platform',
    title: 'Blockchain Voting Platform',
    description: 'Secure, transparent voting system built on Ethereum with smart contracts and decentralized architecture.',
    image: '/projects/blockchain-voting.jpg',
    tags: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'IPFS'],
    category: 'Blockchain',
    status: 'Completed',
    timeline: '5 months',
    year: '2023',
    client: 'Democratic Tech Foundation',
    featured: false,
  },
  {
    id: 'ml-recommendation-engine',
    title: 'ML Recommendation Engine',
    description: 'Personalized recommendation system using collaborative filtering and deep learning techniques.',
    image: '/projects/ml-recommendation.jpg',
    tags: ['Python', 'PyTorch', 'Redis', 'GraphQL', 'Kubernetes'],
    category: 'AI/ML',
    status: 'Completed',
    timeline: '6 months',
    year: '2023',
    client: 'StreamTech Media',
    featured: true,
  },
  {
    id: 'iot-monitoring-dashboard',
    title: 'IoT Monitoring Dashboard',
    description: 'Real-time IoT device monitoring with data visualization and alert management system.',
    image: '/projects/iot-dashboard.jpg',
    tags: ['Vue.js', 'Node.js', 'InfluxDB', 'Grafana', 'MQTT'],
    category: 'IoT',
    status: 'Completed',
    timeline: '3 months',
    year: '2023',
    client: 'IndustrialTech Ltd.',
    featured: false,
  },
  {
    id: 'ai-chatbot-platform',
    title: 'AI Chatbot Platform',
    description: 'Multi-tenant conversational AI platform with natural language understanding and custom integrations.',
    image: '/projects/ai-chatbot.jpg',
    tags: ['Python', 'Rasa', 'FastAPI', 'PostgreSQL', 'Docker'],
    category: 'AI/ML',
    status: 'In Progress',
    timeline: '4 months',
    year: '2024',
    client: 'ChatFlow Solutions',
    featured: false,
  },
]

const categories = ['All', 'AI/ML', 'Full-Stack', 'Blockchain', 'IoT']

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
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
              <TabsList className="grid w-full max-w-md grid-cols-5">
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category} className="text-sm">
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
  )
}
