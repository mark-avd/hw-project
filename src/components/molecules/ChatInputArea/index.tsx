import React, { ChangeEvent, useState } from 'react'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Input from '../../atoms/Input'
import Icon from '../../atoms/Icon'
import { websocketInstance } from '../../../utils/websocket'
import './style.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import {store} from '../../../stores/store'

interface ChatInputArea {
    text: string
    file: File
}

const ChatInputArea: React.FC = () => {
    // const validationSchema = Yup.object().shape({
    //     text: Yup.string(),
    //     file: Yup.mixed()
    //         .test('fileSize', 'File Size is too large', (value) => {
    //             return value[0].size <= 2097152
    //         })
    //         .test('fileType', 'Unsupported File Format', (value) =>
    //             ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml'].includes(value.type)
    //         ),
    // })
    const { register, handleSubmit, reset } = useForm<ChatInputArea>()
    const handleSend: SubmitHandler<ChatInputArea> = (data) => {
        websocketInstance.sendMessage(data.text)
    }

    return (

            <div className={'chat-input-area'}>
                <div className={'chat-input-area__attachment-icon'}>
                    <input type="file" />
                    <Icon type={'attachment'} />
                </div>
                <form onSubmit={handleSubmit(handleSend)}>
                <div className={'chat-input-area__input'}>
                    <Input
                        placeholder={'Write something...'}
                        type={'text'}
                        noBorder={true}
                        register={register('text')}
                    />
                </div>
                <div className={'chat-input-area__send-icon'}>
                    <button type={'submit'} >
                        <Icon type={'send'} />
                    </button>
                </div>
                </form>
            </div>

    )
}

export default ChatInputArea
