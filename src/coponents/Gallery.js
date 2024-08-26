import React from "react";
import Card from "./Card";
import './Gallery.css';

export default function Gallery({ images, cardClick, children }) {
    return (
        <div className="container">
            {children}
            <div className="gallery">
                <ul className="gallery__card-list">
                    {images.map(img => (
                        <li key={img.id} className="gallery__card-item">
                            <Card image={img} contentClick={cardClick} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}