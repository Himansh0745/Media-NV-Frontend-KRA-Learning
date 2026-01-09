//UserStatus — Side Effects (Visual Feedback)

import { useEffect, useState, type JSX } from "react";

export default function UserStatus(): JSX.Element {
  const [status, setStatus] = useState<
    "offline" | "online"
  >("offline");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setStatus("online");
    }, 1500);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div style={styles.statusContainer}>
      <span style={styles.dot}></span>
      <p style={styles.text}>
        Status: <span style={styles.statusText}>{status}</span>
      </p>
    </div>
  )
}

const styles = {
  statusContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px 20px',
    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    borderRadius: '12px',
    border: 'none',
    boxShadow: '0 8px 16px rgba(16, 185, 129, 0.2), 0 4px 8px rgba(5, 150, 105, 0.1)',
    position: 'relative'
  },
  dot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: '#ffffff',
    boxShadow: '0 0 0 3px rgba(255, 255, 255, 0.3), 0 0 12px rgba(255, 255, 255, 0.8)',
    animation: 'pulse 2s infinite'
  },
  text: {
    margin: 0,
    fontSize: '15px',
    color: '#ffffff',
    fontWeight: '600',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
  },
  statusText: {
    fontWeight: '700',
    color: '#ffffff'
  }
} as const;
