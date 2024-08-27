import React from "react";
import './ImagePage.css';
import { PostContent } from "../app-data/types";
import { useParams } from "react-router-dom";

interface ImagePageInfo {
    className?: string;
}

const ImagePage: React.FC<ImagePageInfo> = ({ className = ''}) => {

    const {postId} = useParams();

    return (
        <h2>{`Hi ${postId}`}</h2>
    )

    //Получаем пост с картинкой из стореджа -> делаем гет по http -> редеректим на главную 

    // const isHorizontalImg: boolean = post.img.width >= post.img.height ? true : false;

    // return (
    //     <div className={`${className} image-page`}>
    //         <div className="image-page__image-container">
    //             <img className={isHorizontalImg ? 'image-page__image--horizontal' : 'image-page__image--vertical'}
    //                 src={post.img.link} alt={post.title} />
    //         </div>
    //         <h2 className="image-page__title">{post.title}</h2>
    //     </div>

    // );
}

export default ImagePage;