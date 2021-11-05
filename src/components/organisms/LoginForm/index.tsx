import React, { useState } from 'react'
import * as Yup from 'yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Redirect } from 'react-router-dom'
import Icon from './../../atoms/Icon'
import Button from './../../atoms/Button'
import GreetingText from './../../atoms/GreetingText'
import FormField from './../../molecules/FormField'
import './style.scss'


interface LoginForm {
    login: string
    password: string
}

const LoginForm: React.FC = () => {
    const [isLoggedIn, setLoggedIn] = useState<boolean>(false)
    const validationSchema = Yup.object().shape({
        login: Yup.string()
            .min(2, 'Login must be at least 2 characters')
            .max(16, 'Login must not exceed 16 characters')
            .required('Login is required'),
        password: Yup.string()
            .min(2, 'Password must be at least 2 characters')
            .max(32, 'Password must not exceed 32 characters')
            .required('Password is required'),
    })
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid, isDirty },
    } = useForm<LoginForm>({
        resolver: yupResolver(validationSchema),
        mode: 'onChange',
    })
    const onSubmit: SubmitHandler<LoginForm> = () => {
        reset()
        setLoggedIn(true)
    }

    return (
        <div className={'login-form'}>
            <div className={'login-form__logo-icons'}>
                <Icon type={'logo'} />
            </div>

            <span className={'login-form__heading'}>
                <GreetingText />
            </span>
            <h2 className={'login-form__subheading'}>
                Please, authorize yourself
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={'login-form__input'}>
                    <FormField
                        name={'login'}
                        isError={!isValid && !!errors.login?.message}
                        placeholder={'Input user name'}
                        type={'text'}
                        label={'User name'}
                        errorText={errors.login?.message}
                        register={register('login')}
                    />
                </div>
                <div className={'login-form__input'}>
                    <FormField
                        name={'password'}
                        isError={!isValid && !!errors.password?.message}
                        placeholder={'Input password'}
                        type={'password'}
                        label={'Password'}
                        errorText={errors.password?.message}
                        register={register('password')}
                    />
                </div>
                <div className={'login-form__button'}>
                    <Button
                        type={'submit'}
                        buttonText={'Log In'}
                        isDisabled={!isDirty || !isValid}
                    />
                </div>
            </form>
            {isLoggedIn && <Redirect to={'/chat'} />}
        </div>
    )
}

export default LoginForm
