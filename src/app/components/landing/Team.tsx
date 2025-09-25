'use client'
import { useState } from 'react'

export default function Team() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)

  const teamMembers = [
    {
      name: "Arjun Sharma",
      role: "Team Leader & Full Stack Developer",
      branch: "Computer Science Engineering",
      year: "4th Year",
      skills: ["React", "Node.js", "AI/ML", "System Design"],
      bio: "Passionate about healthcare technology and AI integration. Lead developer with 3+ years of web development experience.",
      linkedin: "https://linkedin.com/in/arjunsharma",
      github: "https://github.com/arjunsharma",
      image: "/team/arjun.jpg",
      expertise: "Frontend & Backend Development",
      color: "blue"
    },
    {
      name: "Priya Patel",
      role: "AI/ML Engineer & Data Scientist",
      branch: "Artificial Intelligence & Data Science",
      year: "4th Year",
      skills: ["Python", "TensorFlow", "NLP", "Computer Vision"],
      bio: "Specialized in healthcare AI and predictive analytics. Research experience in medical data processing and recommendation systems.",
      linkedin: "https://linkedin.com/in/priyapatel",
      github: "https://github.com/priyapatel",
      image: "/team/priya.jpg",
      expertise: "Machine Learning & Analytics",
      color: "purple"
    },
    {
      name: "Rahul Kumar",
      role: "Mobile App Developer",
      branch: "Information Technology",
      year: "3rd Year",
      skills: ["React Native", "Android", "Flutter", "Firebase"],
      bio: "Expert in cross-platform mobile development. Passionate about creating intuitive healthcare mobile applications.",
      linkedin: "https://linkedin.com/in/rahulkumar",
      github: "https://github.com/rahulkumar",
      image: "/team/rahul.jpg",
      expertise: "Mobile Development",
      color: "green"
    },
    {
      name: "Ananya Singh",
      role: "Backend Developer & DevOps",
      branch: "Computer Engineering",
      year: "4th Year",
      skills: ["Python", "Django", "AWS", "Docker", "PostgreSQL"],
      bio: "Cloud infrastructure specialist with expertise in scalable backend systems. Focus on healthcare data security and HIPAA compliance.",
      linkedin: "https://linkedin.com/in/ananyasingh",
      github: "https://github.com/ananyasingh",
      image: "/team/ananya.jpg",
      expertise: "Backend & Cloud Infrastructure",
      color: "orange"
    },
    {
      name: "Vikash Gupta",
      role: "UI/UX Designer & Frontend Developer",
      branch: "Computer Science Engineering",
      year: "3rd Year",
      skills: ["Figma", "React", "Tailwind CSS", "User Research"],
      bio: "Creative designer with focus on healthcare UX. Ensures accessibility and user-friendly interfaces for all age groups.",
      linkedin: "https://linkedin.com/in/vikashgupta",
      github: "https://github.com/vikashgupta",
      image: "/team/vikash.jpg",
      expertise: "UI/UX Design & Frontend",
      color: "pink"
    },
    {
      name: "Sneha Reddy",
      role: "Business Analyst & Project Manager",
      branch: "Information Systems",
      year: "4th Year",
      skills: ["Project Management", "Business Analysis", "Market Research", "Documentation"],
      bio: "Strategic thinker with healthcare domain knowledge. Coordinates between technical and business aspects of the project.",
      linkedin: "https://linkedin.com/in/snehareddy",
      github: "https://github.com/snehareddy",
      image: "/team/sneha.jpg",
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
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2">
                  {/* Profile Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${getColorClasses(member.color).gradient} opacity-90`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-4xl font-bold text-gray-700">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    {/* Social Links */}
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={member.linkedin}
                        className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="text-sm">in</span>
                      </a>
                      <a
                        href={member.github}
                        className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-50 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="text-sm">git</span>
                      </a>
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
                    
                    {/* Skills */}
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
                  </div>

                  {/* Hover Effect - Detailed Skills */}
                  {hoveredMember === index && (
                    <div className="absolute inset-0 bg-white bg-opacity-95 backdrop-blur-sm flex items-center justify-center p-6 transition-all duration-300">
                      <div className="text-center">
                        <h5 className="font-bold text-gray-900 mb-3">Technical Skills</h5>
                        <div className="grid grid-cols-2 gap-2">
                          {member.skills.map((skill, skillIndex) => (
                            <div
                              key={skillIndex}
                              className={`px-3 py-2 rounded-lg text-sm font-medium ${getColorClasses(member.color).bg} ${getColorClasses(member.color).text}`}
                            >
                              {skill}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mentors Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Mentors</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {mentors.map((mentor, index) => (
              <div key={index} className="flex items-center space-x-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
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
                      className="text-blue-600 hover:text-blue-700 text-xs font-medium"
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
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-3">Innovation Focus</h4>
            <p className="text-gray-600 text-sm">
              Combining traditional Ayurvedic wisdom with cutting-edge AI technology to create meaningful healthcare solutions.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-3">Collaborative Spirit</h4>
            <p className="text-gray-600 text-sm">
              Diverse backgrounds united by shared passion for healthcare technology and social impact through innovation.
            </p>
          </div>
          
          <div className="text-center p-6">
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
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
              📧 Contact Team Lead
            </button>
            <button className="border-2 border-orange-500 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
              📋 View Project Repository
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
