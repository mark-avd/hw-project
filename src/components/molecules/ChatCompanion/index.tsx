import React from 'react'
import { observer } from 'mobx-react-lite'
import LastSeenMessage from '../../atoms/LastSeenMessage'
import Icon from '../../atoms/Icon'
import { store } from '../../../stores/store'
import './style.scss'

interface ChatCompanion {
    closeMessages: () => void
}

const ChatCompanion: React.FC<ChatCompanion> = ({ closeMessages }) => {
    const companion = store.person
    return (
        <div className={'chat-companion'}>
            {window.innerWidth <= 600 && (
                <div className={'chat-companion__mobile'}>
                    <span
                        className={'chat-companion__icon chat-companion__back-icon'}
                        onClick={closeMessages}
                    >
                        <Icon type={'arrow-back'} />
                    </span>
                    <span className={'chat-companion__icon'}>
                        <Icon type={companion.gender} />
                    </span>
                </div>
            )}
            <div className={'chat-companion__main'}>
                <h3>{companion.name}</h3>
                <LastSeenMessage timePassed={'3 minutes'} />
            </div>
        </div>
    )
}

export default observer(ChatCompanion)
