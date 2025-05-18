import React from 'react'
import "./style.scss"
interface TextAreaProps {
    name: string;
    placeholder: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

function TextArea(props: TextAreaProps) {
    const { name, placeholder, onChange } = props
    return (
        <div className={"text-area"}>
            <textarea name={name} placeholder={placeholder} onChange={onChange} />
        </div>
    )
}

export default TextArea