import React from "react";
import './ImagePage.css';
import { PostContent } from "../app-data/types";
import { useParams } from "react-router-dom";

interface ImagePageInfo {
    className?: string;
    post?: PostContent | null;
    getPost: (id: string) => PostContent | null;
}

const ImagePage: React.FC<ImagePageInfo> = ({ className = '', post, getPost }) => {

    const { postId } = useParams();
    post = post ?? postId ? getPost(postId!) : null;

    if (post) {
        const isHorizontalImg: boolean = post.img.width >= post.img.height ? true : false;

        return (
            <div className={`${className} image-page`}>
                <div className="image-page__image-container">
                    <img className={isHorizontalImg ? 'image-page__image--horizontal' : 'image-page__image--vertical'}
                        src={post.img.link} alt={post.title} width={isHorizontalImg ? 1400 : ''} height={isHorizontalImg ? '' : 700} />
                </div>
                <h2 className="image-page__title">{post.title}</h2>
            </div>
        )
    }

    return (
        <div className={`${className} image-page`}>
            <p>Изображение не найдено</p>
        </div>
    )
}

export default ImagePage;