import React, { useEffect, useState } from 'react'

const TypingTextAnimation = () => {
    const texts = ["Frontend Developer", "React.js Enthusiast", "UI/UX Designer", "JavaScript Lover", "Web Creator"]; // Ensure this array is always defined
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const typingSpeed = 150;
    const deletingSpeed = 75;
    const delayBetweenWords = 1000;

    useEffect(() => {
        if (!texts || texts.length === 0) return; // Safeguard against undefined or empty texts array

        let typingInterval;

        if (!isDeleting && displayedText === texts[currentTextIndex]) {
            typingInterval = setTimeout(() => setIsDeleting(true), delayBetweenWords);
        } else if (isDeleting && displayedText === "") {
            setIsDeleting(false);
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        } else {
            const updateText = () => {
                setDisplayedText((prev) =>
                    isDeleting
                        ? texts[currentTextIndex]?.substring(0, prev.length - 1) || "" // Safe access using optional chaining
                    : texts[currentTextIndex]?.substring(0, prev.length + 1) || "" // Safe access using optional chaining
                );
            };

            typingInterval = setTimeout(
                updateText,
                isDeleting ? deletingSpeed : typingSpeed
            );
        }

        return () => clearTimeout(typingInterval);
    }, [displayedText, isDeleting, currentTextIndex, texts]);

    return <h2>{displayedText}</h2>
}

export default TypingTextAnimation