import React from 'react'
import {  UseFormRegisterReturn } from 'react-hook-form'
import classNames from 'classnames'
import './style.scss'

interface Input {
    name?: string
    placeholder: string
    type: string
    isError?: boolean
    noBorder?: boolean
    value?: string
    register?: UseFormRegisterReturn
}

const Input: React.FC<Input> = ({
    value,
    placeholder,
    type,
    name,
    isError,
    noBorder,
    register,
}) => {
    const inputClass = classNames({
        input: true,
        input_errored: isError,
        input_borderless: noBorder,
    })

    return (
        <input
            className={inputClass}
            id={name}
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            {...register}
        />
    )
}

export default Input
