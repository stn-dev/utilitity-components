import React from 'react'
import "./style.scss"
interface InputProps {
  type?: "text" | "password";
  name: string;
  placeholder: string;
  className?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Input(props: InputProps) {
  const { name, type = "text", placeholder, className = "", onChange } = props
  return (
    <div className={`input ${className}`}>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}

export default Input