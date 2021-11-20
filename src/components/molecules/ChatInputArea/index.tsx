import React from 'react'
import Input from '../../atoms/Input'
import Icon from '../../atoms/Icon'
import { websocketInstance } from '../../../utils/websocket'
import './style.scss'
import { SubmitHandler, useForm } from 'react-hook-form'

interface ChatInputArea {
    text: string
    file: File
}

const ChatInputArea: React.FC = () => {
    const { register, handleSubmit, reset } = useForm<ChatInputArea>()
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
                    <input className={'chat-input-area__file-input'} type="file" />
                    <button>
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
