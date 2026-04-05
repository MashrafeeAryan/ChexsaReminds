import { useState } from 'react'
import './index.css'
import LandingPage from './pages/LandingPage'

export default function App() {
  const [page, setPage] = useState('landing')
  const [reminderData, setReminderData] = useState(null)

  const navigate = (to, data) => {
    if (data) setReminderData(data)
    setPage(to)
    window.scrollTo(0, 0)
  }

  return (
    <>
      {page === 'landing' && <LandingPage navigate={navigate} />}

    </>
  )
}