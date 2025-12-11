import useScrollReveal from '../hooks/useScrollReveal';
import './Projects.css';
import euroclothLogo from '../assets/eurocloth-logo.png';
import premierLeagueLogo from '../assets/premier-league-logo.jpg';
import currencyConverterLogo from '../assets/currency-converter-logo.jpg';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'EUROCLOTH',
            description: 'A modern fully functional e-commerce website for clothing, built with HTML, CSS, JavaScript and Firebase Authentication, Firestore, Storage, and Hosting.',
            link: 'https://myeurocloth.shop',
            github: 'https://github.com/Bisway111/E-Commerce',
            image: euroclothLogo
        },
        {
            id: 2,
            title: 'Premier League',
            description: 'A scalable backend powering Premier League data — including players, teams, user accounts, and secure authentication — built with Java 21, Spring Boot, Redis, and PostgreSQL.',
            link: 'http://premierleague-backend-production.up.railway.app/swagger-ui/index.html',
            github: 'https://github.com/Bisway111/PremierLeague-Backend-Live-',
            image: premierLeagueLogo
        },
        {
            id: 3,
            title: 'Currency Converter',
            description: 'A real-time currency converter application with live exchange rates. Features a clean interface for converting between multiple currencies with up-to-date conversion rates.',
            link: 'https://currency-converter-amber-iota.vercel.app/',
            github: 'https://github.com/Bisway111/Currency-converter?tab=readme-ov-file',
            image: currencyConverterLogo
        }
    ];

    const [ref, isVisible] = useScrollReveal(0.1);

    return (
        <section id="projects" className="section" ref={ref}>
            <div className="container">
                <h2>Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            id={`project-card-${project.id}`}
                            className={`project-card ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
                            style={{ transitionDelay: `${index * 0.2}s` }}
                        >
                            <div className="project-image">
                                {project.image ? (
                                    <img src={project.image} alt={project.title} />
                                ) : (
                                    <span>{project.title} Preview</span>
                                )}
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>
                                <div className="project-links">
                                    <a href={project.link} className="project-link">View Project &rarr;</a>
                                    {project.github && <a href={project.github} className="project-link">GitHub</a>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
