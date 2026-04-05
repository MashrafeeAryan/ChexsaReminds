import { useState } from 'react'
import './index.css'
import LandingPage from './pages/LandingPage'
import SignUpPage from './pages/SignUpPage'
import ReminderForm from './pages/ReminderForm'
import ConfirmationPage from './pages/ConfirmationPage'

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
      {page === 'signup' && <SignUpPage navigate={navigate} />}
      {page === 'reminder' && <ReminderForm navigate={navigate} />}
      {page === 'confirmation' && <ConfirmationPage navigate={navigate} reminder={reminderData} />}
    </>
  )
}