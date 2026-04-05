const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const phoneRegex = /^\+?[0-9]{7,15}$/
const messageRegex = /^[a-zA-Z0-9\s.,!?'"()-]{10,500}$/

export class Helpers {
    static ValidateEmail(email) {
        return emailRegex.test(email)
    }
    static ValidatePassword(password) {
        return password.length >= 7
    }
    static ValidateName(name) {
        return name.length > 3
    }
    static ValidatePhone(phone) {
        return phoneRegex.test(phone)
    }
    static ValidateMessage(message) {
        return messageRegex.test(message)
    }
    static priceFormatter(amount){
        return new Intl.NumberFormat('en-US',{
            style: 'currency',
            currency: 'USD',

        }).format(amount)
    }
}

