import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class='bx bx-message-rounded about__icon'></i>
            <h3 className="about__title">Muy buena</h3>
            <span className="about__subtitle">comunicación</span>

        </div>

        <div className="about__box">
            <i class='bx bx-group about__icon'></i>
            <h3 className="about__title">Trabajo</h3>
            <span className="about__subtitle">en equipo</span>
            
        </div>

        <div className="about__box">
            <i class='bx bx-grid-horizontal about__icon'></i>
            <h3 className="about__title">Organización</h3>
            <span className="about__subtitle">exhaustiva</span>
            
        </div>

        <div className="about__box">
            <i class='bx bx-message-rounded-add about__icon'></i>
            <h3 className="about__title">Actitud</h3>
            <span className="about__subtitle">positiva</span>
            
        </div>

        <div className="about__box">
            <i class='bx bx-book'></i>
            <h3 className="about__title">Aprendizaje</h3>
            <span className="about__subtitle">rápido</span>
            
        </div>

        <div className="about__box">
            <i class='bx bxs-network-chart' ></i>
            <h3 className="about__title">Resolución</h3>
            <span className="about__subtitle">problemas</span>
            
        </div>


    </div>
  )
}

export default Info