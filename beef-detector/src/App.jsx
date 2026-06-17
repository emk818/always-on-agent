import { useState } from 'react'
import BeefIntro from './components/BeefIntro'
import BeefDashboard from './components/BeefDashboard'

export default function App() {
  const [showDashboard, setShowDashboard] = useState(false)

  return showDashboard ? (
    <BeefDashboard />
  ) : (
    <BeefIntro onEnter={() => setShowDashboard(true)} />
  )
}
