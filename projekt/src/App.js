import { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

import './Views/styles/App.css';

import logo from "./images/logo.png"
import pl from './images/pl.svg'
import gb from './images/gb.svg'
import es from './images/es.svg'

import Header from './Views/Components/Header';
import Cookies from './Views/Components/Cookies';
import Players from './Views/Components/players';
import Footer from './Views/Components/Footer';

import dataPL from './Data/dataPL';
import dataENG from './Data/dataENG';
import dataES from './Data/dataES';


function App() {
  
  const [selectedTeam, setSelectedTeam] = useState("Górnik Sokołów")

  const previousTeam = () => {
    if(selectedTeam==="Górnik Sokołów") setSelectedTeam("Wisła Polanów")
    else if(selectedTeam==="Wisła Polanów") setSelectedTeam("Lechia Olsztyn")
    else setSelectedTeam("Górnik Sokołów")
  }

  const nextTeam = () => {
    if(selectedTeam==="Górnik Sokołów") setSelectedTeam("Lechia Olsztyn")
    else if(selectedTeam==="Wisła Polanów") setSelectedTeam("Górnik Sokołów")
    else setSelectedTeam("Wisła Polanów")
  }

  const [language, setlanguage] = useState("Język");
  const chooseLanguage = (lang) => {
    setlanguage(lang);
  };

  const [titlePL, titleENG, titleES] = ["Przegląd piłkarzy różnych drużyn", "Review of players from different teams.", "Revisión de jugadores de diferentes equipos"]

  return (
    <div className='App'>
      <h1 className='title'>{language === 'English' ? titleENG : language === 'Espanol' ? titleES : titlePL}</h1>
      <Header chooseLanguage={chooseLanguage} logos={[logo, pl, gb, es, language]}/>
      <div className='selectionContainer'>
        <FaArrowCircleLeft className='changeIcon' onClick={previousTeam}/>
        <h1>{selectedTeam}</h1>
        <FaArrowCircleRight className='changeIcon' onClick={nextTeam}/>
      </div>
      <Players players = {language === 'English' ? dataENG : language === 'Espanol' ? dataES : dataPL} team = {selectedTeam}/>
      <Footer lang = {language} />
      <Cookies lang = {language} />
    </div> 
  );
}

export default App;
