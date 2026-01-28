'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin,
  Download,
  ExternalLink,
  Calendar,
  Award,
  GraduationCap,
  Users,
  Trophy,
  Star,
  Code,
  Database,
  Brain,
} from 'lucide-react'

export default function Portfolio() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  const skills = [
    { name: 'Python', icon: Code, level: 90 },
    { name: 'SQL', icon: Database, level: 85 },
    { name: 'Power BI', icon: Database, level: 80 },
    { name: 'Excel', icon: Database, level: 95 },
    { name: 'Next.js', icon: Code, level: 85 },
    { name: 'TypeScript', icon: Code, level: 80 },
    { name: 'Java (DSA)', icon: Code, level: 75 },
    { name: 'Git & GitHub', icon: Code, level: 80 },
    { name: 'Generative AI', icon: Brain, level: 88 },
    { name: 'RAG Systems', icon: Brain, level: 82 },
    { name: 'LLM Prompt Engineering', icon: Brain, level: 95 }
  ]

  const certifications = [
    {
      title: 'Oracle Cloud Infrastructure 2025 – Certified Generative AI Professional',
      issuer: 'Oracle Corporation',
      year: 'September2025',
      validUntil: 'September 24, 2027',
      credentialId: '102709740OCI25GAIOCP',
      link: 'https://drive.google.com/file/d/1mrG9-mNpoz7ivgOndYHvoDvqjtml00j2/view?usp=drive_link'
    },
    {
      title: 'The Ultimate Job Ready Data Science Course',
      issuer: 'CodeWithHarry',
      year: 'September 2025',
      hours: '30+ hours of focused training',
      link: 'https://drive.google.com/file/d/1odFBHBc8SOSDRwnCgwQrX6fOWNn5brsh/view?usp=sharing'
    },
    {
      title: 'DSA with Java',
      issuer: 'apnaCollege',
      year: ' May 2025',
      hours: '200+ hours intensive training',
      link: 'https://drive.google.com/file/d/1TqQxmBaJXTdsgEDP3aNuWyS_ztda1UOW/view?usp=sharing'
    }
  ]

  const experiences = [
    {
      title: 'Data Analyst Intern',
      company: 'Internship Studio',
      period: '1 Jan 2025 – 15 Feb 2025',
      achievements: [
        'Processed and analyzed 150+ daily records using Python/SQL/Excel',
        'Developed 4 interactive dashboards with Power BI and Tableau',
        'Enhanced data reporting efficiency for business stakeholders',
        'Supported critical business decision-making through data insights'
      ]
    }
  ]

  const projects = [
    {
      title: 'SkillSage: Adaptive Career Roadmap Generator',
      description: 'Full-stack application that analyzes user profiles and generates personalized career roadmaps using AI to combat generic career advice.',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'SQLite', 'AI'],
      features: [
        'Personalized career path generation',
        '100% type safety with TypeScript',
        'AI chatbot interface for real-time guidance',
        'Clean, user-friendly design',
        'Resolved ~90% of initial environment conflicts'
      ],
      status: 'In Progress - Advancing AI Chatbot Interface'
    },
    {
    title: 'TaskFlow - Full Stack Task Management System',
    description: 'A full-stack web application designed to manage tasks efficiently with structured data handling, authentication, and analytics-ready workflows.',
    tech: ['React', 'Next.js', 'TypeScript', 'Prisma', 'SQLite', 'Bun'],
    features: [
      'User authentication with JWT-based access control',
      'Create, update, delete, and manage tasks with status and priority',
      'Relational data modeling for tasks and users',
      'REST API integration between frontend and backend',
      'Data validation and consistency across workflows'
    ],
    role: 'Full Stack Developer',
    status: 'Completed'
  }

  ]

  const specialAchievements = [
    {
      title: 'Finalist - Smart India Hackathon (SIH) Grand Finale',
      organization: 'Smart India Hackathon',
      year: '2025',
      role: 'Software Engineer',
      description: 'Selected as finalist in the prestigious national-level hackathon for developing innovative blockchain-based solutions.',
      highlights: [
        'blockchain architecture design',
        'Developed smart contracts for the solution',
        'Coordinated software development team',
        'Presented solution to industry experts and judges'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SY</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Sonam Yadav</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {[
                'About',
                'Skills',
                'Experience',
                'Projects',
                'Education',
                'Certifications',
                'Achievements',
                'Leadership',
                'Contact'
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-transparent to-purple-100/30" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src="/passport.jpg"
                alt="Sonam Yadav"
                className="w-full h-full object-cover object-[center_20%]"
                onError={(e: any) => {
                  const img = e.currentTarget as HTMLImageElement
                  img.style.display = 'none'
                  const next = img.nextElementSibling as HTMLElement | null
                  if (next) next.style.display = 'flex'
                }}
              />
              <div
                className="w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center"
                style={{ display: 'none' }}
              >
                <span className="text-5xl font-bold text-white">SY</span>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Hi, I'm Sonam Yadav 👋
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-6 font-medium">
            Computer Engineering Student | Data Analyst | AI Enthusiast
          </p>

          <p className="text-lg text-gray-500 mb-8 max-w-3xl mx-auto">
            I build intelligent, data-driven solutions using Python, SQL, Generative AI, and modern full-stack technologies.
            With a passion for analytics, clean design, and creative problem-solving, I turn ideas into impactful real-world projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/Sonam_Yadav_Resume.txt"
              download="Sonam_Yadav_Resume.txt"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
            <Button
              variant="outline"
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-xl font-medium transition-all duration-300"
              onClick={() => scrollToSection('projects')}
            >
              View My Projects
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">About Me</h2>

          <Card className="bg-white border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <Brain className="w-24 h-24 text-blue-600" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-lg text-gray-700">
                    Highly motivated B.E. Computer Science & Engineering student (Final year) with a CGPA of <strong>7.73/10</strong>.
                  </p>
                  <p className="text-lg text-gray-700">
                    Specializing in <span className="text-blue-600 font-semibold">Generative AI (LLMs, RAG)</span>,
                    <span className="text-purple-600 font-semibold"> Data Analytics</span>, and
                    <span className="text-blue-600 font-semibold"> Cloud</span> technologies.
                  </p>
                  <p className="text-lg text-gray-700">
                    Passionate about mixing art + technology, with creative leadership experience as Creative Team Lead & Set Designer.
                    Love painting, sketching, and design aesthetics.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Problem Solver</Badge>
                    <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">Creative Thinker</Badge>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Team Player</Badge>
                    <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">Detail Oriented</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Technical Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <Card key={skill.name} className="bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <skill.icon className="w-6 h-6 text-blue-600" />
                    <span className="font-semibold text-gray-900">{skill.name}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-500 mt-1">{skill.level}%</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Certifications</h2>

          <div className="space-y-6">
            {certifications.map((cert) => (
              <Card key={cert.title} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.title}</h3>
                        <p className="text-gray-600 mb-1">
                          {cert.issuer} • {cert.year}
                        </p>
                        {cert.validUntil && <p className="text-sm text-gray-500">Valid until: {cert.validUntil}</p>}
                        {cert.credentialId && <p className="text-sm text-gray-500">Credential ID: {cert.credentialId}</p>}
                        {cert.hours && <p className="text-sm text-gray-500">{cert.hours}</p>}
                      </div>
                    </div>
                    {cert.link !== '#' && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Experience</h2>

          <div className="space-y-6">
            {experiences.map((exp) => (
              <Card key={exp.title} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{exp.title}</h3>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.title} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <Code className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  {project.role && (
                    <div className="mb-3">
                      <span className="text-sm font-semibold text-blue-600">Role: {project.role}</span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-gray-300 text-gray-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-2 mb-4">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {project.status && (
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm font-medium text-blue-800">Status: {project.status}</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Education</h2>

          <div className="space-y-6">
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">B.E. Computer Science & Engineering</h3>
                    <p className="text-blue-600 font-medium">Dr. D. Y. Patil Institute of Engineering, Management & Research, Akurdi</p>
                    <p className="text-gray-600">Nov 2022 – Jun 2026</p>
                    <p className="text-gray-700 font-medium">CGPA: 7.73/10 (up to 6th semester)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">XII (MSBSHSE)</h3>
                    <p className="text-blue-600 font-medium">Pratibha Junior College, Pune</p>
                    <p className="text-gray-600">April 2022</p>
                    <p className="text-gray-700 font-medium">Percentage: 85%</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">X (MSBSHSE)</h3>
                    <p className="text-blue-600 font-medium">Prathamesh English School</p>
                    <p className="text-gray-600">April 2020</p>
                    <p className="text-gray-700 font-medium">Percentage: 90.40%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Special Achievements Section */}
      <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Special Achievements</h2>

          <div className="space-y-6">
            {specialAchievements.map((achievement) => (
              <Card key={achievement.title} className="bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{achievement.title}</h3>
                      <p className="text-blue-600 font-medium mb-2">
                        {achievement.organization} • {achievement.year}
                      </p>
                      <p className="text-gray-700 mb-3">{achievement.description}</p>
                      <div className="mb-3">
                        <span className="text-sm font-semibold text-purple-600">Role: {achievement.role}</span>
                      </div>
                      <ul className="space-y-1">
                        {achievement.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Leadership & Activities</h2>

          <Card className="bg-white border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Creative Team Lead & Set Designer</h3>
                  <p className="text-blue-600 font-medium mb-3">Firodiya Karandak & Sakaal Karandak (2023 - 2024)</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                      <span>Led creative direction and execution for team performances in major college competitions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                      <span>Managed team of artists and designers, ensuring timely completion of all elements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                      <span>Fostered collaborative environment and coordinated stage visuals</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Get In Touch</h2>

          <Card className="bg-white border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Contact Information</h3>

                  <div className="space-y-3">
                    <a
                      href="mailto:sonamyadav246810@gmail.com"
                      className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      <span>sonamyadav246810@gmail.com</span>
                    </a>

                    <div className="flex items-center gap-3 text-gray-700">
                      <Phone className="w-5 h-5" />
                      <span>+91 9834079327</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Connect With Me</h3>

                  <div className="flex gap-4">
                    <a
                      href="https://linkedin.com/in/sonam-yadav-02226b258"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span>LinkedIn</span>
                    </a>

                    <a
                      href="https://github.com/SonamYadav9022"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span>GitHub</span>
                    </a>
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                    <p className="text-sm text-gray-700">
                      <strong className="text-blue-600">Available for:</strong> Data Analysis, AI/ML Projects, Full-stack Development,
                      Creative Design, Blockchain Development
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600">
            © 2024 Sonam Yadav. Built with Next.js &amp; TypeScript
          </p>
        </div>
      </footer>
    </div>
  )
}
