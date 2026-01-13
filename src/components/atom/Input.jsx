import React, { useState } from 'react'
import eyeShow from '../../assets/images/eye-password-show.svg'
import eyeHide from '../../assets/images/eye-password-hide.svg'

export default function Input({
    id,
    name,
    label,
    type = 'text',
    value,
    onChange,
    placeholder = '',
    required = false,
    className = '',
    showToggle = false,
    ...rest
}) {
    const [visible, setVisible] = useState(false)

    const inputType = type === 'password' && showToggle ? (visible ? 'text' : 'password') : type

    return (
        <div className="relative">
            {label && (
                <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}

            <input
                id={id}
                name={name}
                type={inputType}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm px-3 py-2 ${className}`}
                {...rest}
            />

            {showToggle && (
                <button
                    type="button"
                    onClick={() => setVisible((s) => !s)}
                    aria-label={visible ? 'Sembunyikan password' : 'Tampilkan password'}
                    className="absolute right-2 top-9 inline-flex items-center"
                >
                    <img src={visible ? eyeHide : eyeShow} alt="toggle" className="h-5 w-5" />
                </button>
            )}
        </div>
    )
}