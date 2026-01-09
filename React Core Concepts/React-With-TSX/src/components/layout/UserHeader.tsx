// functional component

import type { JSX } from "react";

export default function UserHeader(): JSX.Element {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>User Dashboard</h1>
      <p style={styles.subtitle}>Manage your Personal Information</p>
    </header>
  )
}

const styles = {
  header: {
    marginBottom: '36px',
    paddingBottom: '24px',
    borderBottom: '2px solid linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
    borderRadius: '12px',
    padding: '24px',
    border: '1px solid rgba(102, 126, 234, 0.1)'
  },
  title: {
    margin: '0 0 12px 0',
    fontSize: '32px',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    letterSpacing: '-0.8px'
  },
  subtitle: {
    margin: 0,
    fontSize: '16px',
    color: '#64748b',
    fontWeight: '500',
    opacity: 0.8
  }
} as const
