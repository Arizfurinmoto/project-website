import { useState } from 'react';
import '../styles/cookies.css'

const Cookies = ({lang}) => {

    const [klasa, setKlasa] = useState("cookies")
  
    const siema = () => {
        setKlasa("cookies-close")
    }

  return (
    <div className={klasa}>
        <p>{lang === "English" ? "This website does not use cookies." : lang === "Espanol" ? "Este sitio web no utiliza cookies." : "Ta strona nie korzysta z plików cookies."}</p>
        <button onClick={siema}>{lang === "English" ? "OK" : lang === "Espanol" ? "Veo" : "Rozumiem"}</button>
      </div>
    );
}

export default Cookies;