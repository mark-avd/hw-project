import React from 'react'
import Icon from '../../atoms/Icon'
import GreetingText from '../../atoms/GreetingText'
import FormField from '../../molecules/FormField'
import Button from '../../atoms/Button'
import { Redirect } from 'react-router-dom'
import * as Yup from 'yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import './style.scss'

interface AuthForm {
    captchaURL: string
    renderLoginForm: () => void
}

interface RegisterForm {
    login: string
    password: string
    password_confirm: string
    name: string
    gender_id: number
    captcha: string
}

const RegisterForm: React.FC<AuthForm> = ({ captchaURL, renderLoginForm }) => {
    const validationSchema = Yup.object().shape({
        login: Yup.string()
            .min(2, 'Login must be at least 2 characters')
            .max(50, 'Login must not exceed 50 characters')
            .required('Login is required'),
        password: Yup.string()
            .min(2, 'Password must be at least 2 characters')
            .required('Password is required'),
        password_confirm: Yup.string().when('password', (password, field) =>
            password
                ? field
                      .required('Password confirmation is required')
                      .oneOf([Yup.ref('password')], 'Passwords not match')
                : field
        ),
        name: Yup.string().min(2).max(50).required(),
        gender_id: Yup.number().required(),
        captcha: Yup.string()
            .min(5, 'Must be 5 characters')
            .max(5, 'Must be 5 characters')
            .required(' '),
    })
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid, isDirty },
    } = useForm<RegisterForm>({
        resolver: yupResolver(validationSchema),
        mode: 'onBlur',
    })
    const onSubmit: SubmitHandler<RegisterForm> = () => {
        reset()
    }

    return (
        <div className={'register-form'}>
            <div className={'register-form__logo-icons'}>
                <Icon type={'logo'} />
            </div>
            <span className={'register-form__heading'}>
                <GreetingText greeting={'Sign Up to'} />
            </span>
            <h2 className={'register-form__subheading'}>Registration</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={'register-form__input'}>
                    <FormField
                        name={'login'}
                        placeholder={'Input user name'}
                        type={'text'}
                        label={'Create user name'}
                        errorText={errors.login?.message}
                        isError={!isValid && !!errors.login?.message}
                        register={register('login')}
                    />
                </div>
                <div className={'register-form__input'}>
                    <FormField
                        name={'password'}
                        placeholder={'Input password'}
                        type={'password'}
                        label={'Create password'}
                        errorText={errors.password?.message}
                        isError={!isValid && !!errors.password?.message}
                        register={register('password')}
                    />
                </div>
                <div className={'register-form__input'}>
                    <FormField
                        name={'password_confirm'}
                        placeholder={'Password confirmation'}
                        type={'password'}
                        label={'Password confirmation'}
                        errorText={errors.password_confirm?.message}
                        isError={!isValid && !!errors.password_confirm?.message}
                        register={register('password_confirm')}
                    />
                </div>
                <div className={'register-form__input'}>
                    <FormField
                        name={'name'}
                        placeholder={'Nickname'}
                        type={'text'}
                        label={'Nickname'}
                        errorText={errors.name?.message}
                        isError={!isValid && !!errors.name?.message}
                        register={register('name')}
                    />
                </div>
                <div className={'register-form__input'}>
                    <select className={'input'} name="gender_id" id="">
                        <option value="test">test</option>
                    </select>
                </div>
                <div className={'register-form__input'}>
                    <div className={'register-form__captcha-input'}>
                        <FormField
                            placeholder={'Security code'}
                            type={'text'}
                            label={'Security code'}
                            errorText={errors.captcha?.message}
                            isError={!isValid && !!errors.captcha?.message}
                            register={register('captcha')}
                        />
                    </div>
                    <div className={'register-form__captcha-img'}>
                        <img src={captchaURL} alt="captcha" />
                    </div>
                </div>
                <div className={'register-form__buttons'}>
                    <div className={'register-form__button'}>
                        <Button
                            type={'submit'}
                            buttonText={'Register'}
                            isDisabled={false}
                        />
                    </div>
                    <div className={'register-form__button'}>
                        <Button
                            type={'button'}
                            buttonText={'Log In'}
                            isPrimary={false}
                            isDisabled={false}
                            onClick={renderLoginForm}
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm
