import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from './../../atoms/Button'
import FormField from './../../molecules/FormField'
import GreetingText from './../../atoms/GreetingText'
import Icon from '../../atoms/Icon'
import './style.scss'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const LoginForm: React.FC = () => {
    const [isError, setError] = useState<boolean>(false)
    const [isDisabled, setDisabled] = useState<boolean>(false)
    // const validationSchema = Yup.object().shape({
    //     login: Yup.string()
    //         .min(2, 'Login must be at least 2 characters')
    //         .max(16, 'Login must not exceed 16 characters')
    //         .required('Login is required'),
    //     password: Yup.string()
    //         .min(2, 'Password must be at least 2 characters')
    //         .max(32, 'Password must not exceed 32 characters')
    //         .required('Password is required'),
    // })
    // const {
    //     register,
    //     handleSubmit,
    //     reset,
    //     formState: { errors },
    // } = useForm<LoginForm>({ resolver: yupResolver(validationSchema) })
    // const onSubmit = (data: LoginForm) => {
    //     console.log(data)
    // }

    // const login: any = register('login')
    // const password: any = register('password')

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
