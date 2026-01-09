// UserProfile — Props vs State

import { useState, type JSX } from "react";

type UserProfileProps = {
    name: string;
    email: string;
};
export default function UserProfile({ name, email }: UserProfileProps): JSX.Element{
  const [isEditing, setIsEditing] = useState<boolean>(false);

  return (
    <div style={styles.profile}>
      <h2 style={styles.title}>User Profile</h2>
      <div style={styles.info}>
        <p style={styles.infoItem}>
          <span style={styles.label}>Name:</span> {name}
        </p>
        <p style={styles.infoItem}>
          <span style={styles.label}>Email:</span> {email}
        </p>
      </div>
      <button 
        style={styles.button}
        onClick={() => setIsEditing((prev) => !prev)}
      >
        {isEditing ? 'Cancel' : 'Edit'}
      </button>
    </div>
  )
}
const styles = {
  profile: {
    padding: '24px',
    background: 'linear-gradient(145deg, #ffffff 0%, #f1f5f9 100%)',
    borderRadius: '16px',
    border: '1px solid rgba(226, 232, 240, 0.8)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.02)',
    position: 'relative'
  },
  title: {
    margin: '0 0 20px 0',
    fontSize: '22px',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    letterSpacing: '-0.4px'
  },
  info: {
    marginBottom: '20px'
  },
  infoItem: {
    margin: '0 0 12px 0',
    fontSize: '15px',
    color: '#475569',
    padding: '8px 0',
    borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
  },
  label: {
    fontWeight: '700',
    marginRight: '8px',
    color: '#1e293b',
    fontSize: '14px'
  },
  button: {
    padding: '12px 24px',
    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    color: '#ffffff',
    border: 'none',
    borderRadius: '10px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s',
    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3), 0 2px 6px rgba(37, 99, 235, 0.2)',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }
} as const