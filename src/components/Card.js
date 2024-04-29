import React, { useState, useEffect } from 'react';

const MAX_IMAGES = 10;

const Card = () => {
    const [play, setPlay] = useState(true);
    const [noCount, setNoCount] = useState(0);
    const [buttonsHidden, setButtonsHidden] = useState(false);
    const [catImage, setCatImage] = useState("assets/img/cat-0.gif");
    const [yesButtonFontSize, setYesButtonFontSize] = useState(20);
    const [yesButtonWidth, setYesButtonWidth] = useState(100);
    const [yesButtonHeight, setYesButtonHeight] = useState(75);
    const [noMessage, setNoMessage] = useState("¿Quieres pololear conmigo?");
    const [heartBroken, setHeartBroken] = useState(false); // Nuevo estado para rastrear si el mensaje "Estás rompiendo mi corazón" se ha alcanzado
  
    const handleYesClick = () => {
        setNoMessage("aber dame unbeso");
        setButtonsHidden(true);
        resizeYesButton();
        changeImage("yes");
    };
  
    const handleNoClick = () => {
      if (play) {
        const newNoCount = noCount + 1;
        const imageIndex = Math.min(newNoCount, MAX_IMAGES);
        changeImage(imageIndex);
        resizeYesButton();
        setNoCount(newNoCount);
        if (newNoCount === MAX_IMAGES) {
          setPlay(false);
        }
        const message = generateMessage(newNoCount);
        setNoMessage(message);
        if (message === "Estás rompiendo mi corazón 💔") {
          setHeartBroken(true); // Cambiar el estado a true cuando el mensaje llegue a "Estás rompiendo mi corazón"
        }
      }
    };
  
    const resizeYesButton = () => {
      setYesButtonFontSize((prevSize) => prevSize * 1.3);
      setYesButtonWidth((prevWidth) => prevWidth * 1.3);
      setYesButtonHeight((prevHeight) => prevHeight * 1.3);
    };

    useEffect(() => {
      const button = document.querySelector('.btn--yes');
      if (button) {
        button.style.fontSize = `${yesButtonFontSize}px`;
        button.style.width = `${yesButtonWidth}px`;
        button.style.height = `${yesButtonHeight}px`;
      }
    }, [yesButtonFontSize, yesButtonWidth, yesButtonHeight]);
  
    const generateMessage = (noCount) => {
      const messages = [
        "No",
        "¿Estás segura? 🌷🌷",
        "¿Realmente segura? 🥺",
        "Por favor 🙏",
        "Te invitaré una pizza 🍕",
        "Entonces una torta de chocolate 🍫",
        "Veremos películas 🎥",
        "Iremos a la playa 🏖️",
        "Jugaremos videojuegos juntos 👾",
        "¡Voy a llorar...! 😭",
        "Estás rompiendo mi corazón 💔",
      ];
  
      const messageIndex = Math.min(noCount, messages.length - 1);
      return messages[messageIndex];
    };
  
    const changeImage = (image) => {
      setCatImage(`assets/img/cat-${image}.jpg`);
    };
    
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <img className="cat-img w-96 h-96 mb-8" src={catImage} alt="Gato jugando con una bola de estambre" />
        <p className="title text-4xl text-gray-900 mb-8" style={{ fontFamily: 'Outfit', fontWeight: 900 }}>{noMessage}</p>
        <div className={buttonsHidden ? "hidden" : "buttons"}>
          {heartBroken ? ( // Mostrar dos botones "Sí" si el corazón está roto
            <>
              <button type="button" className={"btn btn--yes px-" + yesButtonWidth + "px py-" + yesButtonHeight + "px text-xl font-semibold rounded-lg bg-green-500 text-white mr-4"} onClick={handleYesClick} style={{ fontFamily: 'Outfit' }}>SI</button>
              <button type="button" className="btn btn--yes px-10 py-6 text-xl font-semibold rounded-lg bg-green-500 text-white mr-4" onClick={handleYesClick} style={{ fontFamily: 'Outfit' }}>SI x2</button>
            </>
          ) : ( // Mostrar solo un botón "Sí" si el corazón no está roto
            <button type="button" className={"btn btn--yes px-" + yesButtonWidth + "px py-" + yesButtonHeight + "px text-xl font-semibold rounded-lg bg-green-500 text-white mr-4"} onClick={handleYesClick} style={{ fontFamily: 'Outfit' }}>SI</button>
          )}
          {heartBroken ?(
            <button type="button" className={"hidden btn btn--no px-10 py-6 text-xl font-semibold rounded-lg bg-red-500 text-white"} onClick={handleNoClick} style={{ fontFamily: 'Outfit' }}>NO</button>
          ) : (
            <button type="button" className="btn btn--no px-10 py-6 text-xl font-semibold rounded-lg bg-red-500 text-white" onClick={handleNoClick} style={{ fontFamily: 'Outfit' }}>NO</button>
          )}
          </div>
      </main>
    );
  };
  
  export default Card;
