import useScrollReveal from '../hooks/useScrollReveal';
import './About.css';
import profileImage from '../assets/profile-image.png';

const About = () => {
    const skills = ['Java', 'JavaScript', 'Spring Boot', 'REST APIs', 'SQL', 'MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'Redis', 'HTML', 'CSS', 'Jira', 'Git'];
    const [ref, isVisible] = useScrollReveal();

    return (
        <section id="about" className="section" ref={ref}>
            <div className={`container about-content ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}>
                <div className="about-text">
                    <h2>About Me</h2>
                    <p>
                        Backend-focused Java Developer experienced in building scalable REST APIs and distributed
                        systems using Spring Boot, Redis, Firebase, and SQL/NoSQL databases. Skilled in system
                        design and performance tuning, seeking Software Engineer Entry-level roles to contribute
                        to high-performance backend platforms.
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
                    <img src={profileImage} alt="Profile" className="profile-img" />
                </div>
            </div>
        </section>
    );
};

export default About;
