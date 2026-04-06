import React, { useState, useRef, useEffect } from 'react'
import styles from './chatbot.module.scss'
import { IoClose, IoSend } from 'react-icons/io5'
import { BsChatDotsFill } from 'react-icons/bs'

const BOT_AVATAR = "https://api.dicebear.com/7.x/avataaars/svg?seed=devmart&backgroundColor=db4444&clothingColor=db4444"

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: 'Hi! Welcome to Dev Mart 👋 How can I help you today?'
        }
    ])
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const messagesEndRef = useRef(null)

    // Auto open after 2 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true)
        }, 2000)
        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    const sendMessage = async () => {
        if (!input.trim() || loading) return

        const userMessage = { role: 'user', content: input }
        const updatedMessages = [...messages, userMessage]
        setMessages(updatedMessages)
        setInput('')
        setLoading(true)

        try {
            const groqMessages = updatedMessages.map(m => ({
                role: m.role === 'assistant' ? 'assistant' : 'user',
                content: m.content
            }))

      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`
                },
                body: JSON.stringify({
                    model: 'llama-3.3-70b-versatile',
                    max_tokens: 500,
                    messages: [
                        {
                            role: 'system',
                            content: `You are a helpful shopping assistant for Dev Mart, an online ecommerce store.
                            Help customers with product queries, orders, shipping, returns, and general shopping assistance.
                            Keep responses short, friendly and helpful.
                            Don't answer questions unrelated to shopping or Dev Mart.`
                        },
                        ...groqMessages
                    ]
                })
            })

            const data = await response.json()

            if (data.error) {
                setMessages(prev => [...prev, {
                    role: 'assistant',
                    content: 'Something went wrong. Please try again!'
                }])
                return
            }

            setMessages(prev => [...prev, {
                role: 'assistant',
                content: data.choices[0].message.content
            }])

        } catch (error) {
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: 'Sorry, something went wrong. Please try again!'
            }])
        } finally {
            setLoading(false)
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            sendMessage()
        }
    }

    return (
        <div className={styles.chatbot_wrapper}>

            {isOpen && (
                <div className={styles.chat_window}>

                    {/* Header */}
                    <div className={styles.chat_header}>
                        <div className={styles.header_info}>
                            <div className={styles.avatar}>
                                <img src={BOT_AVATAR} alt="assistant" />
                            </div>
                            <div>
                                <p className={styles.bot_name}>Dev Mart Assistant</p>
                                <span className={styles.status}>Online</span>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className={styles.close_btn}>
                            <IoClose size={18} />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className={styles.messages_container}>
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`${styles.message} ${msg.role === 'user' ? styles.user_message : styles.bot_message}`}
                            >
                                {msg.role === 'assistant' && (
                                    <div className={styles.bot_avatar}>
                                        <img src={BOT_AVATAR} alt="bot" />
                                    </div>
                                )}
                                <div className={styles.message_bubble}>
                                    {msg.content}
                                </div>
                            </div>
                        ))}

                        {loading && (
                            <div className={`${styles.message} ${styles.bot_message}`}>
                                <div className={styles.bot_avatar}>
                                    <img src={BOT_AVATAR} alt="bot" />
                                </div>
                                <div className={styles.message_bubble}>
                                    <div className={styles.typing_dots}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className={styles.input_area}>
                        <input
                            type="text"
                            placeholder="Type your message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className={styles.chat_input}
                            disabled={loading}
                        />
                        <button
                            onClick={sendMessage}
                            className={styles.send_btn}
                            disabled={loading || !input.trim()}
                        >
                            <IoSend size={16} />
                        </button>
                    </div>

                </div>
            )}

            {/* Toggle button - only visible when chat is closed */}
            {!isOpen && (
                <button
                    className={styles.chat_toggle_btn}
                    onClick={() => setIsOpen(true)}
                >
                    <BsChatDotsFill size={24} />
                </button>
            )}

        </div>
    )
}

export default Chatbot
