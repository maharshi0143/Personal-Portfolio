import { motion } from 'framer-motion'
import { sectionIcons, techIcons } from './PortfolioIcons'

function SectionHeading({ iconKey, label }) {
  return (
    <div className="section-heading">
      <span className="section-heading__icon">{sectionIcons[iconKey]}</span>
      <p className="section-kicker">{label}</p>
    </div>
  )
}

export function HeroSection({
  fadeUp,
  fadeIn,
  cardHover,
  highlights,
  parallaxFast,
  parallaxSlow,
  parallaxTransition,
  profile,
  reduceMotion,
  revealTransition,
}) {
  return (
    <section id="hero" className="section-pad relative overflow-hidden">
      <motion.div
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_top,_rgba(255,107,61,0.5),_transparent_65%)] blur-2xl"
        style={{ y: reduceMotion ? 0 : parallaxFast }}
        transition={parallaxTransition}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-20 left-6 h-60 w-60 rounded-full bg-[radial-gradient(circle_at_top,_rgba(147,197,253,0.5),_transparent_70%)] blur-2xl"
        style={{ y: reduceMotion ? 0 : parallaxSlow }}
        transition={parallaxTransition}
      />

      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={revealTransition}
          className="space-y-5 sm:space-y-6"
        >
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <p className="section-kicker break-words">Software Engineer & AI/ML Research Collaborator</p>
            <span className="icon-chip">
              <span className="icon-chip__mark">{sectionIcons.experience}</span>
              Current role
            </span>
          </div>
          <h1 className="break-words text-3xl font-semibold text-white sm:text-5xl lg:text-6xl">{profile.name}</h1>
          <p className="max-w-2xl text-base font-semibold text-[color:var(--accent-soft)] sm:text-lg lg:text-xl">
            {profile.title}
          </p>
          <p className="max-w-xl text-base text-white/70 sm:text-lg">{profile.summary}</p>
          <p className="max-w-xl text-sm text-white/60 sm:text-base">{profile.focus}</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a className="btn-primary justify-center" href="#projects">
              View my work
            </a>
            <a className="btn-secondary justify-center" href={profile.resumeView} target="_blank" rel="noreferrer">
              View Resume
            </a>
            <a className="btn-secondary justify-center" href="#contact">
              Let us build together
            </a>
          </div>
          <div className="flex flex-wrap gap-3 text-xs text-white/60">
            <span className="badge badge--accent">Open to software roles</span>
            <span className="badge">Available for AI/ML collaboration</span>
            <span className="badge">Focused on real-world impact</span>
          </div>
        </motion.div>

        <motion.div
          className="glass-card p-6 sm:p-8"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={revealTransition}
        >
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl bg-[linear-gradient(135deg,_rgba(255,107,61,0.6),_rgba(255,255,255,0.1))] text-lg font-semibold text-white sm:h-16 sm:w-16 sm:text-xl">
              MD
            </div>
            <div className="min-w-0">
              <p className="break-words text-base font-semibold text-white">{profile.name}</p>
              <p className="text-sm text-white/60">{profile.title}</p>
              <p className="text-xs text-white/40">Engineering thoughtful software and applied intelligence</p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <motion.div
                key={item.label}
                className="rounded-2xl border border-white/5 bg-white/5 p-4"
                variants={cardHover}
                initial="rest"
                whileHover={reduceMotion ? 'rest' : 'hover'}
              >
                <p className="text-lg font-semibold text-white">{item.value}</p>
                <p className="text-xs text-white/50">{item.label}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-white/5 bg-white/5 p-4 text-xs text-white/60">
            {profile.focus}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function AboutSection({ aboutPoints, cardHover, currentExploration, fadeUp, profile, reduceMotion, revealTransition }) {
  return (
    <motion.section
      id="about"
      className="section-pad"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={revealTransition}
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-card p-6 sm:p-8">
          <SectionHeading iconKey="about" label="About" />
          <h2 className="section-title">Engineer by practice, researcher by curiosity.</h2>
          <p className="mt-6 text-sm text-white/70 sm:text-base">{profile.bio}</p>
        </div>
        <div className="grid gap-6">
          <motion.div
            className="glass-card p-6 sm:p-8"
            variants={cardHover}
            initial="rest"
            whileHover={reduceMotion ? 'rest' : 'hover'}
          >
            <h3 className="text-xl font-semibold text-white">What I bring</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {aboutPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="glass-card p-6 sm:p-8"
            variants={cardHover}
            initial="rest"
            whileHover={reduceMotion ? 'rest' : 'hover'}
          >
            <h3 className="text-xl font-semibold text-white">Currently exploring</h3>
            <p className="mt-4 text-sm text-white/70">{currentExploration}</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export function EducationSection({ cardHover, education, fadeUp, reduceMotion, revealTransition }) {
  return (
    <motion.section
      id="education"
      className="section-pad"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={revealTransition}
    >
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading iconKey="education" label="Education" />
        <h2 className="section-title">Academic foundation in AI and software systems.</h2>
        <motion.div
          className="glass-card education-card mt-10 p-6 sm:p-8"
          variants={cardHover}
          initial="rest"
          whileHover={reduceMotion ? 'rest' : 'hover'}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white">{education.university}</h3>
              <p className="mt-2 text-sm font-medium text-[color:var(--accent-soft)]">{education.degree}</p>
            </div>
            <span className="badge w-fit">{education.period}</span>
          </div>
          <p className="mt-6 max-w-3xl text-sm text-white/70 sm:text-base">{education.summary}</p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export function ExperienceSection({ cardHover, experiences, fadeUp, reduceMotion, revealTransition }) {
  return (
    <motion.section
      id="experience"
      className="section-pad"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={revealTransition}
    >
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading iconKey="experience" label="Experience" />
        <h2 className="section-title">Current work in applied AI/ML research.</h2>
        <div className="mt-10 grid gap-6">
          {experiences.map((experience) => (
            <motion.div
              key={`${experience.company}-${experience.role}`}
              className="glass-card experience-card p-6 sm:p-8"
              variants={cardHover}
              initial="rest"
              whileHover={reduceMotion ? 'rest' : 'hover'}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
                  <p className="mt-2 text-sm font-medium text-[color:var(--accent-soft)]">{experience.company}</p>
                </div>
                <span className="badge w-fit">{experience.period}</span>
              </div>
              <p className="mt-6 max-w-3xl text-sm text-white/70 sm:text-base">{experience.summary}</p>
              <ul className="mt-6 space-y-3 text-sm text-white/70">
                {experience.points.map((point) => (
                  <li key={point} className="experience-point">
                    <span className="experience-point__dot" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export function SkillsSection({ fadeUp, reduceMotion, revealTransition, stagger, techSkills }) {
  return (
    <motion.section
      id="skills"
      className="section-pad"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={revealTransition}
    >
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading iconKey="skills" label="Skills" />
        <h2 className="section-title">A technical foundation across engineering and AI.</h2>
        <motion.div
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {techSkills.map((skill) => (
            <motion.div
              key={skill.label}
              className="glass-card skill-card p-6"
              variants={fadeUp}
              whileHover={reduceMotion ? undefined : { y: -6, scale: 1.01 }}
            >
              <div className="skill-card__icon">{techIcons[skill.iconKey]}</div>
              <div className="mt-4">
                <h3 className="text-base font-semibold text-white">{skill.label}</h3>
                <p className="mt-1 text-sm text-white/55">Core tool in my engineering and AI workflow.</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export function ProjectsSection({ fadeUp, projects, reduceMotion, revealTransition, stagger }) {
  return (
    <motion.section
      id="projects"
      className="section-pad"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={revealTransition}
    >
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading iconKey="projects" label="Projects" />
        <h2 className="section-title">Work shaped by engineering discipline and research thinking.</h2>
        <motion.div
          className="mt-10 grid gap-6 lg:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              className="glass-card flex h-full flex-col overflow-hidden p-0"
              variants={fadeUp}
              whileHover={reduceMotion ? undefined : { y: -8, scale: 1.015 }}
            >
              <div className="project-thumb">
                <img
                  src={project.image}
                  alt={`${project.title} project thumbnail`}
                  className="project-thumb__image"
                  loading="lazy"
                />
                <div className="project-thumb__overlay" aria-hidden="true" />
              </div>
              <div className="flex h-full flex-col p-6">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm text-white/70">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <motion.span key={tech} className="badge" whileHover={reduceMotion ? undefined : { scale: 1.05 }}>
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-3 text-sm">
                  <motion.a
                    className="btn-secondary"
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                  >
                    GitHub Repo
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export function ContactSection({ cardHover, fadeUp, profile, reduceMotion, revealTransition }) {
  return (
    <motion.section
      id="contact"
      className="section-pad"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={revealTransition}
    >
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-card p-6 sm:p-8">
          <SectionHeading iconKey="contact" label="Contact" />
          <h2 className="section-title">Let us build useful, intelligent software.</h2>
          <p className="mt-4 text-sm text-white/70">
            I am open to software engineering opportunities, AI/ML research collaborations, and product work that benefits from strong technical execution. Drop a note and I will respond quickly.
          </p>
          <div className="mt-6 flex flex-col gap-3 text-sm text-white/80">
            {[
              { label: 'View Resume', href: profile.resumeView, external: true },
              { label: 'Download Resume', href: profile.resumeDownload, external: true },
              { label: profile.email, href: `mailto:${profile.email}` },
              { label: profile.phone, href: 'tel:+916303984967' },
              { label: 'GitHub', href: profile.github, external: true },
              { label: 'LinkedIn', href: profile.linkedin, external: true },
            ].map((link) => (
              <motion.a
                key={link.label}
                className="btn-secondary w-full justify-between gap-4 break-all text-left"
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
                whileHover={reduceMotion ? undefined : { x: 4 }}
              >
                {link.label}
                <span aria-hidden>{'->'}</span>
              </motion.a>
            ))}
          </div>
        </div>
        <motion.div
          className="glass-card flex flex-col justify-between gap-6 p-6 sm:p-8"
          variants={cardHover}
          initial="rest"
          whileHover={reduceMotion ? 'rest' : 'hover'}
        >
          <div>
            <h3 className="text-xl font-semibold text-white">Current Status</h3>
            <p className="mt-3 text-sm text-white/70">
              Currently working as an AI/ML Research Collaborator at Project Genesis AI Labs Pvt. Ltd., while continuing to build software engineering projects and applied AI systems.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/60">
            Interested in software engineering opportunities, AI/ML collaborations, and product-focused technical work where research and implementation come together.
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export function PortfolioFooter({ name }) {
  return (
    <footer className="border-t border-white/10 px-6 py-10 text-center text-xs text-white/40 sm:px-10 lg:px-16">
      <p>Designed and built by {name}. All rights reserved.</p>
    </footer>
  )
}
