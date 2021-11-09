import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import classNames from 'classnames'
import './style.scss'

interface Input {
    optionList?: []
    select?: boolean
    name?: string
    placeholder: string
    type?: string
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
    optionList= [],
    select = false,
}) => {
    const inputClass = classNames({
        input: true,
        input_errored: isError,
        input_borderless: noBorder,
    })

    return !select ? (
        <input
            className={inputClass}
            id={name}
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            {...register}
        />
    ) : (
        <select className={inputClass} name={name} defaultValue={-1} {...register}>
            <option value={-1} disabled hidden>
                {placeholder}
            </option>
            {optionList.map((item, id: number) => {
                const values: Array<string | number> = Object.values(item)
                const capitalisedLetter: string = values[1].toString().slice(0, 1).toUpperCase()
                const rest: string = values[1].toString().slice(1)
                return (
                    <option key={id} value={values[0]}>
                        {capitalisedLetter + rest}
                    </option>
                )
            })}
        </select>
    )
}

export default Input
