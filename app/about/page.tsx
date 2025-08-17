import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Brain, 
  Code, 
  GraduationCap, 
  Award, 
  Users, 
  Coffee, 
  Globe, 
  BookOpen,
  Download,
  Calendar,
  MapPin
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About | Reda El Hadfi - AI Architect & Full-Stack Engineer',
  description: 'Learn about my journey as an AI Architect and Full-Stack Engineer, my passion for innovation, and the values that drive my work.',
}

const skills = [
  { category: 'AI/ML', items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Hugging Face', 'OpenCV', 'NLP'] },
  { category: 'Backend', items: ['Python', 'Node.js', 'FastAPI', 'Express.js', 'Django', 'GraphQL'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Tailwind CSS', 'React Native'] },
  { category: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Microservices'] },
  { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'InfluxDB'] },
  { category: 'Other', items: ['Git', 'Linux', 'Agile/Scrum', 'System Design', 'API Design'] },
]

const achievements = [
  {
    title: 'Academic Excellence',
    description: 'Top 5% in Computer Science program at INPT',
    icon: GraduationCap,
    year: '2024',
  },
  {
    title: 'AI Research Publication',
    description: 'Published research on neural network optimization',
    icon: BookOpen,
    year: '2023',
  },
  {
    title: 'Hackathon Winner',
    description: 'First place in National AI Innovation Challenge',
    icon: Award,
    year: '2023',
  },
  {
    title: 'Open Source Contributor',
    description: '500+ contributions to ML and web frameworks',
    icon: Code,
    year: '2022-2024',
  },
]

const values = [
  {
    title: 'Innovation First',
    description: 'I believe in pushing the boundaries of what&apos;s possible with technology, always seeking creative solutions to complex problems.',
    icon: Brain,
  },
  {
    title: 'Quality & Craftsmanship',
    description: 'Every line of code I write is crafted with care, following best practices and maintaining high standards.',
    icon: Award,
  },
  {
    title: 'Continuous Learning',
    description: 'Technology evolves rapidly, and I&apos;m committed to staying at the forefront through continuous learning and experimentation.',
    icon: BookOpen,
  },
  {
    title: 'Collaboration',
    description: 'Great software is built by great teams. I value open communication, knowledge sharing, and collective problem-solving.',
    icon: Users,
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Badge variant="outline" className="mr-3">
                    About Me
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    Rabat, Morocco
                  </div>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Crafting the Future with AI & Code
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  I&apos;m a passionate AI Architect and Full-Stack Engineer currently in my final year at INPT. 
                  I specialize in building intelligent systems that solve real-world problems, combining cutting-edge 
                  AI research with practical software engineering.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link href="/contact">
                      Let&apos;s Work Together
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/resume">
                      <Download className="w-4 h-4 mr-2" />
                      Download Resume
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8">
                  <Image
                    src="/about/reda-profile.jpg"
                    alt="Reda El Hadfi"
                    width={400}
                    height={500}
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                </div>
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -left-6 bg-card border rounded-lg p-4 shadow-lg">
                  <div className="flex items-center">
                    <Code className="w-8 h-8 text-primary mr-3" />
                    <div>
                      <p className="text-2xl font-bold">15+</p>
                      <p className="text-sm text-muted-foreground">Projects</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 bg-card border rounded-lg p-4 shadow-lg">
                  <div className="flex items-center">
                    <Calendar className="w-8 h-8 text-primary mr-3" />
                    <div>
                      <p className="text-2xl font-bold">3+</p>
                      <p className="text-sm text-muted-foreground">Years Exp</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">My Journey</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                My journey into the world of AI and software development began during my early years at INPT, 
                where I discovered the fascinating intersection of mathematics, computer science, and real-world 
                problem solving. What started as curiosity about machine learning algorithms quickly evolved 
                into a deep passion for creating intelligent systems.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Throughout my academic journey, I&apos;ve had the privilege of working on diverse projects ranging 
                from computer vision applications to full-stack web platforms. Each project has taught me 
                something new about the art of building software that not only works but makes a meaningful 
                impact on people&apos;s lives.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Beyond the technical aspects, I&apos;m deeply committed to the ethical development of AI systems. 
                I believe that as developers and engineers, we have a responsibility to create technology that 
                is inclusive, transparent, and beneficial to society as a whole.
              </p>
              <p className="text-lg leading-relaxed">
                When I&apos;m not coding or researching the latest in AI, you&apos;ll find me contributing to open-source 
                projects, mentoring fellow students, or exploring the beautiful landscapes of Morocco with my camera.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Technical Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skillGroup) => (
                <Card key={skillGroup.category} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{skillGroup.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What Drives Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value) => (
                <div key={value.title} className="flex">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Key Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {achievements.map((achievement) => (
                <Card key={achievement.title} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <achievement.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold">{achievement.title}</h3>
                          <Badge variant="outline" className="text-xs">
                            {achievement.year}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Coffee className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-6">Beyond the Code</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              When I&apos;m not immersed in algorithms and architectures, I enjoy exploring Morocco&apos;s rich culture, 
              contributing to open-source projects, and sharing knowledge through technical writing and mentoring. 
              I believe the best innovations come from diverse perspectives and continuous learning.
            </p>
            <div className="flex justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-2" />
                <span>3 Languages</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="w-4 h-4 mr-2" />
                <span>Continuous Learner</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                <span>Open Source Contributor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Let&apos;s Build Something Amazing
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I&apos;m always excited to collaborate on innovative projects and explore new challenges. 
            Whether you&apos;re looking to build an AI solution or need a reliable full-stack developer, 
            let&apos;s connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">
                Start a Conversation
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/experience">
                View Experience
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
