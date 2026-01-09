import type { JSX } from 'react'
import UserLayout from './components/layout/UserLayout'
import UserProfile from './components/profile/UserProfile'
import UserStatus from './components/status/UserStatus'
import NameForm from './components/forms/NameForm'
import AgeInput from "./components/forms/AgeInput";
import ActionButton from "./components/ui/ActionButton";


function App(): JSX.Element {
  return (
    <>
      <UserLayout>
        <UserStatus />
        <UserProfile name="Sunny Kumar" email="sunny@example.com" />

        <section style={styles.section}>
          <h3 style={styles.sectionTitle}>Update your name</h3>
          <NameForm />
        </section>

        <section style={styles.section}>
          <h3 style={styles.sectionTitle}>Enter your age</h3>
          <AgeInput />
        </section>
      </UserLayout>
    </>
  )
}

const styles = {
  section: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '28px',
    borderRadius: '16px',
    marginTop: '28px',
    border: 'none',
    boxShadow: '0 10px 25px rgba(102, 126, 234, 0.15), 0 4px 10px rgba(118, 75, 162, 0.1)',
    position: 'relative',
    overflow: 'hidden'
  },
  sectionTitle: {
    margin: '0 0 20px 0',
    fontSize: '20px',
    fontWeight: '700',
    color: '#ffffff',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    letterSpacing: '-0.3px'
  }
} as const

export default App
