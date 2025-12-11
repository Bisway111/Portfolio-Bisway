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

                <a href="mailto:singhabis190@gmail.com" className="email-button">
                    singhabis190@gmail.com
                </a>

                <div className="social-links">
                    <a href="https://github.com/Bisway111" className="social-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/bisway-singha/" className="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>

                <footer className="footer">
                    <p>&copy; {new Date().getFullYear()} Portfolio. Built with React & Vanilla CSS.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
