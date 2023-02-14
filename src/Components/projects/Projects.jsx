import React from 'react';
import "../projects/projects.css";
import IMG1 from '../../Assets/demo_1.png'
import IMG2 from '../../Assets/demo_2.png'
import IMG3 from '../../Assets/demo_3.png'
import IMG4 from '../../Assets/demo_4.png'
import IMG5 from '../../Assets/demo_5.png'
import IMG6 from '../../Assets/demo_6.png'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'App Clima 2023',
        github: 'https://github.com/KevNic96/App---Clima-2023',
        demo: 'https://dashing-alpaca-402851.netlify.app/'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Quiz-App',
        github: 'https://github.com/KevNic96/Quiz-App',
        demo:'https://storied-piroshki-43fff6.netlify.app/'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Responsive Web Design',
        github: 'https://github.com/KevNic96/Peugeot-Responsive-Web-Design',
        demo: 'https://peugeot-web-design.netlify.app/'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Reloj Digital',
        github: 'https://github.com/KevNic96/Reloj-Digital',
        demo: 'https://meek-melba-4f1292.netlify.app/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Star Wars API',
        github: 'https://github.com/KevNic96/Star-Wars-API',
        demo: 'https://cute-kringle-d44e1c.netlify.app'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Calculadora ReactJS',
        github: 'https://github.com/KevNic96/React-Calculadora',
        demo: 'https://reactcalculadora-kevf.netlify.app/'
    }
    
    // Para agregar proyectos hacer lo mismo para cada link
]

const Projects = () => {
  return (
    <section className="projects__section" id='project'>
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Mis trabajos recientes:</span>

        <div className="projects__container grid">
            {
                data.map(({id, image, title, github, demo})=>{
                    return (
                        <article key={id} className='portfolio__item'>
                            <div className="portfolio__item-image">
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a href={github} className='btn' target='_blank' rel='noreferrer'>GitHub</a>
                                <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
                            </div>
                        </article>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Projects
