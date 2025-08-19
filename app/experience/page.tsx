import { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AnimatedBackground } from '@/components/3d/animated-background'
import { 
  Calendar, 
  MapPin, 
  Building, 
  Code, 
  Brain, 
  Users, 
  Award,
  ExternalLink,
  Download
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Experience | Reda El Hadfi - AI Architect & Full-Stack Engineer',
  description: 'Explore my professional experience, education, and achievements in AI architecture and full-stack development.',
}

const workExperience = [
  {
    title: 'Software Engineer',
    company: 'Freelancer.com',
    location: 'Remote',
    period: 'Nov 2023 - Present',
    type: 'Freelance',
    description: 'Delivering high-quality backend systems and REST APIs for diverse clients worldwide with focus on Python and Django development.',
    achievements: [
      'Architected backend systems and REST APIs for 45+ projects using Python, Django, and Flask with PostgreSQL',
      'Deployed scalable applications on AWS using Docker and CI/CD pipelines to enhance reliability',
      'Achieved 5.0-star rating across 48 reviews with 100% on-time delivery and on-budget completion',
      'Built long-term partnerships with recurring clients across various industries',
    ],
    technologies: ['Python', 'Django', 'Flask', 'PostgreSQL', 'AWS', 'Docker', 'REST APIs'],
  },
  {
    title: 'Data Scientist',
    company: 'Experio',
    location: 'Casablanca, Morocco',
    period: 'Jun 2023 - Jan 2024',
    type: 'Internship',
    description: 'Automated table detection and information extraction project using deep learning and computer vision techniques.',
    achievements: [
      'Implemented robust solution using CNNs for precise table identification in images',
      'Integrated OCR (Tesseract) to extract structured data from recognized tables',
      'Achieved 98% detection accuracy, reducing manual data entry workload by over 95%',
      'Streamlined workflows for efficient handling of diverse tabular information',
    ],
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'OCR', 'Tesseract', 'Data Science'],
  },
]

const education = [
  {
    degree: 'Engineering Degree in Data and Software Engineering',
    school: 'National Institute of Posts and Telecommunications (INPT)',
    location: 'Rabat, Morocco',
    period: '2022 - 2025',
    status: 'Current',
    description: 'Specializing in Data and Software Engineering with focus on backend development, AI applications, and cloud computing.',
    achievements: [
      'Vice President of Student Council (2024)',
      'Member of CIT INPT - Computer & Information Technology Club',
      'Seeking Research Assistant internship (PFE) opportunities',
      'Focus on cutting-edge technology and enterprise software innovation',
    ],
    coursework: ['Data Engineering', 'Software Engineering', 'Data Structures', 'Algorithms', 'Database Systems', 'AI & Machine Learning'],
  },
  {
    degree: 'Diploma in Scientific and Technical University Studies (DEUST)',
    school: 'Faculty of Sciences and Technologies',
    location: 'Fez, Morocco',
    period: '2020 - 2022',
    status: 'Completed',
    description: 'University Diploma in Scientific and Technical Studies - preparatory program for engineering schools.',
    achievements: [
      'Successfully qualified for INPT engineering program',
      'Strong foundation in mathematics and computer science fundamentals',
      'Developed analytical and problem-solving skills',
    ],
    coursework: ['Advanced Mathematics', 'Physics', 'Computer Science Fundamentals', 'Programming Basics'],
  },
]

const certifications = [
  {
    title: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'DeepLearning.AI',
    date: '2023',
    credentialId: 'DL-ML-2023-REH',
    description: 'Comprehensive course on machine learning fundamentals and supervised learning techniques.',
  },
  {
    title: 'Python Level 1',
    issuer: 'Freelancer.com',
    date: '2023',
    credentialId: 'FL-PY-L1-2023',
    description: 'Certified proficiency in Python programming language.',
  },
  {
    title: 'US English Level 1',
    issuer: 'Freelancer.com',
    date: '2023',
    credentialId: 'FL-EN-L1-2023',
    description: 'Certified proficiency in US English communication.',
  },
  {
    title: 'Preferred Freelancer Program SLA',
    issuer: 'Freelancer.com',
    date: '2024',
    credentialId: 'FL-PFP-2024',
    description: 'Recognition for consistent high-quality work and client satisfaction.',
  },
]

const skills = {
  technical: [
    { name: 'Python', level: 95 },
    { name: 'JavaScript/TypeScript', level: 90 },
    { name: 'React/Next.js', level: 90 },
    { name: 'Machine Learning', level: 85 },
    { name: 'Node.js', level: 85 },
    { name: 'AWS/Cloud', level: 80 },
    { name: 'Docker/Kubernetes', level: 75 },
    { name: 'System Design', level: 80 },
  ],
  soft: [
    { name: 'Problem Solving', level: 95 },
    { name: 'Communication', level: 90 },
    { name: 'Leadership', level: 85 },
    { name: 'Project Management', level: 80 },
    { name: 'Mentoring', level: 85 },
    { name: 'Adaptability', level: 90 },
  ],
}

export default function ExperiencePage() {
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
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Professional Experience
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A comprehensive overview of my journey in AI, software engineering, and continuous learning. 
              From academic excellence to real-world impact, each experience has shaped my expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/resume">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="experience" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="grid w-full max-w-md grid-cols-4">
                  <TabsTrigger value="experience">Work</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="certifications">Certs</TabsTrigger>
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                </TabsList>
              </div>

              {/* Work Experience Tab */}
              <TabsContent value="experience">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-center mb-8">Work Experience</h2>
                  {workExperience.map((job, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardHeader className="pb-4">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                          <div>
                            <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <Building className="w-4 h-4 mr-1" />
                                {job.company}
                              </div>
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {job.location}
                              </div>
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                {job.period}
                              </div>
                            </div>
                          </div>
                          <Badge variant={job.type === 'Internship' ? 'secondary' : 'default'}>
                            {job.type}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <p className="text-muted-foreground">{job.description}</p>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Key Achievements</h4>
                          <ul className="space-y-2">
                            {job.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                                <span className="text-muted-foreground">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Education Tab */}
              <TabsContent value="education">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
                  {education.map((edu, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardHeader className="pb-4">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                          <div>
                            <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <Building className="w-4 h-4 mr-1" />
                                {edu.school}
                              </div>
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {edu.location}
                              </div>
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                {edu.period}
                              </div>
                            </div>
                          </div>
                          <Badge variant={edu.status === 'Final Year' ? 'default' : 'secondary'}>
                            {edu.status}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <p className="text-muted-foreground">{edu.description}</p>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Achievements</h4>
                          <ul className="space-y-2">
                            {edu.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                                <span className="text-muted-foreground">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Relevant Coursework</h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.map((course) => (
                              <Badge key={course} variant="outline" className="text-xs">
                                {course}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Certifications Tab */}
              <TabsContent value="certifications">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-center mb-8">Certifications & Credentials</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certifications.map((cert, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <CardTitle className="text-lg mb-2">{cert.title}</CardTitle>
                              <div className="flex items-center text-sm text-muted-foreground mb-2">
                                <Award className="w-4 h-4 mr-1" />
                                {cert.issuer}
                              </div>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar className="w-4 h-4 mr-1" />
                                {cert.date}
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-3">
                            {cert.description}
                          </p>
                          <div className="text-xs text-muted-foreground">
                            Credential ID: {cert.credentialId}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Skills Tab */}
              <TabsContent value="skills">
                <div className="space-y-12">
                  <h2 className="text-3xl font-bold text-center mb-8">Skills & Competencies</h2>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Technical Skills */}
                    <div>
                      <div className="flex items-center mb-6">
                        <Code className="w-6 h-6 text-primary mr-3" />
                        <h3 className="text-2xl font-bold">Technical Skills</h3>
                      </div>
                      <div className="space-y-4">
                        {skills.technical.map((skill) => (
                          <div key={skill.name}>
                            <div className="flex justify-between mb-2">
                              <span className="text-sm font-medium">{skill.name}</span>
                              <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2">
                              <div
                                className="bg-primary h-2 rounded-full transition-all duration-500"
                                style={{ width: `${skill.level}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Soft Skills */}
                    <div>
                      <div className="flex items-center mb-6">
                        <Users className="w-6 h-6 text-primary mr-3" />
                        <h3 className="text-2xl font-bold">Soft Skills</h3>
                      </div>
                      <div className="space-y-4">
                        {skills.soft.map((skill) => (
                          <div key={skill.name}>
                            <div className="flex justify-between mb-2">
                              <span className="text-sm font-medium">{skill.name}</span>
                              <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2">
                              <div
                                className="bg-primary h-2 rounded-full transition-all duration-500"
                                style={{ width: `${skill.level}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Additional Skills */}
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-4">Additional Competencies</h3>
                    <div className="flex flex-wrap justify-center gap-2">
                      {[
                        'Agile/Scrum', 'Technical Writing', 'Code Review', 'Mentoring',
                        'Public Speaking', 'Research', 'System Architecture', 'API Design',
                        'Database Design', 'Security Best Practices', 'Performance Optimization',
                        'Cross-functional Collaboration'
                      ].map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Brain className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Leverage This Experience?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              With a strong foundation in AI, full-stack development, and proven results across multiple projects, 
              I&apos;m ready to bring value to your next challenge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Let&apos;s Discuss Your Project
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/projects">
                  View My Work
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
