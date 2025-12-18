import React from "react";

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/919867889580"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed top-1/2 right-0 -translate-y-1/2 z-50"
        >
            <div className="w-12 h-12 right-0 bg-white rounded-xl shadow-xl flex items-center justify-center hover:scale-110 transition-transform">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    className="w-8 h-8"
                />
            </div>
        </a>
    );
};

export default WhatsAppButton;
