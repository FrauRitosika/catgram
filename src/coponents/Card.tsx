import React from "react";
import ButtonReaction from "./ButtonReaction";
import './Card.css';
import { PostContent } from '../app-data/types';

interface CardInfo {
    className?: string;
    contentClick: (postId: string, post: PostContent) => void;
    post: PostContent;
    onDelete: (post: PostContent) => void;
    onLike: (post: PostContent) => void;
}

const Card: React.FC<CardInfo> = ({ post, className = '', contentClick, onDelete, onLike }) => {

    const handleClick = () => {
        contentClick(post.id, post);
    }


    return (
        <div className={`${className} image-card`}>
            <div className="image-card__content" onClick={handleClick}>
                <div className="image-card__image-container">
                    <img className="image-card__image" src={post.img.link} alt={post.title} width={320} />
                </div>
                <h2 className="image-card__title">{post.title}</h2>
            </div>
            <div className="image-card__reactions">
                <ButtonReaction className="image-card__button image-card__button--delete"
                    onClick={() => onDelete(post)}
                >
                </ButtonReaction>
                <ButtonReaction className="image-card__button image-card__button--like"
                    onClick={() => onLike(post)}
                >
                </ButtonReaction>

            </div>
        </div>

    );
}

export default Card;