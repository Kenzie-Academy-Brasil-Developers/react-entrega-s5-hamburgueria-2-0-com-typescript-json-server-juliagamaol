
import React, { HTMLAttributes } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { InputContainer } from './styles'

interface InputProps extends HTMLAttributes<HTMLInputElement>{
    name?:string 
    placeholder: string 
    type?:string
    // register: UseFormRegister<FieldValues>
}

export default function Input({type,name,placeholder}:InputProps) {
    return (
        <InputContainer>
            <input 
            name={name}
            placeholder={placeholder}
            type={type}
            />

        </InputContainer>
    )
}

// {...register(name)} type={type}