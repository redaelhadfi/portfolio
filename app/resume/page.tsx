// Client component for interactive resume page
'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { AnimatedBackground } from '@/components/3d/animated-background'
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Calendar,
  Building,
  GraduationCap,
  Award,
  Code,
  Star,
  ExternalLink
} from 'lucide-react'

const personalInfo = {
  name: 'Reda El Hadfi',
  title: 'Data & Software Engineering Student | Full-Stack Developer',
  email: 'redaelhadfi1@gmail.com',
  location: 'Rabat, Morocco',
  website: 'https://reda-elhadfi.com',
  freelancer: 'https://www.freelancer.com/u/elhadfi',
  portfolioAlt: 'http://hadfitech.dev/',
  linkedin: 'linkedin.com/in/redaelhadfi',
  github: 'github.com/redaelhadfi',
}

const professionalSummary = `Data and Software Engineering student passionate about building innovative solutions that bridge cutting-edge technology with real-world applications. Experienced in architecting backend systems, developing intelligent applications, and leveraging data science to solve complex problems. As a freelance Software Engineer, I have successfully delivered numerous production projects using Python and Django with consistently outstanding client feedback and on-time delivery.`

const experience = [
  {
    title: 'Software Engineer',
    company: 'Freelancer.com',
    location: 'Remote',
    period: 'Nov 2023 - Present',
    achievements: [
      'Architected backend systems and REST APIs for 45+ projects using Python, Django, and Flask with PostgreSQL',
      'Deployed scalable applications on AWS using Docker and CI/CD pipelines to enhance reliability and reduce deployment times',
      'Achieved a 5.0-star rating across 48 reviews by delivering high-quality code and clear communication',
      'Maintained 100% on-time delivery rate and 100% on-budget completion rate',
    ],
  },
  {
    title: 'Data Scientist',
    company: 'Experio',
    location: 'Casablanca, Morocco',
    period: 'Jun 2023 - Jan 2024',
    achievements: [
      'Automated Table Detection & Information Extraction Project using deep learning',
      'Implemented robust solution using CNNs for precise table identification in images',
      'Integrated OCR (Tesseract) to extract structured data from recognized tables',
      'Achieved 98% detection accuracy, reducing manual data entry workload by over 95%',
    ],
  },
]

const education = [
  {
    degree: 'Engineering Degree in Data and Software Engineering',
    school: 'National Institute of Posts and Telecommunications (INPT)',
    location: 'Rabat, Morocco',
    period: '2022 - 2025',
    details: [
      'Data and Software Engineering specialization',
      'Focus on AI, Machine Learning, and Full-Stack Development',
      'Vice President of Student Council (2024)',
      'Member of CIT INPT - Computer & Information Technology Club',
    ],
  },
  {
    degree: 'Diploma in Scientific and Technical University Studies (DEUST)',
    school: 'Faculty of Sciences and Technologies',
    location: 'Fez, Morocco',
    period: '2020 - 2022',
    details: [
      'University Diploma in Scientific and Technical Studies',
      'Preparatory program for engineering schools',
      'Strong foundation in mathematics and computer science fundamentals',
    ],
  },
]

const skills = {
  'Programming Languages': [
    'Python', 'Java', 'JavaScript', 'SQL', 'TypeScript', 'HTML', 'CSS'
  ],
  'Backend Development': [
    'Django', 'Flask', 'Node.js', 'REST APIs', 'FastAPI', 'Express.js'
  ],
  'Frontend Development': [
    'React', 'Next.js', 'Angular', 'Tailwind CSS', 'Bootstrap', 'Vue.js'
  ],
  'AI/Machine Learning': [
    'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'Pandas', 'NumPy', 'CNN', 'OCR'
  ],
  'Cloud & DevOps': [
    'AWS (EC2, S3, Lambda, Rekognition)', 'Docker', 'CI/CD', 'Git', 'Linux'
  ],
  'Databases': [
    'PostgreSQL', 'MySQL', 'MongoDB', 'SQLite'
  ],
}

const certifications = [
  'Supervised Machine Learning: Regression and Classification - DeepLearning.AI (2023)',
  'Python Level 1 - Freelancer.com (2023)',
  'US English Level 1 - Freelancer.com (2023)',
  'Preferred Freelancer Program SLA - Freelancer.com (2024)',
]

const achievements = [
  'Freelancer.com: 5.0-star rating with 48 reviews and 100% job success rate',
  '30+ Five-star reviews milestone achieved on Freelancer.com',
  'Vice President of Student Council at INPT (2024)',
  'Member of CIT INPT - Computer & Information Technology Club',
  '45+ successful backend projects delivered using Python and Django',
]

export default function ResumePage() {
  useEffect(() => {
    document.title = 'Resume | Reda El Hadfi - AI Architect & Full-Stack Engineer'
  }, [])

  return (
    <div className="min-h-screen relative bg-transparent print:bg-white">
      <AnimatedBackground variant="resume" />

      {/* Resume Content */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-4xl mx-auto relative group">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-xl opacity-40 group-hover:opacity-60 transition-opacity print:hidden" />
          <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl border border-border/60 shadow-xl print:border-0 print:shadow-none print:bg-white print:backdrop-blur-none">
          <div className="p-8 print:p-6">
            {/* Personal Info Header */}
            <header className="text-center mb-10 print:mb-6">
              <h1 className="text-4xl font-bold text-foreground mb-2">{personalInfo.name}</h1>
              <h2 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mb-5">{personalInfo.title}</h2>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-1" />
                  {personalInfo.email}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {personalInfo.location}
                </div>
              </div>
              
              {/* Link bar redesigned (website removed as requested) */}
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                <Link
                  href={personalInfo.freelancer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-muted/60 to-muted/30 backdrop-blur-sm border border-border/50 text-[11px] sm:text-xs font-medium text-foreground/85 hover:text-foreground hover:from-primary/15 hover:to-accent/15 transition-all shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-primary/80 group-hover:text-primary transition-colors" />
                  <span className="tracking-wide">freelancer.com/u/elhadfi</span>
                </Link>
                <Link
                  href={personalInfo.portfolioAlt}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-muted/60 to-muted/30 backdrop-blur-sm border border-border/50 text-[11px] sm:text-xs font-medium text-foreground/85 hover:text-foreground hover:from-primary/15 hover:to-accent/15 transition-all shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-primary/80 group-hover:text-primary transition-colors" />
                  <span className="tracking-wide">hadfitech.dev</span>
                </Link>
                <Link
                  href={`https://${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-muted/60 to-muted/30 backdrop-blur-sm border border-border/50 text-[11px] sm:text-xs font-medium text-foreground/85 hover:text-foreground hover:from-primary/15 hover:to-accent/15 transition-all shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  <Linkedin className="w-3.5 h-3.5 text-primary/80 group-hover:text-primary transition-colors" />
                  <span className="tracking-wide">linkedin.com/in/redaelhadfi</span>
                </Link>
                <Link
                  href={`https://${personalInfo.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-muted/60 to-muted/30 backdrop-blur-sm border border-border/50 text-[11px] sm:text-xs font-medium text-foreground/85 hover:text-foreground hover:from-primary/15 hover:to-accent/15 transition-all shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  <Github className="w-3.5 h-3.5 text-primary/80 group-hover:text-primary transition-colors" />
                  <span className="tracking-wide">github.com/redaelhadfi</span>
                </Link>
              </div>

              {/* Quick Stats removed per request to remove numbers */}

              <div className="mt-6 flex justify-center gap-4 print:hidden">
                <Button size="sm" variant="outline" onClick={() => window.print()} className="text-xs">Print / PDF</Button>
                <Button size="sm" asChild className="text-xs">
                  <Link href="/contact">Hire Me</Link>
                </Button>
              </div>
            </header>

            {/* Professional Summary */}
            <section className="mb-10">
              <h3 className="text-xl font-bold text-foreground mb-5 flex items-center relative">
                <span className="absolute -left-4 top-1/2 -translate-y-1/2 hidden sm:block w-2 h-6 bg-gradient-to-b from-primary to-accent rounded" />
                <Star className="w-5 h-5 mr-2 text-primary drop-shadow" />
                Professional Summary
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {professionalSummary}
              </p>
            </section>

            <Separator className="my-8" />

            {/* Experience */}
            <section className="mb-10">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <Building className="w-5 h-5 mr-2 text-primary" />
                Professional Experience
              </h3>
              <div className="relative pl-4 sm:pl-6 before:content-[''] before:absolute before:top-0 before:left-1 before:w-px before:h-full before:bg-border">
                {experience.map((job, index) => (
                  <div key={index} className="relative pb-10 last:pb-0 pl-2 sm:pl-1">
                    {/* Timeline bullet improved alignment */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">{job.title}</h4>
                        <div className="flex flex-wrap items-center text-muted-foreground text-xs gap-x-3 gap-y-1">
                          <span className="inline-flex items-center"><Building className="w-3.5 h-3.5 mr-1" />{job.company}</span>
                          <span className="inline-flex items-center"><MapPin className="w-3.5 h-3.5 mr-1" />{job.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground mt-1 sm:mt-0">
                        <Calendar className="w-3.5 h-3.5 mr-1" />
                        {job.period}
                      </div>
                    </div>
                    <ul className="mt-2 space-y-1.5 text-[13px] leading-relaxed text-muted-foreground">
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx} className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary/60">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <Separator className="my-8" />

            {/* Education */}
            <section className="mb-10">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <GraduationCap className="w-5 h-5 mr-2 text-primary" />
                Education
              </h3>
              <div className="relative pl-4 sm:pl-6 before:content-[''] before:absolute before:top-0 before:left-1 before:w-px before:h-full before:bg-border">
                {education.map((edu, index) => (
                  <div key={index} className="relative pb-10 last:pb-0 pl-2 sm:pl-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <div>
                        <h4 className="text-base font-semibold text-foreground">{edu.degree}</h4>
                        <div className="flex flex-wrap items-center text-muted-foreground text-xs gap-x-3 gap-y-1">
                          <span className="inline-flex items-center"><Building className="w-3.5 h-3.5 mr-1" />{edu.school}</span>
                          <span className="inline-flex items-center"><MapPin className="w-3.5 h-3.5 mr-1" />{edu.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground mt-1 sm:mt-0">
                        <Calendar className="w-3.5 h-3.5 mr-1" />
                        {edu.period}
                      </div>
                    </div>
                    <ul className="mt-2 space-y-1.5 text-[13px] leading-relaxed text-muted-foreground">
                      {edu.details.map((detail, idx) => (
                        <li key={idx} className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/60">{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <Separator className="my-8" />

            {/* Skills */}
      <section className="mb-10">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <Code className="w-5 h-5 mr-2 text-primary" />
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h4 className="font-semibold text-foreground mb-3">{category}</h4>
          <div className="flex flex-wrap gap-1">
                      {skillList.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-[10px] tracking-wide uppercase rounded-md bg-muted/70 hover:bg-muted">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <Separator className="my-8" />

            {/* Certifications & Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <section>
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-primary" />
                  Certifications
                </h3>
                <ul className="space-y-2">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="w-2 h-2 bg-gradient-to-br from-primary to-accent rounded-full mr-3 mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{cert}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-primary" />
                  Key Achievements
                </h3>
                <ul className="space-y-2">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="w-2 h-2 bg-gradient-to-br from-primary to-accent rounded-full mr-3 mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Footer */}
            <footer className="mt-14 pt-8 border-t border-border/60 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                References available upon request
              </p>
              <div className="flex justify-center gap-4 print:hidden">
                <Button variant="outline" asChild>
                  <Link href="/projects">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Projects
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Me
                  </Link>
                </Button>
              </div>
            </footer>
          </div>
        </div>
      </div>
      </div>{/* end container */}

      {/* Additional Actions */}
      <section className="py-16 bg-card print:hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Let&apos;s Connect
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Interested in working together? I&apos;d love to discuss how my skills and experience 
              can contribute to your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/projects">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Portfolio
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
  </div>
  )
}
