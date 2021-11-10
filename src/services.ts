// eslint-disable-next-line
export const getFormData = (object: any): FormData => {
    const formData = new FormData()
    Object.keys(object).forEach((key) => formData.append(key, object[key]))
    return formData
}
