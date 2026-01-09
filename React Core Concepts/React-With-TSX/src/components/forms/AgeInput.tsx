import { useRef, type JSX } from "react";

export default function AgeInput(): JSX.Element {
  const ageRef = useRef<HTMLInputElement | null>(null);

  function submit(): void {
    if (!ageRef.current) return;
    alert(`Age: ${ageRef.current.value}`);
  }

  return (
    <div style={styles.container}>
      <input 
        style={styles.input}
        ref={ageRef} 
        placeholder="Enter age" 
        type="number"
      />
      <button style={styles.button} onClick={submit}>Submit</button>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    padding: '16px 20px',
    fontSize: '15px',
    border: '2px solid rgba(16, 185, 129, 0.3)',
    borderRadius: '12px',
    outline: 'none',
    transition: 'all 0.3s',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 4px 12px rgba(16, 185, 129, 0.15), inset 0 2px 4px rgba(0, 0, 0, 0.02)',
    color: '#1e293b',
    fontWeight: '500'
  },
  button: {
    padding: '16px 28px',
    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    color: '#ffffff',
    border: 'none',
    borderRadius: '12px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s',
    boxShadow: '0 6px 16px rgba(16, 185, 129, 0.3), 0 4px 8px rgba(5, 150, 105, 0.2)',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }
} as const
