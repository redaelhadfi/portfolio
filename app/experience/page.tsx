import { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
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
    title: 'AI Research Intern',
    company: 'Morocco AI Research Lab',
    location: 'Rabat, Morocco',
    period: 'Jun 2024 - Present',
    type: 'Internship',
    description: 'Leading research on neural network optimization and developing novel architectures for computer vision applications.',
    achievements: [
      'Developed a new CNN architecture that improved image classification accuracy by 12%',
      'Published research paper on neural network pruning techniques',
      'Collaborated with international research team on federated learning project',
      'Mentored 3 junior researchers on ML best practices',
    ],
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'CUDA', 'MLflow'],
  },
  {
    title: 'Full-Stack Developer',
    company: 'TechStart Solutions',
    location: 'Casablanca, Morocco',
    period: 'Jan 2024 - May 2024',
    type: 'Contract',
    description: 'Built scalable web applications for startups, focusing on modern tech stacks and best development practices.',
    achievements: [
      'Architected and developed 3 web applications from concept to deployment',
      'Reduced application load times by 40% through optimization techniques',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Led code reviews and established development standards for the team',
    ],
    technologies: ['React', 'Node.js', 'Next.js', 'TypeScript', 'AWS', 'Docker'],
  },
  {
    title: 'Machine Learning Engineer Intern',
    company: 'DataTech Morocco',
    location: 'Rabat, Morocco',
    period: 'Jul 2023 - Sep 2023',
    type: 'Internship',
    description: 'Developed ML models for predictive analytics and worked on data pipeline optimization.',
    achievements: [
      'Built predictive models achieving 94% accuracy for customer churn prediction',
      'Optimized data processing pipeline reducing computation time by 35%',
      'Created automated model monitoring and retraining system',
      'Presented findings to C-level executives and stakeholders',
    ],
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Apache Spark', 'PostgreSQL'],
  },
  {
    title: 'Web Development Freelancer',
    company: 'Self-Employed',
    location: 'Remote',
    period: 'Jan 2022 - Dec 2023',
    type: 'Freelance',
    description: 'Provided web development services to small businesses and startups across various industries.',
    achievements: [
      'Delivered 15+ web projects for clients in e-commerce, education, and healthcare',
      'Maintained 98% client satisfaction rate with 12+ five-star reviews',
      'Generated $25K+ in revenue while maintaining full-time studies',
      'Built long-term partnerships with 5 recurring clients',
    ],
    technologies: ['React', 'Vue.js', 'PHP', 'WordPress', 'MySQL', 'Stripe API'],
  },
]

const education = [
  {
    degree: 'Engineering Degree in Computer Science',
    school: 'National Institute of Posts and Telecommunications (INPT)',
    location: 'Rabat, Morocco',
    period: '2022 - 2025',
    status: 'Final Year',
    description: 'Specialized in Artificial Intelligence and Software Engineering with focus on machine learning, data science, and system architecture.',
    achievements: [
      'Graduated in top 5% of class with GPA 3.8/4.0',
      'Research project on "Federated Learning for Privacy-Preserving AI"',
      'President of AI & Robotics Club (2023-2024)',
      'Winner of National Hackathon on Smart Cities (2023)',
    ],
    coursework: ['Machine Learning', 'Deep Learning', 'System Design', 'Algorithms', 'Database Systems', 'Software Engineering'],
  },
  {
    degree: 'Preparatory Classes in Mathematics and Physics',
    school: 'Lycée Mohammed V',
    location: 'Casablanca, Morocco',
    period: '2020 - 2022',
    status: 'Completed',
    description: 'Intensive two-year program preparing for competitive entrance exams to engineering schools.',
    achievements: [
      'Top 10% in national competitive exam (CNC)',
      'Mathematics Olympiad regional finalist',
      'Tutored fellow students in advanced mathematics',
    ],
    coursework: ['Advanced Mathematics', 'Physics', 'Chemistry', 'Computer Science Fundamentals'],
  },
]

const certifications = [
  {
    title: 'AWS Certified Solutions Architect - Associate',
    issuer: 'Amazon Web Services',
    date: 'March 2024',
    credentialId: 'AWS-ASA-2024-REHD',
    description: 'Demonstrated expertise in designing distributed systems on AWS platform.',
  },
  {
    title: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    date: 'January 2024',
    credentialId: 'TF-DEV-2024-REH',
    description: 'Certified in building and training neural network models using TensorFlow.',
  },
  {
    title: 'Professional Scrum Master I (PSM I)',
    issuer: 'Scrum.org',
    date: 'November 2023',
    credentialId: 'PSM-I-2023-REH',
    description: 'Certified in Scrum framework and agile project management practices.',
  },
  {
    title: 'Meta Front-End Developer Certificate',
    issuer: 'Meta (Coursera)',
    date: 'August 2023',
    credentialId: 'META-FE-2023-REH',
    description: 'Comprehensive program covering modern front-end development with React.',
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
    <div className="min-h-screen bg-background">
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
  )
}
