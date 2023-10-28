import React from 'react'
import './contactCard.css'


/*function Card({title, imagen, texto, url,text}) {
  return (
    <div className='card-container'>
        <div className='image-container'>
            <img src={imagen} className='card-img-top' alt=''/>
        </div>
        <div className='card-content'>
        <div className='card-title'>
            <h4>{title}</h4>
        </div>
        <div className='card-body'>
            <p>{texto}</p>
        </div>
        <div className='btn'>
          <button>
            <a href= {url} >Reserva tu cita</a>
            </button>
        </div>
        </div>
    </div>
  )
}
export default Card;*/


function Card({ image, name, title, email,url, text}) {
  return (
    <div className="card">
      <img src={image} alt={name} className="imagen" />
      <div className="card-content">
      
        <h2 className="card-name">{name}</h2>
        <p className="card-title">{title}</p>
        <p className="card-text">{text}</p>
        <p className="card-email">{email}</p>
        <button className="card-button">
          <a href={url}>
          Agendar Cita
          </a>
          </button>
      </div>
    </div>
  );
}

export default Card;
