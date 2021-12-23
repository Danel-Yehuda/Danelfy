import React, { Component }  from 'react';
import {Container} from '@material-ui/core'
import Header from './components/Header/Header';
import OGMP from './components/OnGoingMusicPlayer/OGMP';

function App() {
  return (
    <Container>
      <Header/>
      <OGMP/>
    </Container>
  );
}

export default App;
