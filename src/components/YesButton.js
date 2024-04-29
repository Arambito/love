import React, { useState } from 'react';

import './../App.css'; // Asegúrate de importar el archivo CSS aquí

const YesButton = () => {
  // Estado para controlar si se ha hecho clic en el botón
  const [liked, setLiked] = useState(false);

  // Función para manejar el clic en el botón
  const handleLikeClick = () => {
    // Cambiar el estado de liked al contrario de su valor actual
    setLiked(!liked);
    // Alternar la clase 'liked' en el cuerpo del documento
    document.body.classList.toggle('liked');
  };

  // Estilo del texto inicial (antes del clic)

  return (
    <>
    <button>
      {/* Elementos HTML y SVG */}
      <svg height="320" width="320" className="like" onClick={handleLikeClick}>
        <path className="path" d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90" fill="white"></path>
      </svg>
      {/* Decoraciones */}
      <div className="dot dot-1"></div>
      <div className="dot dot-2"></div>
      <div className="dot dot-3"></div>
      <div className="dot dot-4"></div>
      <div className="dot dot-5"></div>
      <div className="dot dot-6"></div>
      <div className="dot dot-7"></div>
      <div className="dot dot-8"></div>
      {/* SVGs */}
      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
        <svg key={num} height="40" width="40" viewBox="0 0 320 320" className={`h h-${num}`}>
          <path className="path" d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"></path>
        </svg>
      ))}
      {/* Fly SVGs */}
      <svg height="110" width="110" viewBox="0 0 320 320" className="fly fly-1">
        <path className="path" d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"></path>
      </svg>
      <svg height="110" width="110" viewBox="0 0 320 320" className="fly fly-2">
        <path className="path" d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"></path>
      </svg>
      </button>
    </>
  );
}

export default YesButton;
