import { useState } from 'react'
import styles from './SignUpPage.module.css'

export default function SignUpPage({ navigate }) {
  const [form, setForm] = useState({ name: '', email: '', password: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('reminder')
  }

  return (
    <div className={styles.page}>
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <div className={styles.card}>
        <div className={styles.logo}>ChexsaReminds</div>
        <p className={styles.subtitle}>Create an account — it's free & quick 🎉</p>

        <div className={styles.field}>
          <label className={styles.label}>Your name</label>
          <input
            name="name"
            type="text"
            className={styles.input}
            placeholder="What should we call you?"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Email address</label>
          <input
            name="email"
            type="email"
            className={styles.input}
            placeholder="you@email.com"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Password</label>
          <input
            name="password"
            type="password"
            className={styles.input}
            placeholder="something fun & secure"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <button className={styles.btnPrimary} onClick={handleSubmit}>
          Create my account
        </button>

        <div className={styles.orRow}>
          <div className={styles.orLine} />
          <span className={styles.orText}>or sign up with</span>
          <div className={styles.orLine} />
        </div>

        <button className={styles.socialBtn}>
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"/>
            <path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z"/>
            <path fill="#4A90E2" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z"/>
            <path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z"/>
          </svg>
          Continue with Google
        </button>

        <div className={styles.guestLink}>
          Just browsing?{' '}
          <button className={styles.linkBtn} onClick={() => navigate('reminder')}>
            Continue as guest →
          </button>
        </div>

        <div className={styles.backLink}>
          <button className={styles.linkBtn} onClick={() => navigate('landing')}>
            ← Back to home
          </button>
        </div>

        <p className={styles.terms}>
          By signing up, you agree to our Terms of Service & Privacy Policy.
        </p>
      </div>
    </div>
  )
}