import React, { useState } from 'react'
import * as Yup from 'yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Redirect } from 'react-router-dom'
import Icon from './../../atoms/Icon'
import Button from './../../atoms/Button'
import GreetingText from './../../atoms/GreetingText'
import FormField from './../../molecules/FormField'
import { AUTH_URL } from '../../../api'
import { getFormData } from '../../../services'
import './style.scss'

interface AuthForm {
    captchaURL: string
    renderRegisterForm: () => void
}

interface LoginForm {
    login: string
    password: string
    captcha: string
}

const LoginForm: React.FC<AuthForm> = ({ captchaURL, renderRegisterForm }) => {
    const [isLoggedIn, setLoggedIn] = useState<boolean>(false)
    const validationSchema = Yup.object().shape({
        login: Yup.string()
            .min(2, 'Login must be at least 2 characters')
            .max(50, 'Login must not exceed 50 characters')
            .required('Login is required'),
        password: Yup.string()
            .min(2, 'Password must be at least 2 characters')
            .required('Password is required'),
        captcha: Yup.string()
            .min(5, 'Must be 5 characters')
            .max(5, 'Must be 5 characters')
            .required(' '),
    })
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isDirty },
    } = useForm<LoginForm>({
        resolver: yupResolver(validationSchema),
        mode: 'onChange',
    })
    const onSubmit: SubmitHandler<LoginForm> = (data) => {
        const loginRequest = async (data: FormData, url: string) => {
            const response = await fetch(url, {
                method: 'POST',
                body: data,
                credentials: 'same-origin',
            })
            if (response.status === 200) {
                const connectKey = await response.text()
                localStorage.setItem('connect_key', connectKey)
                setLoggedIn(true)
            }
            if (response.status === 400) {
                console.error(await response.text())
            }
        }
        loginRequest(getFormData(data), AUTH_URL)
    }

    return (
        <div className={'login-form'}>
            <div className={'login-form__logo-icons'}>
                <Icon type={'logo'} />
            </div>
            <span className={'login-form__heading'}>
                <GreetingText greeting={'Welcome to'} />
            </span>
            <h2 className={'login-form__subheading'}>Please, authorize yourself</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={'login-form__input'}>
                    <FormField
                        placeholder={'Input user name'}
                        type={'text'}
                        label={'User name'}
                        errorText={errors.login?.message}
                        isError={!isValid && !!errors.login?.message}
                        register={register('login')}
                    />
                </div>
                <div className={'login-form__input'}>
                    <FormField
                        placeholder={'Input password'}
                        type={'password'}
                        label={'Password'}
                        errorText={errors.password?.message}
                        isError={!isValid && !!errors.password?.message}
                        register={register('password')}
                    />
                </div>
                <div className={'login-form__input'}>
                    <div className={'login-form__captcha-input'}>
                        <FormField
                            placeholder={'Security code'}
                            type={'text'}
                            label={'Security code'}
                            errorText={errors.captcha?.message}
                            isError={!isValid && !!errors.captcha?.message}
                            register={register('captcha')}
                        />
                    </div>
                    <div className={'login-form__captcha-img'}>
                        <img src={captchaURL} alt="captcha" />
                    </div>
                </div>
                <div className={'login-form__buttons'}>
                    <div className={'login-form__button'}>
                        <Button
                            type={'submit'}
                            buttonText={'Log In'}
                            isDisabled={!isDirty || !isValid}
                        />
                    </div>
                    <div className={'login-form__button'}>
                        <Button
                            type={'button'}
                            buttonText={'Registration'}
                            isPrimary={false}
                            isDisabled={false}
                            onClick={renderRegisterForm}
                        />
                    </div>
                </div>
            </form>
            {isLoggedIn && <Redirect to={'/chat'} />}
        </div>
    )
}

export default LoginForm
