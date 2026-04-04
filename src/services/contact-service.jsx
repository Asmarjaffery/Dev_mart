import StorageService from './storage.services.jsx'  
import { Helpers } from './helpers.jsx'              

const STORAGE_KEY = 'contactMessages'

const ContactService = {

  save(formData) {
    try {
      const existing = StorageService.getFromStorage(STORAGE_KEY) || []
      const newEntry = { ...formData, submittedAt: new Date().toISOString() }
      StorageService.setInStorage(STORAGE_KEY, [...existing, newEntry])
      return { success: true }
    } catch (error) {
      console.log(error)
      return { success: false, error: 'Failed to save message.' }
    }
  },

  getAll() {
    return StorageService.getFromStorage(STORAGE_KEY) || []
  },

  validate(formData) {
    const errors = {}

    if (!formData.name.trim()) {
      errors.name = 'Name is required.'
    } else if (!Helpers.ValidateName(formData.name)) {
      errors.name = 'Name must be 3-50 characters and contain only letters and spaces.'
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required.'
    } else if (!Helpers.ValidateEmail(formData.email)) {
      errors.email = 'Please enter a valid email. e.g. user@example.com'
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required.'
    } else if (!Helpers.ValidatePhone(formData.phone)) {
      errors.phone = 'Please enter a valid phone number. e.g. +8801611112222'
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required.'
    } else if (!Helpers.ValidateMessage(formData.message)) {
      errors.message = 'Message must be 10-500 characters. Only text and numbers are allowed.'
    }

    return errors
  }
}

export default ContactService