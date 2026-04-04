const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const phoneRegex = /^\+?[0-9]{7,15}$/
const messageRegex = /^[a-zA-Z0-9\s.,!?'"()-]{10,500}$/

export const Helpers = {
    ValidateEmail(email) {
        return emailRegex.test(email)
    },
    ValidatePassword(password) {
        return password.length >= 8
    },
    ValidateName(name) {
        return name.length > 3
    },
    ValidatePhone(phone) {
        return phoneRegex.test(phone)
    },
    ValidateMessage(message) {
        return messageRegex.test(message)
    },
}