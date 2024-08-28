import React, { useState } from "react";
import Card from "./Card";
import Filter from "./Filter";
import './Gallery.css';
import { PostContent } from '../app-data/types';


interface GalleryData {
    className?: string;
    loadGallery: () => PostContent[];
    cardClick: (postId: string, post?: PostContent) => void;
    children: React.ReactNode;
    changePost: (post: PostContent) => void;
}

const Gallery: React.FC<GalleryData> = ({ className = '', loadGallery, cardClick, children, changePost }) => {

    const gallery = loadGallery();

    const [filter, setFilter] = useState<string>('NONE');
    const [postList, setPostList] = useState<Array<PostContent>>(gallery);
    const [likedPostList, setLikedPostList] = useState<Array<PostContent>>(chooseLikedPostList(gallery));

    function chooseLikedPostList(gallery: Array<PostContent>): Array<PostContent> {
        return gallery.filter((post: PostContent) => post.isLiked === true);
    }

    function onDelete(post: PostContent) {
        post.isDeleted = true;
        changePost(post);
        const newList = postList.filter((item: PostContent) => item.id !== post.id);
        setPostList(newList);
        setLikedPostList(chooseLikedPostList(newList));
    }

    function onLike(post: PostContent) {
        post.isLiked = true;
        changePost(post);
        likedPostList.push(post);
        setLikedPostList(likedPostList);
    }

    function getFiltredGallery(): Array<PostContent> {
        switch (filter) {
            case 'LIKED': return likedPostList;
            default: return postList;
        }
    }

    function changeFilter(filter: string) {
        setFilter(filter);
    }



    return (
        <div className={`${className} container`}>
            {children}
            <div className="gallery">
                <div className="gallery__filter-bar">
                    <Filter onClick={changeFilter} filterName='LIKED' >LIKED</Filter>
                </div>
                <ul className="gallery__card-list">
                    {getFiltredGallery().map(post => (
                        <li key={post.id} className="gallery__card-item">
                            <Card post={post} contentClick={cardClick} onDelete={onDelete} onLike={onLike}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Gallery