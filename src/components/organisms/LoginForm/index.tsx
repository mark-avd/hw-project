import React, { useState } from 'react'
import Button from '../../atoms/Button'
import FormInput from '../../molecules/FormField'
import './style.scss'

const LoginForm: React.FC = () => {
    const [isError, setError] = useState<boolean>(false)
    const [isDisabled, setDisabled] = useState<boolean>(false)
    const onClick = (e: React.SyntheticEvent): void => {
        setError(prevState => !prevState)
        e.preventDefault()
    }
    const onDoubleClick = (): void => {
        setDisabled(prevState => !prevState)
    }

    return (
        <>
            <form className={'form'}>
                <FormInput
                    name={'login'}
                    isError={isError}
                    placeholder={'Input user name'}
                    type={'text'}
                    label={'User name'}
                    errorText={'Something goes wrong'}
                />
                <FormInput
                    name={'password'}
                    isError={isError}
                    placeholder={'Input password'}
                    type={'password'}
                    label={'Password'}
                    errorText={'Something goes wrong'}
                />
                <Button
                    buttonText={'Log In'}
                    onClick={onClick}
                    onDoubleClick={onDoubleClick}
                    isDisabled={isDisabled}
                />
            </form>
        </>
    )
}

export default LoginForm
