import React from 'react'
import classNames from 'classnames'
import { UseFormRegisterReturn } from 'react-hook-form'
import Input from '../../atoms/Input'
import Icon from '../../atoms/Icon'
import './style.scss'

interface FormField {
    name?: string
    placeholder: string
    type: string
    label: string
    errorText: string | undefined
    isError: boolean
    register: UseFormRegisterReturn
}

const FormField: React.FC<FormField> = ({
    name,
    placeholder,
    type,
    label,
    errorText,
    isError,
    register
}) => {
    const formFieldErrorClass = classNames({
        'form-field__error-text': true,
        'form-field__error-text_active': isError,
    })

    return (
        <label htmlFor={name} className={'form-field'}>
            <p className={'form-field__label-text'}>{label}</p>
            <Input
                register={register}
                isError={isError}
                placeholder={placeholder}
                type={type}
            />
            {isError && <Icon type={'input-error'} />}
            <p className={formFieldErrorClass}>{errorText}</p>
        </label>
    )
}

export default FormField
