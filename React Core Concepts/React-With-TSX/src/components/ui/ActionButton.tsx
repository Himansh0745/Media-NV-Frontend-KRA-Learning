import type { JSX } from "react";

type ActionButtonProps = {
  label: string;
  onClick: () => void;
};

export default function ActionButton({
  label,
  onClick,
}: ActionButtonProps): JSX.Element {
  return (
    <button 
      style={styles.button}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

const styles = {
  button: {
    padding: '16px 32px',
    background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
    color: '#ffffff',
    border: 'none',
    borderRadius: '12px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s',
    boxShadow: '0 8px 20px rgba(139, 92, 246, 0.3), 0 4px 12px rgba(124, 58, 237, 0.2)',
    textTransform: 'uppercase',
    letterSpacing: '0.8px',
    position: 'relative',
    overflow: 'hidden'
  }
} as const
