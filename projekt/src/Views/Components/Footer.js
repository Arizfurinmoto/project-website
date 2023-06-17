import '../styles/footer.css'

const Footer = ({lang}) => {

  return (
      <div className='footer'>
        <p>{lang === 'English' ? "Created by Szymon Godoń" : lang === 'Espanol' ? "Creado por Szymon Godoń" : "Stworzone przez Szymona Godonia"}</p>
      </div>

    );
}

export default Footer;