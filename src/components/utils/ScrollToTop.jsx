import React, { useEffect, useState } from 'react';
import { FaArrowUp } from "react-icons/fa6";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    }

    // Scroll to top when button is clicked
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-4 right-4">
            <div className={`transition-opacity
                duration-1000
                ease-in-out
                transform
                ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                }`}
            >

                <button
                    onClick={scrollToTop}
                    className="p-2
                    bg-primary
                    text-textWhaite
                    rounded-full
                    cursor-point
                    focus:outline-none"
                >
                    <FaArrowUp />
                </button>
            </div>
        </div>
    )
}

export default ScrollToTop