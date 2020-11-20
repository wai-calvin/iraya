import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Slideshow = () => {

    const [images] = useState([
        {
            name: "Iraya",
            image: "./assets/1.jpg",
            id: uuidv4(),
            active: true,
        },
        {
            name: "Iraya",
            image: "./assets/2.jpg",
            id: uuidv4(),
            active: false,
        },
        {
            name: "Iraya",
            image: "./assets/3.jpg",
            id: uuidv4(),
            active: false,
        },
        {
            name: "Iraya",
            image: "./assets/4.jpg",
            id: uuidv4(),
            active: false,
        },
        {
            name: "Iraya",
            image: "./assets/5.jpg",
            id: uuidv4(),
            active: false,
        },
        {
            name: "Iraya",
            image: "./assets/6.jpg",
            id: uuidv4(),
            active: false,
        }
    ]);

    //set defaults
    const [currentPosition, setCurrentPosition] = useState(0); //initial slide
    const currentImage = images[currentPosition]; //variable index value we can ref later

    // const arrowRightClick = () => {
    //     currentPosition !== images.length - 1 ? //check index length
    //     setCurrentPosition(currentPosition+1) : setCurrentPosition(currentPosition = 0);
    //     currentImage = images[currentPosition];
    // };

    // const arrowLeftClick = () => {
    //     currentPosition !== 0 ? //check index length
    //     setCurrentPosition(currentPosition-1) : setCurrentPosition(currentImage = images.length - 1);
    //     currentImage = images[currentPosition];
    // };

    return(
        <div className="carousel-block">
            <div className="flex-container">
                <div id="slider">
                    <div className="slide">
                        <img src={currentImage.image} alt={currentImage.name} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slideshow;
