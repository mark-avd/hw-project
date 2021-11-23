import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { runInAction } from 'mobx'
import Input from '../../atoms/Input'
import Icon from '../../atoms/Icon'
import { websocketInstance } from '../../../utils/websocket'
import { BASE_URL, FILE_UPLOAD_URL } from '../../../utils/api'
import { store } from '../../../stores/store'
import './style.scss'

interface ChatInputArea {
    text: string
    file: File
}

const ChatInputArea: React.FC = () => {
    const [isDisabled, setDisabled] = useState<boolean>(false)
    const hiddenFileInput = useRef<HTMLInputElement>(null)
    const { register, handleSubmit, reset } = useForm<ChatInputArea>()

    const fileInputClick = () => {
        hiddenFileInput.current?.click()
    }

    const fileInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setDisabled(true)
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
                        url: BASE_URL + fileUrl,
                    }
                })
                setDisabled(false)
            }
            if (response.status === 400) {
                const error = await response.text()
                console.error(error)
            }
        }
    }

    const handleSend: SubmitHandler<ChatInputArea> = (data) => {
        if (data.text === '') {
            return false
        }
        websocketInstance.sendMessage(data.text)
        reset()
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
                    <button disabled={isDisabled}>
                        {isDisabled ? <Icon type={'disabled-send'} /> : <Icon type={'send'} />}
                    </button>
                </div>
            </div>
        </form>
    )
}

export default ChatInputArea
