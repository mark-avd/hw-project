import React, { useState } from 'react'
import Button from '../../atoms/Button'
import FormInput from '../../molecules/FormField'
import './style.scss'
import LogoIcons from '../../atoms/LogoIcons'
import GreetingText from '../../atoms/GreetingText'

const LoginForm: React.FC = () => {
    const [isError, setError] = useState<boolean>(false)
    const [isDisabled, setDisabled] = useState<boolean>(false)
    const onClick = (event: React.SyntheticEvent): void => {
        event.preventDefault()
        setError((prevState) => !prevState)
    }
    const onDoubleClick = (): void => {
        setDisabled((prevState) => !prevState)
    }

    return (
        <div className={'login-form'}>
            <LogoIcons />
            <span className={'login-form__heading'}>
                <GreetingText />
            </span>
            <h2 className={'login-form__subheading'}>
                Please, authorize yourself
            </h2>
            <form>
                <div className={'login-form__input'}>
                    <FormInput
                        name={'login'}
                        isError={isError}
                        placeholder={'Input user name'}
                        type={'text'}
                        label={'User name'}
                        errorText={'Something goes wrong'}
                    />
                </div>
                <div className={'login-form__input'}>
                    <FormInput
                        name={'password'}
                        isError={isError}
                        placeholder={'Input password'}
                        type={'password'}
                        label={'Password'}
                        errorText={'Something goes wrong'}
                    />
                </div>
                <div className={'login-form__button'}>
                    <Button
                        buttonText={'Log In'}
                        onClick={onClick}
                        onDoubleClick={onDoubleClick}
                        isDisabled={isDisabled}
                    />
                </div>
            </form>
        </div>
    )
}

export default LoginForm
