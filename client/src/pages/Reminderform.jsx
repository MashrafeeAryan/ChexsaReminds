import { useState } from 'react'
import styles from './ReminderForm.module.css'

const DELIVERY_OPTIONS = [
  {
    id: 'email',
    label: 'Email',
    tag: 'Recommended',
    tagClass: 'primary',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4537E" strokeWidth="2" strokeLinecap="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    id: 'instagram',
    label: 'Instagram',
    tag: 'Coming soon',
    tagClass: 'muted',
    disabled: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ED93B1" strokeWidth="2" strokeLinecap="round">
        <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    id: 'messenger',
    label: 'Messenger',
    tag: 'Coming soon',
    tagClass: 'muted',
    disabled: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ED93B1" strokeWidth="2" strokeLinecap="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
]

const MAX_CHARS = 160

export default function ReminderForm({ navigate }) {
  const [message, setMessage] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [delivery, setDelivery] = useState('email')

  const handleSubmit = () => {
    if (!message.trim() || !date || !time) return
    navigate('confirmation', { message, date, time, delivery })
  }

  const isValid = message.trim() && date && time

  return (
    <div className={styles.page}>
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <div className={styles.card}>
        <div className={styles.topBar}>
          <button className={styles.back} onClick={() => navigate('landing')}>← back</button>
          <div className={styles.logo}>ChexsaReminds</div>
        </div>

        <h1 className={styles.title}>Set a reminder</h1>
        <p className={styles.desc}>Write your message, pick a time, and choose how we'll reach you.</p>

        <label className={styles.label}>Your message</label>
        <textarea
          className={styles.msgBox}
          placeholder="e.g. Call mom, take your meds, submit that report..."
          value={message}
          onChange={(e) => setMessage(e.target.value.slice(0, MAX_CHARS))}
        />
        <div className={styles.charCount}>
          <span style={{ color: message.length >= MAX_CHARS ? '#D4537E' : undefined }}>
            {message.length}
          </span>
          {' '}/ {MAX_CHARS}
        </div>

        <div className={styles.row2}>
          <div className={styles.field}>
            <label className={styles.label}>Date</label>
            <input
              type="date"
              className={styles.input}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Time</label>
            <input
              type="time"
              className={styles.input}
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
        </div>

        <label className={styles.label}>How should we reach you?</label>
        <div className={styles.deliveryOpts}>
          {DELIVERY_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              className={`${styles.dopt} ${delivery === opt.id ? styles.doptActive : ''} ${opt.disabled ? styles.doptDisabled : ''}`}
              onClick={() => !opt.disabled && setDelivery(opt.id)}
              disabled={opt.disabled}
            >
              <div className={styles.doptIcon}>{opt.icon}</div>
              <div className={styles.doptName}>{opt.label}</div>
              <div className={`${styles.doptTag} ${styles[opt.tagClass]}`}>{opt.tag}</div>
            </button>
          ))}
        </div>

        <button
          className={`${styles.btnPrimary} ${!isValid ? styles.btnDisabled : ''}`}
          onClick={handleSubmit}
          disabled={!isValid}
        >
          Schedule my reminder
        </button>
        <p className={styles.note}>We'll send a confirmation to your email.</p>
      </div>
    </div>
  )
}