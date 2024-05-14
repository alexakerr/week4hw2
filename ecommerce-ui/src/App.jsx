import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css'; 
import MoviesList from './components/moviesList';
import UserProfile from './components/userProfile';



function App(){
  return (
    <div className="app-container">
      <Routes>
        {}
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<MoviesListList /> } /> 
        <Route path='/add-movie' element={<MoviesList />} />
        <Route path='/edit-movie/:id' element={<MoviesList />} />
        {}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}


export default App

