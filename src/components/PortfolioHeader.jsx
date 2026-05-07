import { AnimatePresence, motion } from 'framer-motion'

export function PortfolioHeader({ menuOpen, reduceMotion, navLinks, onToggleMenu, onCloseMenu, profile }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-10 sm:py-4 lg:px-16">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-sm font-semibold text-white sm:h-11 sm:w-11">
            MD
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white">{profile.name}</p>
            <p className="hidden text-xs text-[color:var(--text-muted)] sm:block">{profile.title}</p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex">
          <a className="btn-primary" href="#projects">
            View work
          </a>
        </div>

        <button
          type="button"
          className="inline-flex shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition hover:border-white/20 md:hidden"
          onClick={onToggleMenu}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {menuOpen ? (
          <motion.div
            id="mobile-nav"
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.28, ease: 'easeOut' }}
          >
            <div className="grid gap-3 border-t border-white/10 px-4 pb-5 pt-4 text-sm text-white/80 sm:px-6 sm:pb-6">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={onCloseMenu}
                  className="rounded-xl border border-white/5 bg-white/5 px-4 py-2"
                  whileHover={reduceMotion ? undefined : { x: 4 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                className="btn-primary w-full justify-center"
                href="#projects"
                onClick={onCloseMenu}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              >
                View work
              </motion.a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
