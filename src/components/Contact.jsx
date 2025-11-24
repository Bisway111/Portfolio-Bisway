import useScrollReveal from '../hooks/useScrollReveal';
import './Contact.css';

const Contact = () => {
    const [ref, isVisible] = useScrollReveal();

    return (
        <section id="contact" className="section contact-section" ref={ref}>
            <div className={`container contact-content ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}>
                <h2>Get In Touch</h2>
                <p className="contact-text">
                    I'm currently open to new opportunities and collaborations.
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <a href="mailto:hello@example.com" className="email-button">
                    hello@example.com
                </a>

                <div className="social-links">
                    <a href="#" className="social-link">GitHub</a>
                    <a href="#" className="social-link">LinkedIn</a>
                    <a href="#" className="social-link">Twitter</a>
                </div>

                <footer className="footer">
                    <p>&copy; {new Date().getFullYear()} Portfolio. Built with React & Vanilla CSS.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
