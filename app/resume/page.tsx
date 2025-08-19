// Client component for interactive resume page
'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { AnimatedBackground } from '@/components/3d/animated-background'
import { 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Globe,
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
  title: 'Data & Software Engineering Student | Research Assistant Intern',
  email: 'redaelhadfi1@gmail.com',
  phone: '+212 684233470',
  location: 'Rabat, Morocco',
  website: 'https://reda-elhadfi.com',
  linkedin: 'linkedin.com/in/redaelhadfi',
  github: 'github.com/redaelhadfi',
}

const professionalSummary = `Data and Software Engineering student seeking a Research Assistant internship (PFE) to contribute to cutting-edge technology and enterprise software innovation. Passionate about leveraging backend development, data science, and cloud computing skills to build robust and scalable solutions. As a freelance Software Engineer, I have architected backend systems and REST APIs for 45+ projects using Python and Django, achieving a 5.0-star rating across 48 reviews with 100% on-time delivery.`

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
      'Seeking Research Assistant internship (PFE) opportunities',
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
    <div className="min-h-screen bg-background print:bg-white relative"
      style={{
        background: 'linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--muted)) 100%)',
      }}
    >
      <AnimatedBackground />
      
      {/* Download PDF Button */}
      <div className="fixed top-4 right-4 z-20 print:hidden">
        <Button asChild variant="default" size="sm">
          <a href="/REDA_ELHADFI_Resume.pdf" download>
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </a>
        </Button>
      </div>

      {/* Resume Content */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-card/80 backdrop-blur-sm rounded-lg border print:border-0 print:shadow-none print:bg-white print:backdrop-blur-none">
          <div className="p-8 print:p-6">
            {/* Personal Info Header */}
            <header className="text-center mb-8 print:mb-6">
              <h1 className="text-4xl font-bold text-foreground mb-2">{personalInfo.name}</h1>
              <h2 className="text-xl text-primary mb-4">{personalInfo.title}</h2>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-1" />
                  {personalInfo.email}
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-1" />
                  {personalInfo.phone}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {personalInfo.location}
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 mt-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Globe className="w-4 h-4 mr-1" />
                  {personalInfo.website}
                </div>
                <div className="flex items-center">
                  <Linkedin className="w-4 h-4 mr-1" />
                  {personalInfo.linkedin}
                </div>
                <div className="flex items-center">
                  <Github className="w-4 h-4 mr-1" />
                  {personalInfo.github}
                </div>
              </div>
            </header>

            {/* Professional Summary */}
            <section className="mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <Star className="w-5 h-5 mr-2 text-primary" />
                Professional Summary
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {professionalSummary}
              </p>
            </section>

            <Separator className="my-8" />

            {/* Experience */}
            <section className="mb-8">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <Building className="w-5 h-5 mr-2 text-primary" />
                Professional Experience
              </h3>
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <div key={index}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">{job.title}</h4>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Building className="w-4 h-4 mr-1" />
                          <span className="mr-4">{job.company}</span>
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mt-1 sm:mt-0">
                        <Calendar className="w-4 h-4 mr-1" />
                        {job.period}
                      </div>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                    {index < experience.length - 1 && <div className="mt-6 border-b border-border" />}
                  </div>
                ))}
              </div>
            </section>

            <Separator className="my-8" />

            {/* Education */}
            <section className="mb-8">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <GraduationCap className="w-5 h-5 mr-2 text-primary" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Building className="w-4 h-4 mr-1" />
                          <span className="mr-4">{edu.school}</span>
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mt-1 sm:mt-0">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.period}
                      </div>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                      {edu.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                    {index < education.length - 1 && <div className="mt-6 border-b border-border" />}
                  </div>
                ))}
              </div>
            </section>

            <Separator className="my-8" />

            {/* Skills */}
            <section className="mb-8">
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
                        <Badge key={skill} variant="secondary" className="text-xs">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section>
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-primary" />
                  Certifications
                </h3>
                <ul className="space-y-2">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{cert}</span>
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
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Footer */}
            <footer className="mt-12 pt-6 border-t border-border text-center">
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
