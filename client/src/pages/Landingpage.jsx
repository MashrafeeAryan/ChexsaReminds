import styles from './LandingPage.module.css'

export default function LandingPage({ navigate }) {
  return (
    <div className={styles.page}>
      {/* Nav */}
      <nav className={styles.nav}>
        <span className={styles.logo}>ChexsaReminds</span>
        <div className={styles.navLinks}>
          <button className={styles.navLink} onClick={() => document.getElementById('how').scrollIntoView({ behavior: 'smooth' })}>
            How it works
          </button>
          <button className={styles.btnNav} onClick={() => navigate('signup')}>Sign up free</button>
        </div>
      </nav>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        <div className={styles.blob3} />
        <div className={styles.tag}>Free reminders, delivered to you ✨</div>
        <h1 className={styles.heroTitle}>
          Never forget the <em>things</em> that matter
        </h1>
        <p className={styles.heroSub}>
          Write yourself a note, set a time, and we'll ping you on email, Instagram, or Messenger. That's it.
        </p>
        <div className={styles.ctaGroup}>
          <button className={styles.btnPrimary} onClick={() => navigate('signup')}>Sign up free</button>
          <button className={styles.btnSecondary} onClick={() => navigate('reminder')}>Continue as guest</button>
        </div>
      </section>

      {/* Features */}
      <section className={styles.features}>
        {[
          {
            bg: '#FBEAF0',
            icon: (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4537E" strokeWidth="2" strokeLinecap="round">
                <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            ),
            title: 'Pick your time',
            desc: 'Any date, any time. We\'ll be right on time.',
          },
          {
            bg: '#F4C0D1',
            icon: (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#993556" strokeWidth="2" strokeLinecap="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            ),
            title: 'Your message',
            desc: 'Write anything — a task, a thought, a nudge.',
          },
          {
            bg: '#FBEAF0',
            icon: (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4537E" strokeWidth="2" strokeLinecap="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
              </svg>
            ),
            title: 'We deliver',
            desc: 'Email, Instagram, or Messenger — you choose.',
          },
        ].map((f) => (
          <div className={styles.featCard} key={f.title}>
            <div className={styles.featIcon} style={{ background: f.bg }}>{f.icon}</div>
            <h3 className={styles.featTitle}>{f.title}</h3>
            <p className={styles.featDesc}>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* How it works */}
      <section className={styles.how} id="how">
        <h2 className={styles.howTitle}>How it works</h2>
        <div className={styles.steps}>
          {['Write your message', 'Set a date & time', 'Choose how we reach you', 'We remind you — done!'].map((s, i) => (
            <div key={i} className={styles.stepWrap}>
              <div className={styles.step}>
                <div className={styles.stepNum}>{i + 1}</div>
                <p className={styles.stepText}>{s}</p>
              </div>
              {i < 3 && <span className={styles.stepArrow}>→</span>}
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className={styles.footerCta}>
        <h2>Ready to stop forgetting?</h2>
        <button className={styles.btnPrimary} onClick={() => navigate('signup')}>Get started — it's free</button>
        <button className={styles.btnGhost} onClick={() => navigate('reminder')}>Try as guest first</button>
      </section>
    </div>
  )
}