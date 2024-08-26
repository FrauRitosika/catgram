import React, { useState } from 'react';
import Gallery from './coponents/Gallery';
import ImageInfo from './coponents/ImageInfo';

export default function App({ images }) {

    const [openedImage, openImage] = useState(null);

    const handleOpenPage = (img) => {
        openImage(img);
    };

    return (
        <div className='app'>
            <h1>Фотогалерея</h1>
            {openedImage
                ? (<ImageInfo image={openedImage}></ImageInfo>)
                : (<Gallery images={images} cardClick={handleOpenPage}><h2>Котики</h2></Gallery>)
            }
        </div>
    );

}