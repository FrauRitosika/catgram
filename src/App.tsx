import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Gallery from './coponents/Gallery';
import ImagePage from './coponents/ImagePage';
import Header from './coponents/Header';
import Footer from './coponents/Footer';
import { PostContent } from './app-data/types';
import './App.css';

interface DataApp {
    cards: PostContent[];
}

const App: React.FC<DataApp> = ({ cards }) => {

    const navigate = useNavigate();
    const handleOpenPage = (postId: string) => {
        navigate(`/image/${postId}`);
    };

    return (
        <div className='app'>
            <Header className='app__header' />
            <main className='app__main'>
                <h1>Фотогалерея</h1>
                <div className='app__content-container'>
                    <Routes>
                        <Route path='/image/:postId' element={
                            <ImagePage />
                        } />
                        <Route path='/' element={
                            <Gallery posts={cards} cardClick={handleOpenPage}>
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