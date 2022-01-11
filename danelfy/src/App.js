import React, { Component }  from 'react';
import {Container} from '@material-ui/core'
import Header from './components/Header/Header';
import OGMP from './components/OnGoingMusicPlayer/OGMP';
import { Routes, Route} from 'react-router-dom'
import Auth from './components/Auth/Auth';
import Content from './components/Content/Content'

function App() {
  return (
    <Container maxWidth="lg">
      <Header/>
      <Routes>
        <Route path="/auth" exact element={<Auth/>}/>
        <Route path="/" exact element={<Content/>}/>
      </Routes>
      <OGMP/>
    </Container>
  );
}

export default App;
