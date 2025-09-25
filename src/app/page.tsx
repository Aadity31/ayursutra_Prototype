import Head from 'next/head'
import Header from './components/landing_panal/header'
import Hero from './components/landing_panal/Hero'
import ProblemStatement from './components/landing_panal/ProblemStatement'
import Solution from './components/landing_panal/Solution'
import AIFeatures from './components/landing_panal/AIFeatures'
import TechStack from './components/landing_panal/TechStack'
import Impact from './components/landing_panal/Impact'
import Demo from './components/landing_panal/Demo'
import Team from './components/landing_panal/Team'
import Footer from './components/landing_panal/Footer'

export default function AyurSutraLanding() {
  return (
    <>
      <Head>
        <title>AyurSutra - AI-Powered Panchakarma Therapy Management | Smart India Hackathon 2025</title>
        <meta name="description" content="Revolutionary AI-driven Panchakarma therapy scheduling and management system. Bridging ancient Ayurveda wisdom with modern technology for personalized healthcare." />
        <meta name="keywords" content="Panchakarma, Ayurveda, AI healthcare, Smart India Hackathon, therapy scheduling, digital health" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AyurSutra",
            "applicationCategory": "Healthcare Software",
            "description": "AI-powered Panchakarma therapy management system",
            "operatingSystem": "Web-based, Android",
            "creator": {
              "@type": "Organization", 
              "name": "Smart India Hackathon 2025 Team"
            }
          })
        }} />
      </Head>
      
      <div className="min-h-screen bg-gradient-from-orange-50 to-green-50">
        <Header />
        <main>
          <Hero />
          <ProblemStatement />
          <Solution />
          <AIFeatures />
          <TechStack />
          <Impact />
          <Demo />
          <Team />
        </main>
        <Footer />
      </div>
    </>
  )
}
