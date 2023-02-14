import React from 'react';
import '../technologies/technologies.css'
import html from "../../Assets/html_logo.png";
import css from "../../Assets/css_logo.png";
import javascript from "../../Assets/js_logo2.png";
import reactImg from "../../Assets/react_logo.png";
import nodejs from "../../Assets/node_js.png";
import python from "../../Assets/python_logo.png";
import bootstrap from "../../Assets/bootstrap_logo.png";
import github from "../../Assets/github.png";
import api from "../../Assets/API_logo.png"

const Technologies = () => {

  return (
    <section className="technologies section" id='tech'>
      <h2 className="section__title">Tecnologías</h2>
        <span className="section__subtitle">Estas son las tecnologías con las que trabajo:</span>

        <div className="technologies__container grid">

          <div className="technology__box html">
            <img src={html} className="tech__icon" alt="" />
            <h3>HTML</h3>
            <h4>Avanzado</h4>
          </div>

          <div className="technology__box css">
            <img src={css} className="tech__icon" alt="" />
            <h3>CSS</h3>
            <h4>Avanzado</h4>
          </div>

          <div className="technology__box js">
            <img src={javascript} className="tech__icon" alt="" />
            <h3>JavaScript</h3>
            <h4>Intermedio</h4>
          </div>

          <div className="technology__box reactjs">
            <img src={reactImg} className="tech__icon" alt="" />
            <h3>ReactJS</h3>
            <h4>Intermedio</h4>
          </div>

          <div className="technology__box nodejs">
            <img src={nodejs} className="tech__icon" alt="" />
            <h3>Node JS</h3>
            <h4>Intermedio</h4>
          </div>

          <div className="technology__box python">
            <img src={python} className="tech__icon" alt="" />
            <h3>Python</h3>
            <h4>Principiante</h4>
          </div>

          <div className="technology__box github">
            <img src={api} className="tech__icon" alt="" />
            <h3>API</h3>
            <h4>Intermedio</h4>
          </div>

          <div className="technology__box boots">
            <img src={bootstrap} className="tech__icon" alt="" />
            <h3>Bootstrap</h3>
          </div>

          <div className="technology__box github">
            <img src={github} className="tech__icon" alt="" />
            <h3>GitHub</h3>
          </div>


        </div>


    </section>
  )
}

export default Technologies
