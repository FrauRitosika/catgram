import React from "react";
import Card from "./Card";
import './Gallery.css';

import {PostContent} from '../app-data/types';


interface GalleryData {
    className?: string;
    posts: PostContent[];
    cardClick: (postId: string) => void;
    children: React.ReactNode;
}

const Gallery: React.FC<GalleryData> = ({ className='', posts, cardClick, children }) => {

    return (
        <div className={`${className} container`}>
            {children}
            <div className="gallery">
                <ul className="gallery__card-list">
                    {posts.map(post => (
                        <li key={post.id} className="gallery__card-item">
                            <Card post={post} contentClick={cardClick} 
                            // onLike={} onDelete={}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Gallery