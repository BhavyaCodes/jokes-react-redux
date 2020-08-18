export const formSubmit = (formData) => {
    return {
        type: 'FORM',
        payload: formData
    }
}