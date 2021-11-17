import React, { useEffect, useState } from 'react'
import Icon from '../../atoms/Icon'
import GreetingText from '../../atoms/GreetingText'
import FormField from '../../molecules/FormField'
import Button from '../../atoms/Button'
import * as Yup from 'yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { getFormData } from '../../../utils/utils'
import { GENDERS_URL, REGISTRATION_URL } from '../../../utils/api'
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
    const [captchaError, setCaptchaError] = useState<string | undefined>()
    const validationSchema = Yup.object().shape({
        login: Yup.string()
            .required('Login is required')
            .min(2, 'Login must be at least 2 characters')
            .max(50, 'Login must not exceed 50 characters'),
        password: Yup.string()
            .required('Password is required')
            .min(2, 'Password must be at least 2 characters'),
        password_confirm: Yup.string()
            .required('Password confirmation is required')
            .when('password', (password, field) =>
                password
                    ? field
                          .required('Password confirmation is required')
                          .oneOf([Yup.ref('password')], 'Passwords not match')
                    : field
            ),
        name: Yup.string()
            .required('Name is required')
            .min(2, 'Name must be at least 2 characters')
            .max(50),
        gender_id: Yup.number().min(1, 'Choose your gender'),
        captcha: Yup.string()
            .required('Enter captcha')
            .min(5, 'Must be 5 characters')
            .max(5, 'Must be 5 characters'),
    })
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm<RegisterForm>({
        resolver: yupResolver(validationSchema),
        mode: 'onTouched',
    })

    const onSubmit: SubmitHandler<RegisterForm> = (data) => {
        const registerRequest = async (data: FormData, url: string) => {
            const response = await fetch(url, {
                method: 'POST',
                body: data,
                credentials: 'same-origin',
            })
            if (response.status === 200) {
                reset()
            }
            if (response.status === 400) {
                const error = await response.text()
                console.error(error)
                if (error === 'Captcha is wrong! Refresh captcha image!') {
                    setCaptchaError('Captcha is wrong')
                }
            }
        }
        registerRequest(getFormData(data), REGISTRATION_URL)
    }

    const [genderList, setGenderList] = useState<[]>([])

    useEffect(() => {
        const fetchGenders = async (url: string) => {
            const response = await fetch(url)
            if (response.ok) {
                const data = await response.json()
                setGenderList(data.genders)
            }
        }
        fetchGenders(GENDERS_URL)
    }, [])
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
                        placeholder={'Nickname'}
                        type={'text'}
                        label={'Nickname'}
                        errorText={errors.name?.message}
                        isError={!isValid && !!errors.name?.message}
                        register={register('name')}
                    />
                </div>
                <div className={'register-form__input register-form__input-gender'}>
                    <FormField
                        placeholder={'Your gender'}
                        label={'Your gender'}
                        errorText={errors.gender_id?.message}
                        isError={!isValid && !!errors.gender_id?.message}
                        register={register('gender_id')}
                        select={true}
                        optionList={genderList}
                    />
                </div>
                <div className={'register-form__input'}>
                    <div className={'register-form__captcha-input'}>
                        <FormField
                            placeholder={'Security code'}
                            type={'text'}
                            label={'Security code'}
                            errorText={errors.captcha?.message || captchaError}
                            isError={
                                (!isValid && !!errors.captcha?.message) ||
                                captchaError !== undefined
                            }
                            register={register('captcha')}
                        />
                    </div>
                    <div className={'register-form__captcha-img'}>
                        <img src={captchaURL} alt="captcha" />
                    </div>
                </div>
                <div className={'register-form__buttons'}>
                    <div className={'register-form__button'}>
                        <Button type={'submit'} buttonText={'Register'} isDisabled={false} />
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
