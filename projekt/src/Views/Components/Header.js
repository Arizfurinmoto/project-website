import '../styles/header.css'

const Header = ({logos, chooseLanguage}) => {
  const [logo, pl, gb, es, language] = logos
  let pol = 'Polski';
  let eng = 'English';
  let esp = 'Espanol';

  const [titlePL, titleENG, titleES] = ["Projekt - Programowanie w Internecie. SGGW 2023.", "Project - Programming on the Internet. SGGW 2023.", "Proyecto - Programación en Internet. SGGW 2023."]
  
  return (
    <div>
      <div className='header'>
        <img className='logo' src={logo} alt="logo"/>
        <h1>{language === 'English' ? titleENG : language === 'Espanol' ? titleES : titlePL}</h1>
        <div>
          <img onClick={() => chooseLanguage(pol)} className='flag' src={pl} alt="pl"/>
          <img onClick={() => chooseLanguage(eng)} className='flag' src={gb} alt="gb"/>
          <img onClick={() => chooseLanguage(esp)} className='flag' src={es} alt="es"/>
        </div>
      </div>

      <div className='header2'>
        <img className='logo' src={logo} alt="logo"/>
        <div>
          <img onClick={() => chooseLanguage(pol)} className='flag' src={pl} alt="pl"/>
          <img onClick={() => chooseLanguage(eng)} className='flag' src={gb} alt="gb"/>
          <img onClick={() => chooseLanguage(esp)} className='flag' src={es} alt="es"/>
        </div>
      </div>
    </div>
    );
}

export default Header;