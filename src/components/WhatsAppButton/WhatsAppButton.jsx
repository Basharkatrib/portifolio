import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
    const phoneNumber = "963937662759"; // Clean number without spaces or +
    const message = encodeURIComponent("مرحباً بشار، أود التواصل معك بخصوص مشروع.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
                type: "spring", 
                stiffness: 260, 
                damping: 20,
                delay: 1 
            }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            title="تحدث معي على واتساب"
        >
            <FaWhatsapp className="whatsapp-icon" />
            <span className="sr-only">WhatsApp Chat</span>
        </motion.a>
    );
};

export default WhatsAppButton;
