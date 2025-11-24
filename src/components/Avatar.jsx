import { useState, useEffect, useRef } from 'react';
import './Avatar.css';

const Avatar = () => {
    const [isBlinking, setIsBlinking] = useState(false);
    const [eyePos, setEyePos] = useState({ x: 0, y: 0 });
    const faceRef = useRef(null);

    // Blinking logic
    useEffect(() => {
        const blinkLoop = () => {
            setIsBlinking(true);
            setTimeout(() => setIsBlinking(false), 150);

            // Random blink interval between 2s and 6s
            const nextBlink = Math.random() * 4000 + 2000;
            setTimeout(blinkLoop, nextBlink);
        };

        const timeoutId = setTimeout(blinkLoop, 3000);
        return () => clearTimeout(timeoutId);
    }, []);

    // Eye tracking logic
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!faceRef.current) return;

            const rect = faceRef.current.getBoundingClientRect();
            const faceCenterX = rect.left + rect.width / 2;
            const faceCenterY = rect.top + rect.height / 2;

            // Calculate angle and distance
            const deltaX = e.clientX - faceCenterX;
            const deltaY = e.clientY - faceCenterY;

            // Limit eye movement range
            const maxMove = 10;
            const angle = Math.atan2(deltaY, deltaX);
            const distance = Math.min(Math.sqrt(deltaX * deltaX + deltaY * deltaY), 100); // 100 is interaction radius factor
            const moveFactor = (distance / 100) * maxMove;

            setEyePos({
                x: Math.cos(angle) * moveFactor,
                y: Math.sin(angle) * moveFactor
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className={`avatar-container ${isBlinking ? 'blink' : ''}`}>
            <div className="avatar-head">
                <div className="avatar-antenna"></div>
                <div className="avatar-face" ref={faceRef}>
                    <div
                        className="avatar-eye left"
                        style={{ transform: `translate(${eyePos.x}px, ${eyePos.y}px)` }}
                    ></div>
                    <div
                        className="avatar-eye right"
                        style={{ transform: `translate(${eyePos.x}px, ${eyePos.y}px)` }}
                    ></div>
                </div>
                <div className="avatar-neck"></div>
                <div className="avatar-body"></div>
            </div>
        </div>
    );
};

export default Avatar;
