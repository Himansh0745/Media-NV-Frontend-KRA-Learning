// functional component


import type { ReactNode } from 'react'
import UserHeader from './UserHeader'
import type { JSX } from 'react/jsx-runtime'

type UserLayoutProps = {
  children: ReactNode
}

const styles = {
  container: {
    maxWidth: '900px',
    margin: '40px auto',
    padding: '40px',
    background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
    borderRadius: '24px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08), 0 8px 16px rgba(0, 0, 0, 0.04)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", sans-serif',
    border: '1px solid rgba(226, 232, 240, 0.8)',
    backdropFilter: 'blur(10px)'
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }
} as const

export default function UserLayout({ children }: UserLayoutProps): JSX.Element {
  return (
    <div style={styles.container}>
      <UserHeader />
      <main style={styles.main}>{children}</main>
    </div>
  )
}