import React, { useRef, useState } from 'react'
import { runInAction } from 'mobx'
import Input from '../../atoms/Input'
import Icon from '../../atoms/Icon'
import { store } from '../../../stores/store'
import { BASE_URL, FILE_UPLOAD_URL } from '../../../utils/api'
import { allowedMimeTypes } from '../../../utils/utils'
import { websocketInstance } from '../../../utils/websocket'
import './style.scss'

const ChatInputArea: React.FC = () => {
    const [isDisabled, setDisabled] = useState<boolean>(false)
    const hiddenFileInput = useRef<HTMLInputElement>(null)

    const fileInputClick = () => {
        hiddenFileInput.current?.click()
    }

    const fileInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setDisabled(true)
            const file = event.target.files[0]
            const formData = new FormData()
            if (file.size > 2097152) {
                event.target.value = ''
                alert('A file larger than 2 MB is not allowed')
                return false
            }

            if (!allowedMimeTypes.includes(file.type)) {
                event.target.value = ''
                alert('File type not allowed')
                alert(
                    'You can upload only .jpeg/gif/png/svg picture files or .mp4/ogg/webm video files or .ogg/mpeg audio files'
                )
                return false
            }

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

    const handleSend = (event: any) => {
        event.preventDefault()
        const fileInput = event.target[0]
        const textInput = event.target[2]

        if (fileInput.value === '') {
            if (textInput.value !== '') {
                websocketInstance.sendMessage(textInput.value)
                textInput.value = ''
            }
            return false
        }
        if (fileInput.value !== '') {
            websocketInstance.sendMessage(textInput.value)
            textInput.value = ''
        }
    }

    return (
        <form onSubmit={handleSend}>
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
