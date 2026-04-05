import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { IoSendSharp } from 'react-icons/io5'
import ScrollToTopButton from '../button/ScrollToTopButton'
import styles from './footer.module.scss'
import Chatbot from '../chatbot/chatbot'

const Footer = () => {
    const [email, setEmail] = useState('')

    const handleSubscribe = () => {
        if (email.trim()) {
            setEmail('')
        }
    }

    return (
        <>
            <Chatbot />
            <ScrollToTopButton />
            <footer className={styles.footer_container}>
                <div className="container">
                    <div className="row">

                        <div className="col-12 col-md-6 col-lg-3 mb-4">
                            <h5 className={styles.brand}>Dev Mart</h5>
                            <p className={styles.subscribe_title}>Subscribe</p>
                            <p className={styles.subscribe_desc}>Get 10% off your first order</p>
                            <div className={styles.subscribe_input_wrapper}>
                                <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.subscribe_input} />
                                <button onClick={handleSubscribe} className={styles.subscribe_btn}>
                                    <IoSendSharp size={16} />
                                </button>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-2 mb-4">
                            <h6 className={styles.col_title}>Support</h6>
                            <p className={styles.col_text}>
                                <a href="https://www.google.com/maps/search/?api=1&query=111+Bijoy+sarani+Dhaka+DH+1515+Bangladesh" target="_blank" rel="noopener noreferrer">
                                    111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                                </a>
                            </p>
                            <p className={styles.col_text}>
                                <a href="https://mail.google.com/mail/?view=cm&to=devmart@gmail.com" target="_blank" rel="noopener noreferrer">
                                    dev_mart@gmail.com
                                </a>
                            </p>
                            <p className={styles.col_text}>
                                <a href="tel:+8801588888999">
                                    +88015-88888-9999
                                </a>
                            </p>
                        </div>

                        <div className="col-12 col-md-6 col-lg-2 mb-4">
                            <h6 className={styles.col_title}>Account</h6>
                            <ul className={styles.col_links}>
                                <li><Link to="/account">My Account</Link></li>
                                <li><Link to="/auth/login">Login / Register</Link></li>
                                <li><Link to="/cart">Cart</Link></li>
                                <li><Link to="/wishlist">Wishlist</Link></li>
                                <li><Link to="/products">Shop</Link></li>
                            </ul>
                        </div>

                        <div className="col-12 col-md-6 col-lg-2 mb-4">
                            <h6 className={styles.col_title}>Quick Link</h6>
                            <ul className={styles.col_links}>
                                <li><Link to="/privacy">Privacy Policy</Link></li>
                                <li><Link to="/terms">Terms Of Use</Link></li>
                                <li><Link to="/faq">FAQ</Link></li>
                                <li><Link to="/contact_us">Contact</Link></li>
                            </ul>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3 mb-4">
                            <h6 className={styles.col_title}>Download App</h6>
                            <p className={styles.app_desc}>Save $3 with App New User Only</p>
                            <div className={styles.app_row}>
                                <div className={styles.qr_box}>
                                    <img
                                        src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://asmarjaffery.github.io/Dev_mart/"
                                        alt="QR Code"
                                        width={80}
                                        height={80}
                                    />
                                </div>
                                <div className={styles.app_badges}>
                                    <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className={styles.app_badge}><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" /></a>
                                    <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className={styles.app_badge}><img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" /></a>
                                </div>
                            </div>
                            <div className={styles.social_icons}>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF size={16} /></a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter size={16} /></a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram size={16} /></a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn size={16} /></a>
                            </div>
                        </div>

                    </div>

                    <div className={styles.bottom_bar}>
                        <span>&copy; Dev trio 2022 All right reserved</span>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer