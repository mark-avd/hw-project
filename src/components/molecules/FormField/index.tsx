import React from 'react'
import classNames from 'classnames'
import { UseFormRegisterReturn } from 'react-hook-form'
import Input from '../../atoms/Input'
import Icon from '../../atoms/Icon'
import './style.scss'

interface FormField {
    label: string
    placeholder: string
    errorText: string | undefined
    isError: boolean
    register: UseFormRegisterReturn
    name?: string
    type?: string
    select?: boolean
    optionList?: []
}

const FormField: React.FC<FormField> = ({
    name,
    placeholder,
    type,
    label,
    errorText,
    isError,
    register,
    select = false,
    optionList = [],
}) => {
    const formFieldErrorClass = classNames({
        'form-field__error-text': true,
        'form-field__error-text_active': isError,
    })

    return (
        <label htmlFor={name} className={'form-field'}>
            <p className={'form-field__label-text'}>{label}</p>
            {select ? (
                <Input
                    placeholder={placeholder}
                    isError={isError}
                    register={register}
                    optionList={optionList}
                    select={true}
                />
            ) : (
                <Input
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    isError={isError}
                    register={register}
                />
            )}
            {!select && isError && <Icon type={'input-error'} />}
            <p className={formFieldErrorClass}>{errorText}</p>
        </label>
    )
}

export default FormField
