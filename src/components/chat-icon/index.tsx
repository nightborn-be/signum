import './style.scss';
import React from 'react';
import { motion } from 'framer-motion';
import ChatIconImage from './assets/chat_icon.svg';
import ChatIconClosedImage from './assets/chat_icon_close.svg';
import { useChat } from '../chat-context/ChatContext';

export default function ChatIcon() {

    // Attributes
    const { isOpen, closeChat, openChat, config } = useChat();

    // Methods
    function getImage() {
        if (isOpen) {
            return ChatIconClosedImage;
        }
        return ChatIconImage;
    }

    function getImageClass() {
        if (isOpen) {
            return "chat-button-image-close";
        }
        return "chat-button-image";
    }

    // Render
    return (
        <motion.div initial={{ y: 100 }} animate={{ y: 0, transition: { delay: 1.5 } }} onClick={() => isOpen ? closeChat() : openChat()} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={`chat-button${isOpen ? "-active" : ""}`} style={{ background: config.secondaryColor }}>
            <img src={getImage()} className={getImageClass()} />
        </motion.div>
    )
}