import useScrollReveal from '../hooks/useScrollReveal';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A full-featured online store built with React and Node.js. Includes cart functionality, user authentication, and payment processing.',
            link: '#'
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'A productivity tool for managing daily tasks and projects. Features drag-and-drop interface and real-time updates.',
            link: '#'
        },
        {
            id: 3,
            title: 'Weather Dashboard',
            description: 'Real-time weather application using OpenWeatherMap API. Displays current conditions and 5-day forecast.',
            link: '#'
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
                                <span>{project.title} Preview</span>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>
                                <div className="project-links">
                                    <a href={project.link} className="project-link">View Project &rarr;</a>
                                    <a href={project.link} className="project-link">GitHub</a>
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
