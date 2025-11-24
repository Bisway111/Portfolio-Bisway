import useScrollReveal from '../hooks/useScrollReveal';
import './About.css';

const About = () => {
    const skills = ['React', 'JavaScript', 'CSS/SCSS', 'Node.js', 'UI/UX Design', 'Git'];
    const [ref, isVisible] = useScrollReveal();

    return (
        <section id="about" className="section" ref={ref}>
            <div className={`container about-content ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}>
                <div className="about-text">
                    <h2>About Me</h2>
                    <p>
                        I'm a passionate developer with a keen eye for design. I specialize in building
                        modern web applications that are not only functional but also visually appealing.
                    </p>
                    <p>
                        With a background in both design and engineering, I bridge the gap between
                        aesthetics and performance.
                    </p>

                    <div className="skills-container">
                        <h3 className="skills-title">Tech Stack</h3>
                        <div className="skills-grid">
                            {skills.map((skill) => (
                                <span key={skill} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="about-image">
                    <div className="about-img-placeholder">
                        <span>Profile Image</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
