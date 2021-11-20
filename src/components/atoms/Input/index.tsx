import React, { ChangeEvent } from 'react'
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
    register?: UseFormRegisterReturn
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<Input> = ({
    placeholder,
    type,
    name,
    isError,
    noBorder,
    register,
    optionList = [],
    select = false,
    onChange,
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
            placeholder={placeholder}
            onChange={onChange}
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
