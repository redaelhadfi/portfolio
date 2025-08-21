import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AnimatedBackground } from '@/components/3d/animated-background'
import {
  Brain,
  Code,
  Award,
  Users,
  Coffee,
  Globe,
  BookOpen,
  ExternalLink,
  Calendar,
  MapPin
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About | Reda El Hadfi - AI Architect & Full-Stack Engineer',
  description: 'Learn about my journey as an AI Architect and Full-Stack Engineer, my passion for innovation, and the values that drive my work.',
}

const skills = [
  { category: 'Programming Languages', items: ['Python', 'Java', 'JavaScript', 'SQL', 'TypeScript', 'HTML'] },
  { category: 'Backend Development', items: ['Django', 'Flask', 'Node.js', 'REST APIs', 'FastAPI', 'Express.js'] },
  { category: 'Frontend Development', items: ['React', 'Next.js', 'Angular', 'Tailwind CSS', 'Bootstrap', 'Vue.js'] },
  { category: 'AI/Machine Learning', items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'Pandas', 'CNN'] },
  { category: 'Cloud & DevOps', items: ['AWS (EC2, S3, Lambda)', 'Docker', 'CI/CD', 'Git', 'Linux'] },
  { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite'] },
]

const achievements = [
  {
    title: 'Freelancer Success',
    description: '5.0-star rating with 48+ reviews on Freelancer.com',
    icon: Award,
    year: '2024',
  },
  {
    title: 'Student Leadership',
    description: 'Vice President of Student Council at INPT',
    icon: Users,
    year: '2024',
  },
  {
    title: 'Technical Excellence',
    description: '45+ backend projects with Python & Django',
    icon: Code,
    year: '2023',
  },
  {
    title: 'Data Science Impact',
    description: '98% accuracy in automated data extraction using CNN',
    icon: Brain,
    year: '2023',
  },
]

const values = [
  {
    title: 'Innovation First',
    description: 'I believe in pushing the boundaries of what&apos;s possible with technology, always seeking creative solutions to complex problems.',
    icon: Brain,
    gradient: 'from-blue-500/20 to-purple-500/20',
  },
  {
    title: 'Quality & Craftsmanship',
    description: 'Every line of code I write is crafted with care, following best practices and maintaining high standards.',
    icon: Award,
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'Continuous Learning',
    description: 'Technology evolves rapidly, and I&apos;m committed to staying at the forefront through continuous learning and experimentation.',
    icon: BookOpen,
    gradient: 'from-orange-500/20 to-red-500/20',
  },
  {
    title: 'Collaboration',
    description: 'Great software is built by great teams. I value open communication, knowledge sharing, and collective problem-solving.',
    icon: Users,
    gradient: 'from-pink-500/20 to-violet-500/20',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* 3D Animated Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <AnimatedBackground />
      </div>
      
      <div className="relative z-10">
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
                  I&apos;m a Data and Software Engineering student at INPT with a passion for building innovative 
                  solutions that bridge the gap between cutting-edge AI and real-world applications. With 45+ successful 
                  freelance projects and a 5.0-star rating on Freelancer.com, I specialize in architecting backend 
                  systems and intelligent applications that solve complex problems.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link href="/contact">
                      Let&apos;s Work Together
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/resume">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Resume
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8">
                  <Image
                    src="/reda.jpeg"
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
                My programming journey began when I was 14 years old, driven by pure curiosity and a desire to 
                understand how technology works from the ground up. I started by learning Python from scratch, 
                creating simple algorithms, and diving into the fascinating worlds of cybersecurity and networking. 
                Those early days of trial and error taught me the fundamentals that would shape my entire career.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                As I progressed through my studies at INPT, I discovered the incredible potential of combining 
                my programming skills with artificial intelligence and machine learning. What started as simple 
                scripts evolved into sophisticated systems capable of solving real-world problems. Each project 
                became a stepping stone to understanding more complex concepts and technologies.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Throughout my academic and freelance journey, I&apos;ve had the privilege of working on diverse 
                projects ranging from computer vision applications to full-stack web platforms. Each challenge 
                has taught me something new about the art of building software that not only works but makes 
                a meaningful impact on people&apos;s lives.
              </p>
              <p className="text-lg leading-relaxed">
                Today, I continue to push the boundaries of what&apos;s possible with code, always staying curious 
                about emerging technologies. When I&apos;m not coding or exploring the latest in AI, you&apos;ll find me 
                contributing to open-source projects, sharing knowledge with fellow developers, or capturing 
                the beautiful landscapes of Morocco through my lens.
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
              {values.map((value, index) => (
                <Card key={value.title} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-0">
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <CardContent className="relative p-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-6">
                        <div className={`w-14 h-14 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <value.icon className="w-7 h-7 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-3">
                          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                            {value.title}
                          </h3>
                          <div className="ml-auto">
                            <Badge variant="outline" className="text-xs opacity-60">
                              0{index + 1}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                          {value.description}
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
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-8 shadow-lg">
              <Code className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Let&apos;s Build Something Amazing
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              I&apos;m always excited to collaborate on innovative projects and explore new challenges. 
              Whether you&apos;re looking to build an AI solution or need a reliable full-stack developer, 
              let&apos;s connect and create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                <Link href="/contact">
                  Start a Conversation
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="shadow-lg hover:shadow-xl transition-shadow bg-background/80 backdrop-blur">
                <Link href="/experience">
                  View Experience
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}