'use client'
import Image from "next/image";
import { useState } from 'react'

export default function Team() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({})

  const teamMembers = [
    {
      name: "Shwetanshu Bhatt",
      role: "Team Leader & Full Stack Developer",
      branch: "Computer Science Engineering",
      year: "3rd Year",
      skills: ["React", "Node.js", "AI/ML", "System Design"],
      bio: "Passionate about healthcare technology and AI integration. Lead developer with 3+ years of web development experience.",
      linkedin: "https://linkedin.com/in/Shwetanshu-Bhatt",
      github: "https://github.com/Shwetanshu-Bhatt",
      image: "/team/arjun.jpg",
      expertise: "Frontend & Backend Development",
      color: "blue"
    },
    {
      name: "Aditya Dimri",
      role: "Full Stack Developer",
      branch: "Artificial Intelligence & Machine Learning",
      year: "3rd Year",
      skills: ["Python", "TensorFlow", "NLP", "Computer Vision", "Next.js", "Node.js", "AI/ML", "System Design"],
      bio: "Specialized in healthcare AI and predictive analytics. Research experience in medical data processing and recommendation systems.",
      linkedin: "https://linkedin.com/in/aditya-dimri",
      github: "https://github.com/Aadity31",
      image: "/team/aditya.jpg",
      expertise: "Machine Learning & Analytics",
      color: "purple"
    },
    {
      name: "Upasana Gaur",
      role: "Mobile App Developer",
      branch: "Information Technology",
      year: "3rd Year",
      skills: ["React Native", "Android", "Flutter", "Firebase"],
      bio: "Expert in cross-platform mobile development. Passionate about creating intuitive healthcare mobile applications.",
      linkedin: "https://linkedin.com/in/upasana-gaur",
      github: "https://github.com/Upasana-Gaur",
      image: "/team/upasana.jpg",
      expertise: "Mobile Development",
      color: "green"
    },
    {
      name: "Kamakshi Pandey",
      role: "Backend Developer & DevOps",
      branch: "Computer Engineering",
      year: "4th Year",
      skills: ["Python", "Django", "AWS", "Docker", "PostgreSQL"],
      bio: "Cloud infrastructure specialist with expertise in scalable backend systems. Focus on healthcare data security and HIPAA compliance.",
      linkedin: "https://linkedin.com/in/kamakshi-pandey",
      github: "https://github.com/KamakshiPandey",
      image: "/team/kamakshi.jpg",
      expertise: "Backend & Cloud Infrastructure",
      color: "orange"
    },
    {
      name: "Ravindra Singh",
      role: "UI/UX Designer & Frontend Developer",
      branch: "Computer Science Engineering",
      year: "3rd Year",
      skills: ["Figma", "React", "Tailwind CSS", "User Research"],
      bio: "Creative designer with focus on healthcare UX. Ensures accessibility and user-friendly interfaces for all age groups.",
      linkedin: "https://linkedin.com/in/ravindra-singh",
      github: "https://github.com/Ravindra-Singh7",
      image: "/team/ravi.jpg",
      expertise: "UI/UX Design & Frontend",
      color: "pink"
    },
    {
      name: "Anshika Gupta",
      role: "Business Analyst & Project Manager",
      branch: "Information Systems",
      year: "4th Year",
      skills: ["Project Management", "Business Analysis", "Market Research", "Documentation"],
      bio: "Strategic thinker with healthcare domain knowledge. Coordinates between technical and business aspects of the project.",
      linkedin: "https://linkedin.com/in/anshika-gupta",
      github: "https://github.com/Anshikagupta1306",
      image: "/team/anshika.jpg",
      expertise: "Business Strategy & Analysis",
      color: "indigo"
    }
  ]

  const mentors = [
    {
      name: "Dr. Rajesh Krishnan",
      role: "Industry Mentor - Healthcare Technology",
      company: "Apollo Hospitals Digital Health",
      experience: "12+ years",
      expertise: "Healthcare IT, Digital Transformation",
      bio: "Senior Technology Director with extensive experience in healthcare digitization and AI implementation.",
      linkedin: "https://linkedin.com/in/rajeshkrishnan",
      image: "/mentors/rajesh.jpg"
    },
    {
      name: "Prof. Meera Agarwal",
      role: "Academic Mentor - AI & Machine Learning",
      company: "IIT Delhi",
      experience: "8+ years",
      expertise: "AI in Healthcare, NLP, Predictive Analytics",
      bio: "Associate Professor specializing in AI applications in traditional medicine and healthcare systems.",
      linkedin: "https://linkedin.com/in/meeraagarwal",
      image: "/mentors/meera.jpg"
    }
  ]

  type ColorClasses = {
    bg: string
    text: string
    border: string
    gradient: string
  }

  const getColorClasses = (color: string): ColorClasses => {
    const colorMap: Record<string, ColorClasses> = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-300', gradient: 'from-blue-500 to-blue-700' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-800', border: 'border-purple-300', gradient: 'from-purple-500 to-purple-700' },
      green: { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-300', gradient: 'from-green-500 to-green-700' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-800', border: 'border-orange-300', gradient: 'from-orange-500 to-orange-700' },
      pink: { bg: 'bg-pink-100', text: 'text-pink-800', border: 'border-pink-300', gradient: 'from-pink-500 to-pink-700' },
      indigo: { bg: 'bg-indigo-100', text: 'text-indigo-800', border: 'border-indigo-300', gradient: 'from-indigo-500 to-indigo-700' }
    }
    return colorMap[color] ?? colorMap.blue
  }

  const handleImageError = (memberName: string) => {
    setImageErrors(prev => ({ ...prev, [memberName]: true }))
  }

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            👥 Meet Our Team
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            The Minds Behind AyurSutra
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A diverse team of 6 passionate students from different engineering disciplines, 
            united by our vision to revolutionize Panchakarma therapy through AI innovation.
          </p>
        </div>

        {/* Team Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
            <div className="text-gray-700">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">4</div>
            <div className="text-gray-700">Engineering Branches</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
            <div className="text-gray-700">Years Average Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">2</div>
            <div className="text-gray-700">Industry Mentors</div>
          </div>
        </div>

        {/* Team Members */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Core Team Members</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden border border-gray-100 hover:border-gray-200 transform hover:-translate-y-3 hover:scale-105">
                  {/* Profile Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${getColorClasses(member.color).gradient} opacity-20`}></div>
                    
                    {/* Image or Fallback */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {!imageErrors[member.name] ? (
                        <div className="relative w-32 h-32 rounded-full overflow-hidden bg-white shadow-lg">
                          <Image
                            src={member.image}
                            alt={`${member.name} - ${member.role}`}
                            fill
                            className="object-cover"
                            onError={() => handleImageError(member.name)}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      ) : (
                        <div className={`w-32 h-32 bg-gradient-to-br ${getColorClasses(member.color).gradient} rounded-full flex items-center justify-center text-white shadow-lg`}>
                          <span className="text-4xl font-bold">
                            {getInitials(member.name)}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Fixed Social Links - Always visible */}
                    <div className="absolute top-4 right-4 flex space-x-2 z-30">
                      <a
                        href={member.linkedin}
                        className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-50 hover:scale-110 transition-all duration-300 shadow-lg border border-white/20"
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`${member.name} LinkedIn`}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a
                        href={member.github}
                        className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-50 hover:scale-110 transition-all duration-300 shadow-lg border border-white/20"
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`${member.name} GitHub`}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>

                    {/* Smooth Scroll-up Skills Overlay */}
                    <div className={`absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-white via-white/95 to-transparent backdrop-blur-sm transition-all duration-700 ease-out ${
                      hoveredMember === index 
                        ? 'transform translate-y-0 opacity-100' 
                        : 'transform translate-y-full opacity-0'
                    }`}>
                      <div className="absolute bottom-6 left-6 right-6">
                        <h5 className="font-bold text-gray-900 mb-3 text-lg">Technical Skills</h5>
                        <div className="grid grid-cols-2 gap-2">
                          {member.skills.map((skill, skillIndex) => (
                            <div
                              key={skillIndex}
                              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-500 delay-${skillIndex * 100} ${
                                hoveredMember === index 
                                  ? `transform translate-y-0 opacity-100 ${getColorClasses(member.color).bg} ${getColorClasses(member.color).text}` 
                                  : 'transform translate-y-4 opacity-0'
                              }`}
                            >
                              {skill}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-3 ${getColorClasses(member.color).bg} ${getColorClasses(member.color).text}`}>
                      {member.expertise}
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                    <p className="text-xs text-gray-500 mb-4">{member.branch} • {member.year}</p>
                    
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">{member.bio}</p>
                    
                    {/* Skills Preview (when not hovered) */}
                    <div className="flex flex-wrap gap-2">
                      {member.skills.slice(0, 3).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                      {member.skills.length > 3 && (
                        <span className="px-2 py-1 bg-gray-200 text-gray-600 text-xs rounded-md font-medium">
                          +{member.skills.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Contact Links in Card Bottom */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 font-medium">Connect:</span>
                        <div className="flex space-x-3">
                          <a
                            href={member.linkedin}
                            className="text-blue-600 hover:text-blue-700 text-sm font-medium hover:underline transition-colors duration-200"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            LinkedIn
                          </a>
                          <a
                            href={member.github}
                            className="text-gray-700 hover:text-gray-900 text-sm font-medium hover:underline transition-colors duration-200"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            GitHub
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rest of your mentors and other sections remain the same... */}
        {/* Mentors Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Mentors</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {mentors.map((mentor, index) => (
              <div key={index} className="flex items-center space-x-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-500">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  {mentor.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{mentor.name}</h4>
                  <p className="text-sm text-blue-600 font-medium mb-1">{mentor.role}</p>
                  <p className="text-sm text-gray-600 mb-2">{mentor.company} • {mentor.experience}</p>
                  <p className="text-xs text-gray-700 mb-3">{mentor.bio}</p>
                  <div className="flex items-center space-x-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      {mentor.expertise}
                    </span>
                    <a
                      href={mentor.linkedin}
                      className="text-blue-600 hover:text-blue-700 text-xs font-medium hover:underline transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Values */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 hover:scale-105 transition-transform duration-500">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-3">Innovation Focus</h4>
            <p className="text-gray-600 text-sm">
              Combining traditional Ayurvedic wisdom with cutting-edge AI technology to create meaningful healthcare solutions.
            </p>
          </div>
          
          <div className="text-center p-6 hover:scale-105 transition-transform duration-500">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-3">Collaborative Spirit</h4>
            <p className="text-gray-600 text-sm">
              Diverse backgrounds united by shared passion for healthcare technology and social impact through innovation.
            </p>
          </div>
          
          <div className="text-center p-6 hover:scale-105 transition-transform duration-500">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-3">Technical Excellence</h4>
            <p className="text-gray-600 text-sm">
              Committed to building scalable, secure, and user-friendly solutions that meet enterprise healthcare standards.
            </p>
          </div>
        </div>

        {/* Contact Team */}
        <div className="mt-16 text-center bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect With Our Team</h3>
          <p className="text-gray-600 mb-6">
            Interested in our project or want to collaborate? We'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              📧 Contact Team Lead
            </button>
            <button className="border-2 border-orange-500 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-300 hover:scale-105">
              📋 View Project Repository
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
