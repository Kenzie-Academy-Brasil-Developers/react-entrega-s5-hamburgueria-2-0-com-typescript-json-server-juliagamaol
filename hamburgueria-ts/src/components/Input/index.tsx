
import React, { HTMLAttributes } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { InputContainer } from './styles'

interface InputProps extends HTMLAttributes<HTMLInputElement>{
    name:string 
    placeholder: string 
    type?:string
    register: UseFormRegister<FieldValues>
    error:any
}

export default function Input({error,register,type,name,placeholder}:InputProps) {
    return (
        <>
            {error && <span style={{color:"var(--negative)"}}>{error}</span>}
            <InputContainer>
                <input 
                placeholder={placeholder}
                type={type}
                {...register(name)}
                />
            </InputContainer>
        </>
    )
}

// {...register(name)} type={type}