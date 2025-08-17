import { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { 
  Download, 
  Printer, 
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

export const metadata: Metadata = {
  title: 'Resume | Reda El Hadfi - AI Architect & Full-Stack Engineer',
  description: 'Download or view the professional resume of Reda El Hadfi, AI Architect and Full-Stack Engineer.',
}

const personalInfo = {
  name: 'Reda El Hadfi',
  title: 'AI Architect & Full-Stack Engineer',
  email: 'reda.elhadfi@inpt.ac.ma',
  phone: '+212 6XX XXX XXX',
  location: 'Rabat, Morocco',
  website: 'https://reda-elhadfi.com',
  linkedin: 'linkedin.com/in/reda-elhadfi',
  github: 'github.com/redaelhadfi',
}

const professionalSummary = `Innovative AI Architect and Full-Stack Engineer with 3+ years of experience building scalable AI solutions and modern web applications. Currently pursuing final year at INPT with specialization in Artificial Intelligence and Software Engineering. Proven track record of delivering 15+ successful projects across multiple industries, with expertise in machine learning, deep learning, and full-stack development using modern frameworks.`

const experience = [
  {
    title: 'AI Research Intern',
    company: 'Morocco AI Research Lab',
    location: 'Rabat, Morocco',
    period: 'Jun 2024 - Present',
    achievements: [
      'Developed novel CNN architecture improving image classification accuracy by 12%',
      'Published research paper on neural network optimization techniques',
      'Led federated learning project with international research collaboration',
      'Mentored 3 junior researchers on machine learning best practices',
    ],
  },
  {
    title: 'Full-Stack Developer',
    company: 'TechStart Solutions',
    location: 'Casablanca, Morocco',
    period: 'Jan 2024 - May 2024',
    achievements: [
      'Architected and developed 3 web applications serving 10,000+ users',
      'Reduced application load times by 40% through performance optimization',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Established coding standards and led technical reviews for development team',
    ],
  },
  {
    title: 'Machine Learning Engineer Intern',
    company: 'DataTech Morocco',
    location: 'Rabat, Morocco',
    period: 'Jul 2023 - Sep 2023',
    achievements: [
      'Built predictive models achieving 94% accuracy for customer churn prediction',
      'Optimized data processing pipeline reducing computation time by 35%',
      'Created automated model monitoring and retraining system',
      'Presented ML insights to C-level executives and key stakeholders',
    ],
  },
  {
    title: 'Web Development Freelancer',
    company: 'Self-Employed',
    location: 'Remote',
    period: 'Jan 2022 - Dec 2023',
    achievements: [
      'Delivered 15+ web projects for clients across e-commerce, education, healthcare',
      'Maintained 98% client satisfaction rate with 12+ five-star reviews',
      'Generated $25K+ revenue while maintaining full-time academic studies',
      'Built long-term partnerships with 5 recurring enterprise clients',
    ],
  },
]

const education = [
  {
    degree: 'Engineering Degree in Computer Science',
    school: 'National Institute of Posts and Telecommunications (INPT)',
    location: 'Rabat, Morocco',
    period: '2022 - 2025',
    details: [
      'Current GPA: 3.8/4.0 (Top 5% of class)',
      'Specialization: Artificial Intelligence & Software Engineering',
      'Research: "Federated Learning for Privacy-Preserving AI"',
      'Leadership: President of AI & Robotics Club (2023-2024)',
    ],
  },
  {
    degree: 'Preparatory Classes in Mathematics and Physics',
    school: 'Lycée Mohammed V',
    location: 'Casablanca, Morocco',
    period: '2020 - 2022',
    details: [
      'Top 10% in national competitive exam (CNC)',
      'Mathematics Olympiad regional finalist',
      'Advanced coursework in Mathematics, Physics, and Computer Science',
    ],
  },
]

const skills = {
  'AI/Machine Learning': [
    'TensorFlow', 'PyTorch', 'Scikit-learn', 'Hugging Face', 'OpenCV', 'Pandas', 'NumPy'
  ],
  'Programming Languages': [
    'Python', 'JavaScript/TypeScript', 'Java', 'C++', 'SQL', 'R'
  ],
  'Web Development': [
    'React', 'Next.js', 'Vue.js', 'Node.js', 'Express.js', 'FastAPI', 'Django'
  ],
  'Cloud & DevOps': [
    'AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Linux', 'Git'
  ],
  'Databases': [
    'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'MySQL'
  ],
  'Tools & Frameworks': [
    'Tailwind CSS', 'GraphQL', 'REST APIs', 'Microservices', 'Agile/Scrum'
  ],
}

const certifications = [
  'AWS Certified Solutions Architect - Associate (2024)',
  'TensorFlow Developer Certificate - Google (2024)',
  'Professional Scrum Master I (PSM I) - Scrum.org (2023)',
  'Meta Front-End Developer Certificate (2023)',
]

const achievements = [
  'Winner - National AI Innovation Challenge (2023)',
  'Published Research Paper - Neural Network Optimization (2023)',
  'Open Source Contributor - 500+ contributions (2022-2024)',
  'Dean\'s List - Academic Excellence (2022, 2023, 2024)',
]

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  Professional Resume
                </h1>
                <p className="text-muted-foreground">
                  Download or view my complete professional profile
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="flex-1 sm:flex-none">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
                <Button variant="outline" size="lg" onClick={() => window.print()}>
                  <Printer className="w-4 h-4 mr-2" />
                  Print
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-card rounded-lg border print:border-0 print:shadow-none">
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
