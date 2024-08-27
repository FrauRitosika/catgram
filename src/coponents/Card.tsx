import React from "react";
import ButtonReaction from "./ButtonReaction";
import './Card.css';

import {PostContent} from '../app-data/types';

interface CardInfo {
    className?: string;
    // onLike: () => void;
    // onDelete: () => void;
    contentClick: (postId: string) => void;
    post: PostContent;
}

const Card: React.FC<CardInfo> = ({ post, className='', contentClick 
    // , onLike, onDelete
}) => {

    const handleClick = () => {
        contentClick(post.id);
    }

    return (
        <div className={`${className} image-card`}>
            <div className="image-card__content" onClick={handleClick}>
                <div className="image-card__image-container">
                    <img className="image-card__image" src={post.img.link} alt={post.title} />
                </div>
                <h2 className="image-card__title">{post.title}</h2>
            </div>
            <div className="image-card__reactions">
                <ButtonReaction className="image-card__button--like" 
                // onClick={onLike}
                >
                    Like
                </ButtonReaction>
                <ButtonReaction className="image-card__button--delete" 
                // onClick={onDelete}
                >
                    Like
                </ButtonReaction>
            </div>
        </div>

    );
}

export default Card;