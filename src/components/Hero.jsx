import { useState, useEffect } from 'react';
import Avatar from './Avatar';
import ParticleBackground from './ParticleBackground';
import './Hero.css';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = 'Backend Java Developer';
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;
            if (index > fullText.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleButtonMove = (e) => {
        const btn = e.currentTarget;
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    };

    const handleButtonLeave = (e) => {
        e.currentTarget.style.transform = 'translate(0, 0)';
    };

    return (
        <section id="hero" className="hero-section">
            <ParticleBackground />
            <div
                className="hero-bg-circle circle-1"
                style={{ transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)` }}
            ></div>
            <div
                className="hero-bg-circle circle-2"
                style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
            ></div>

            <div className="container hero-content">
                <div className="hero-grid">
                    <div className="hero-text-area">
                        <h1 className="hero-title">{text}<span className="cursor">|</span></h1>
                        <p className="hero-subtitle">
                            Building scalable REST APIs and distributed systems with Spring Boot.
                        </p>
                        <a
                            href="#projects"
                            className="cta-button"
                            onMouseMove={handleButtonMove}
                            onMouseLeave={handleButtonLeave}
                        >
                            View My Work
                        </a>
                    </div>
                    <div className="hero-avatar-area">
                        <Avatar />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
