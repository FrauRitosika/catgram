import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Gallery from './coponents/Gallery';
import ImagePage from './coponents/ImagePage';
import Header from './coponents/Header';
import Footer from './coponents/Footer';
import { PostContent } from './app-data/types';
import './App.css';
import { changePost } from './app-data/data-api';

interface DataApp {
    loadGallery: () => PostContent[];
    changePost: (post: PostContent) => void;
    getPost: (id: string) => PostContent | null;
}

const App: React.FC<DataApp> = ({ loadGallery, changePost, getPost }) => {

    const navigate = useNavigate();
    const [post, openPost] = useState<PostContent>();
    const handleOpenPage = (postId: string, post?: PostContent) => {
        navigate(`/image/${postId}`);
        if (post) { openPost(post) };
    };

    return (
        <div className='app'>
            <Header className='app__header' />
            <main className='app__main'>
                <h1>Фотогалерея</h1>
                <div className='app__content-container'>
                    <Routes>
                        <Route path='/image/:postId' element={
                            <ImagePage post={post} getPost={getPost} />
                        } />
                        <Route path='/' element={
                            <Gallery loadGallery={loadGallery} cardClick={handleOpenPage} changePost={changePost} >
                                <h2>Котики</h2>
                            </Gallery>
                        } />
                    </Routes>
                </div>
            </main>
            <Footer className='app__footer' />
        </div>
    );

};

export default App;