import React from 'react'
import leftIcon from '../../../assets/vector-left.svg'
import rightIcon from '../../../assets/vector-right.svg'
import attachmentIcon from './../../../assets/attachment-icon.svg'
import maleIcon from '../../../assets/user-icon-male.svg'
import femaleIcon from '../../../assets/user-icon-female.svg'
import errorIcon from '../../../assets/error-input-icon.svg'
import sendIcon from '../../../assets/send-icon.svg'
import noChatsIcon from '../../../assets/no-chats-icon.svg'
import profileIcon from '../../../assets/header-profile-icon.svg'
import arrowBackIcon from '../../../assets/back-arrow-icon.svg'
import './style.scss'

interface Icon {
    type:
        | 'logo'
        | 'attachment'
        | 'user-male'
        | 'user-female'
        | 'input-error'
        | 'send-icon'
        | 'no-chat'
        | 'header-profile-icon'
        | 'arrow-back-icon'
}

const Icon: React.FC<Icon> = ({ type }) => {
    return (
        <>
            {type === 'logo' && (
                <>
                    <img src={leftIcon} alt="logo icon" />
                    <img src={rightIcon} alt="logo icon" />
                </>
            )}
            {type === 'attachment' && (
                <img src={attachmentIcon} alt={'attachment icon'} />
            )}
            {type === 'user-male' && <img src={maleIcon} alt="user icon" />}
            {type === 'user-female' && <img src={femaleIcon} alt="user icon" />}

            {type === 'input-error' && (
                <img
                    className={'input-error-icon'}
                    src={errorIcon}
                    alt="input verification fail icon"
                />
            )}
            {type === 'send-icon' && <img src={sendIcon} alt="send icon" />}
            {type === 'no-chat' && (
                <img src={noChatsIcon} alt="no chats icon" />
            )}
            {type === 'header-profile-icon' && (
                <img
                    className={'header-profile-icon'}
                    src={profileIcon}
                    alt={'profile icon'}
                />
            )}
            {type === 'arrow-back-icon' && (
                <img src={arrowBackIcon} alt="arrow back icon" />
            )}
        </>
    )
}

export default Icon
