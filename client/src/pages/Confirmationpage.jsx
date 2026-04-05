import styles from './ConfirmationPage.module.css'

function formatDate(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })
}

function formatTime(timeStr) {
  if (!timeStr) return ''
  const [h, m] = timeStr.split(':').map(Number)
  const ampm = h >= 12 ? 'PM' : 'AM'
  const hour = h % 12 || 12
  return `${hour}:${String(m).padStart(2, '0')} ${ampm}`
}

const DELIVERY_LABELS = {
  email: 'Email',
  instagram: 'Instagram',
  messenger: 'Messenger',
}

const DOTS = ['#D4537E', '#FBEAF0', '#F4C0D1', '#993556', '#ED93B1', '#D4537E', '#FBEAF0']

export default function ConfirmationPage({ navigate, reminder }) {
  const { message = 'Your reminder', date = '', time = '', delivery = 'email' } = reminder || {}

  return (
    <div className={styles.page}>
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <div className={styles.card}>
        <div className={styles.confettiRow}>
          {DOTS.map((color, i) => (
            <div key={i} className={styles.dot} style={{ background: color }} />
          ))}
        </div>

        <div className={styles.iconWrap}>
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#D4537E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        </div>

        <h1 className={styles.title}>You're all set! 🎉</h1>
        <p className={styles.sub}>
          Your reminder is scheduled. We'll reach out right on time — sit back and relax.
        </p>

        <div className={styles.preview}>
          <div className={styles.previewRow}>
            <div className={styles.prIcon}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4537E" strokeWidth="2" strokeLinecap="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <div>
              <div className={styles.prLabel}>Your message</div>
              <div className={styles.prVal}>{message}</div>
            </div>
          </div>

          <div className={styles.previewRow}>
            <div className={styles.prIcon}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4537E" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div>
              <div className={styles.prLabel}>Scheduled for</div>
              <div className={styles.prVal}>{formatDate(date)} · {formatTime(time)}</div>
            </div>
          </div>

          <div className={styles.previewRow}>
            <div className={styles.prIcon}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4537E" strokeWidth="2" strokeLinecap="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div>
              <div className={styles.prLabel}>Sending via</div>
              <div className={styles.prVal}>{DELIVERY_LABELS[delivery]}</div>
            </div>
          </div>
        </div>

        <button className={styles.btnPrimary} onClick={() => navigate('reminder')}>
          Set another reminder
        </button>
        <button className={styles.btnSecondary} onClick={() => navigate('landing')}>
          Back to home
        </button>
      </div>
    </div>
  )
}