import Contacts from '../contacts/Contacts';
import MainPart from '../mainPart/MainPart';
import SocialMedia from '../socialMedia/SocialMedia';
import './App.css';
import React from 'react';

function App() {
  return (
    <main>
      <MainPart />
      <Contacts />
      <SocialMedia />
    </main>
  );
}

export default App;
