import React from "react";
import Button from "./ButtonReaction";
import './Card.css';

export default function Card({ image, onLike, onDelete, className, contentClick }) {

    const handleClick = () => {
        contentClick(image);
    }

    return (
        <div className={`${className} image-card`}>
            <div className="image-card__content" onClick={handleClick}>
                <div className="image-card__image-container">
                    <img className="image-card__image" src={image.img.link} alt={image.title} />
                </div>
                <h2 className="image-card__title">{image.title}</h2>
            </div>
            <div className="image-card__reactions">
                <Button className="image-card__button--like" onClick={onLike}>
                    Like
                </Button>
                <Button className="image-card__button--delete" onClick={onDelete}>
                    Like
                </Button>
            </div>
        </div>

    );
}