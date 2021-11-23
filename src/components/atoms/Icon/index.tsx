import React from 'react'
import leftIcon from '../../../assets/vector-left.svg'
import rightIcon from '../../../assets/vector-right.svg'
import attachmentIcon from './../../../assets/attachment-icon.svg'
import maleIcon from '../../../assets/user-icon-male.svg'
import femaleIcon from '../../../assets/user-icon-female.svg'
import errorIcon from '../../../assets/error-input-icon.svg'
import sendIcon from '../../../assets/send-icon.svg'
import disabledSendIcon from '../../../assets/disabled-send-icon.svg'
import noChatsIcon from '../../../assets/no-chats-icon.svg'
import profileIcon from '../../../assets/header-profile-icon.svg'
import arrowBackIcon from '../../../assets/back-arrow-icon.svg'
import loadingIcon from '../../../assets/loading-icon.svg'
import fileIcon from '../../../assets/file-icon.svg'
import './style.scss'

interface Icon {
    type:
        | 'logo'
        | 'attachment'
        | 'male'
        | 'female'
        | 'input-error'
        | 'send'
        | 'no-chat'
        | 'header-profile'
        | 'arrow-back'
        | 'loading'
        | 'file'
        | 'disabled-send'
        | string
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
            {type === 'attachment' && <img src={attachmentIcon} alt={'attachment icon'} />}
            {type === 'male' && <img src={maleIcon} alt="user icon" />}
            {type === 'female' && <img src={femaleIcon} alt="user icon" />}

            {type === 'input-error' && (
                <img
                    className={'input-error-icon'}
                    src={errorIcon}
                    alt="input verification fail icon"
                />
            )}
            {type === 'send' && <img src={sendIcon} alt="send icon" />}
            {type === 'no-chat' && <img src={noChatsIcon} alt="no chats icon" />}
            {type === 'header-profile' && (
                <img className={'header-profile'} src={profileIcon} alt={'profile icon'} />
            )}
            {type === 'arrow-back' && <img src={arrowBackIcon} alt="arrow back icon" />}
            {type === 'loading' && <img src={loadingIcon} alt="loading icon" />}
            {type === 'file' && <img src={fileIcon} alt="file icon" />}
            {type === 'disabled-send' && <img src={disabledSendIcon} alt="disabled send icon" />}
        </>
    )
}

export default Icon
