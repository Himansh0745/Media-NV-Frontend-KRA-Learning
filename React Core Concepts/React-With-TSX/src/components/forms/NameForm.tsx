// NameForm — Controlled Input

import { useState, type JSX, type ChangeEvent } from "react";

const styles = {
  input: {
    width: '100%',
    padding: '16px 20px',
    fontSize: '15px',
    border: '2px solid rgba(102, 126, 234, 0.2)',
    borderRadius: '12px',
    outline: 'none',
    transition: 'all 0.3s',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 4px 12px rgba(102, 126, 234, 0.1), inset 0 2px 4px rgba(0, 0, 0, 0.02)',
    color: '#1e293b',
    fontWeight: '500'
  }
} as const

export default function NameForm(): JSX.Element {
    const [name, setName] = useState<string>("");
    
    function handleChange(
      e: ChangeEvent<HTMLInputElement>
    ): void {
      setName(e.target.value);
    }

    return (
      <input 
        style={styles.input}
        type="text" 
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
    );
}