import React, { ChangeEvent, useRef, useState } from 'react'
import Input from '../../atoms/Input'
import Icon from '../../atoms/Icon'
import { SubmitHandler, useForm } from 'react-hook-form'
import { websocketInstance } from '../../../utils/websocket'
import { BASE_URL, FILE_UPLOAD_URL } from '../../../utils/api'
import './style.scss'
import { runInAction } from 'mobx'
import { store } from '../../../stores/store'

interface ChatInputArea {
    text: string
    file: File
}

const ChatInputArea: React.FC = () => {
    const hiddenFileInput = useRef<HTMLInputElement>(null)
    const { register, handleSubmit, reset } = useForm<ChatInputArea>()
    const handleSend: SubmitHandler<ChatInputArea> = (data) => {
        if (data.text === '') {
            return false
        }
        websocketInstance.sendMessage(data.text)
        reset()
    }

    const fileInputClick = () => {
        hiddenFileInput.current?.click()
    }

    const fileInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const file = event.target.files[0]
            const formData = new FormData()
            formData.append('0', file)
            const response = await fetch(FILE_UPLOAD_URL, {
                method: 'POST',
                body: formData,
                credentials: 'same-origin',
            })
            if (response.status === 200) {
                const fileUrl = await response.text()
                runInAction(() => {
                    store.outFile = {
                        name: file.name,
                        size: file.size,
                        url: BASE_URL + fileUrl
                    }
                })
            }
            if (response.status === 400) {
                const error = await response.text()
                console.error(error)
            }
        }
    }

    return (
        <form onSubmit={handleSubmit(handleSend)}>
            <div className={'chat-input-area'}>
                <div className={'chat-input-area__attachment-icon'}>
                    <input
                        className={'chat-input-area__file-input'}
                        type="file"
                        ref={hiddenFileInput}
                        onChange={fileInputChange}
                    />
                    <button onClick={fileInputClick}>
                        <Icon type={'attachment'} />
                    </button>
                </div>

                <div className={'chat-input-area__input'}>
                    <Input
                        placeholder={'Write something...'}
                        type={'text'}
                        noBorder={true}
                        register={register('text')}
                    />
                </div>
                <div className={'chat-input-area__send-icon'}>
                    <button>
                        <Icon type={'send'} />
                    </button>
                </div>
            </div>
        </form>
    )
}

export default ChatInputArea
