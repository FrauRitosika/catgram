import React from "react";
import './ImageInfo.css';

export default function ImageInfo({ image, className, onClick }) {
    return (
        <div className={`${className} image-card`}>
            <div className="image-card__content" onClick={onClick}>
                <div className="image-card__image-container">
                    <img className="image-card__image" src={image.img.link} alt={image.title} />
                </div>
                <h2 className="image-card__title">{image.title}</h2>
            </div>

        </div>

    );
}