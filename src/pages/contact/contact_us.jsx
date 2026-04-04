import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdPhone } from 'react-icons/md'
import { CiMail } from 'react-icons/ci'
import PageLayout from '../../components/layouts/page-layout'
import ContactService from '../../services/contact-service'
import styles from './contact.module.scss'

const ContactPage = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const validationErrors = ContactService.validate(formData)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    const result = ContactService.save(formData)

    if (result.success) {
      navigate('/')
    } else {
      alert(result.error)
    }
  }

  return (
    <PageLayout>

      {/* Breadcrumb */}
      <nav className={`container ${styles.breadcrumb_nav}`} aria-label="breadcrumb">
        <ol className={styles.breadcrumb_list}>
          <li className={styles.breadcrumb_item}>
            <Link to="/">Home</Link>
          </li>
          <li className={`${styles.breadcrumb_item} ${styles.breadcrumb_active}`} aria-current="page">
            Contact
          </li>
        </ol>
      </nav>

      {/* Contact Section */}
      <section className={`container ${styles.contact_section}`}>
        <div className="row g-0">

          {/* Left - Info Cards */}
          <div className={`col-12 col-lg-3 ${styles.info_column}`}>

            {/* Call To Us */}
            <div className={styles.info_card}>
              <div className={styles.info_icon}>
                <MdPhone size={20} />
              </div>
              <h6 className={styles.info_title}>Call To Us</h6>
              <p className={styles.info_desc}>We are available 24/7, 7 days a week.</p>
              <p className={styles.info_desc}>Phone: +8801611112222</p>
            </div>

            <hr className={styles.divider} />

            {/* Write To Us */}
            <div className={styles.info_card}>
              <div className={styles.info_icon}>
                <CiMail size={20} />
              </div>
              <h6 className={styles.info_title}>Write To Us</h6>
              <p className={styles.info_desc}>Fill out our form and we will contact you within 24 hours.</p>
              <p className={styles.info_desc}>Emails: customer@exclusive.com</p>
              <p className={styles.info_desc}>Emails: support@exclusive.com</p>
            </div>

          </div>

          {/* Right - Contact Form */}
          <div className={`col-12 col-lg-9 ${styles.form_column}`}>
            <form className={styles.form_wrapper} onSubmit={handleSubmit} noValidate>

              {/* Input Row */}
              <div className="row g-3 mb-3">

                {/* Name */}
                <div className="col-12 col-md-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name *"
                    className={`${styles.form_input} ${errors.name ? styles.input_error : ''}`}
                  />
                  {errors.name && <small className={styles.error_text}>{errors.name}</small>}
                </div>

                {/* Email */}
                <div className="col-12 col-md-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email *"
                    className={`${styles.form_input} ${errors.email ? styles.input_error : ''}`}
                  />
                  {errors.email && <small className={styles.error_text}>{errors.email}</small>}
                </div>

                {/* Phone */}
                <div className="col-12 col-md-4">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone *"
                    className={`${styles.form_input} ${errors.phone ? styles.input_error : ''}`}
                  />
                  {errors.phone && <small className={styles.error_text}>{errors.phone}</small>}
                </div>

              </div>

              {/* Textarea */}
              <div className="mb-4">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className={`${styles.form_textarea} ${errors.message ? styles.input_error : ''}`}
                  rows={8}
                />
                {errors.message && <small className={styles.error_text}>{errors.message}</small>}
              </div>

              {/* Submit Button */}
              <div className="d-flex justify-content-end">
                <button type="submit" className={styles.submit_btn}>
                  Send Message
                </button>
              </div>

            </form>
          </div>

        </div>
      </section>

    </PageLayout>
  )
}

export default ContactPage