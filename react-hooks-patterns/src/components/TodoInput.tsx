import { useState, useRef } from "react";

type Props = {
    onAdd: (text: string) => void;
};


export function TodoInput({ onAdd }: Props) {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleSubmit = () =>{
        if(!value.trim()) return;
        onAdd(value);
        setValue('');
        inputRef.current?.focus();
    };

    return (
        <div className="input-section">
            <input 
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Add a new todo"
            className="glass-input"
            />
            <button onClick={handleSubmit} className="glass-button">Add</button>
        </div>
    )


}