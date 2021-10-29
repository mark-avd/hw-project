import React, { useState } from 'react'
import Button from './../../atoms/Button'
import FormField from './../../molecules/FormField'
import LogoIcons from './../../atoms/LogoIcons'
import GreetingText from './../../atoms/GreetingText'
import { NavLink } from 'react-router-dom'
import './style.scss'

const LoginForm: React.FC = () => {
    const [isError, setError] = useState<boolean>(false)
    const [isDisabled, setDisabled] = useState<boolean>(false)

    return (
        <div className={'login-form'}>
            <div className={'login-form__logo-icons'}>
                <LogoIcons />
            </div>
            <span className={'login-form__heading'}>
                <GreetingText />
            </span>
            <h2 className={'login-form__subheading'}>
                Please, authorize yourself
            </h2>
            <form>
                <div className={'login-form__input'}>
                    <FormField
                        name={'login'}
                        isError={isError}
                        placeholder={'Input user name'}
                        type={'text'}
                        label={'User name'}
                        errorText={'Something goes wrong'}
                    />
                </div>
                <div className={'login-form__input'}>
                    <FormField
                        name={'password'}
                        isError={isError}
                        placeholder={'Input password'}
                        type={'password'}
                        label={'Password'}
                        errorText={'Something goes wrong'}
                    />
                </div>
                <div className={'login-form__button'}>
                    <NavLink to={'/chat'}>
                        <Button
                            type={'submit'}
                            buttonText={'Log In'}
                            isDisabled={isDisabled}
                        />
                    </NavLink>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
