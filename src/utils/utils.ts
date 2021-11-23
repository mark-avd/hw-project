// eslint-disable-next-line
export const getFormData = (object: any): FormData => {
    const formData = new FormData()
    Object.keys(object).forEach((key) => formData.append(key, object[key]))
    return formData
}

export const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

export const allowedMimeTypes = [
    'image/jpeg',
    'image/gif',
    'image/png',
    'image/svg+xml',
    'video/mp4',
    'video/ogg',
    'video/webm',
    'audio/ogg',
    'audio/mpeg',
]
