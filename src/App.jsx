import { useState } from 'react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { PortfolioHeader } from './components/PortfolioHeader'
import {
  AboutSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  HeroSection,
  PortfolioFooter,
  ProjectsSection,
  SkillsSection,
} from './components/PortfolioSections'
import {
  aboutPoints,
  currentExploration,
  education,
  experiences,
  highlights,
  navLinks,
  profile,
  projects,
  techSkills,
} from './data/portfolioData'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
}

const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -6,
    scale: 1.01,
    transition: { duration: 0.22, ease: 'easeOut' },
  },
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const parallaxFastRaw = useTransform(scrollYProgress, [0, 1], [0, -120])
  const parallaxSlowRaw = useTransform(scrollYProgress, [0, 1], [0, -70])
  const parallaxBackdropRaw = useTransform(scrollYProgress, [0, 1], [0, -160])
  const parallaxGridRaw = useTransform(scrollYProgress, [0, 1], [0, 50])
  const parallaxFast = useSpring(parallaxFastRaw, { stiffness: 70, damping: 24, mass: 0.4 })
  const parallaxSlow = useSpring(parallaxSlowRaw, { stiffness: 75, damping: 26, mass: 0.45 })
  const parallaxBackdrop = useSpring(parallaxBackdropRaw, {
    stiffness: 60,
    damping: 28,
    mass: 0.55,
  })
  const parallaxGrid = useSpring(parallaxGridRaw, { stiffness: 65, damping: 26, mass: 0.5 })

  const revealTransition = {
    duration: reduceMotion ? 0 : 0.7,
    ease: 'easeOut',
  }

  const parallaxTransition = {
    duration: reduceMotion ? 0 : 1.2,
    ease: 'easeOut',
  }

  return (
    <div className="relative">
      <div className="bg-stage" aria-hidden="true">
        <motion.div
          className="bg-layer bg-layer--glow"
          style={{ y: reduceMotion ? 0 : parallaxBackdrop }}
          transition={parallaxTransition}
        />
        <motion.div
          className="bg-layer bg-layer--grid"
          style={{ y: reduceMotion ? 0 : parallaxGrid }}
          transition={parallaxTransition}
        />
      </div>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black"
      >
        Skip to content
      </a>

      <PortfolioHeader
        menuOpen={menuOpen}
        reduceMotion={reduceMotion}
        navLinks={navLinks}
        onToggleMenu={() => setMenuOpen((open) => !open)}
        onCloseMenu={() => setMenuOpen(false)}
        profile={profile}
      />

      <main id="main">
        <HeroSection
          fadeUp={fadeUp}
          fadeIn={fadeIn}
          cardHover={cardHover}
          highlights={highlights}
          parallaxFast={parallaxFast}
          parallaxSlow={parallaxSlow}
          parallaxTransition={parallaxTransition}
          profile={profile}
          reduceMotion={reduceMotion}
          revealTransition={revealTransition}
        />
        <AboutSection
          aboutPoints={aboutPoints}
          cardHover={cardHover}
          currentExploration={currentExploration}
          fadeUp={fadeUp}
          profile={profile}
          reduceMotion={reduceMotion}
          revealTransition={revealTransition}
        />
        <EducationSection
          cardHover={cardHover}
          education={education}
          fadeUp={fadeUp}
          reduceMotion={reduceMotion}
          revealTransition={revealTransition}
        />
        <ExperienceSection
          cardHover={cardHover}
          experiences={experiences}
          fadeUp={fadeUp}
          reduceMotion={reduceMotion}
          revealTransition={revealTransition}
        />
        <SkillsSection
          fadeUp={fadeUp}
          reduceMotion={reduceMotion}
          revealTransition={revealTransition}
          stagger={stagger}
          techSkills={techSkills}
        />
        <ProjectsSection
          fadeUp={fadeUp}
          projects={projects}
          reduceMotion={reduceMotion}
          revealTransition={revealTransition}
          stagger={stagger}
        />
        <ContactSection
          cardHover={cardHover}
          fadeUp={fadeUp}
          profile={profile}
          reduceMotion={reduceMotion}
          revealTransition={revealTransition}
        />
      </main>

      <PortfolioFooter name={profile.name} />
    </div>
  )
}

export default App
