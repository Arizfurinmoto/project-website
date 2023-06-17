import '../styles/player.css'

const Player = (people) =>{
    const {name, age, goals, assists, matches, mvp, role, text, image, lang} = people;
    
    return (
        <section>
            <article className="player">
                <img src={image} alt={name}/>
                <div className='column'>
                    <h1>{name}</h1>
                    <p>{text}</p>
                    <table cellPadding="0" cellSpacing="0">
                        <tbody>
                            <tr>
                                <th>{lang==="English" ? "Position" : lang==="Espanol" ? "Posición" : "Pozycja"}</th>
                                <th>{lang==="English" ? "Age" : lang==="Espanol" ? "Edad" : "Wiek"}</th>
                                <th>{lang==="English" ? "Matches played" : lang==="Espanol" ? "Partidos jugados" : "Rozegrane mecze"}</th>
                                <th>{lang==="English" ? "Goals" : lang==="Espanol" ? "Objetivos" : "Gole"}</th>
                                <th>{lang==="English" ? "Assists" : lang==="Espanol" ? "Ayuda" : "Asysty"}</th>
                                <th>MVP</th>
                            </tr>
                            <tr>
                                <td>{role}</td>
                                <td>{age}</td>
                                <td>{matches}</td>
                                <td>{goals}</td>
                                <td>{assists}</td>
                                <td>{mvp}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </article>
            <article className="player2">
                <h1>{name}</h1>
                <div className='description-row'>
                    <img src={image} alt={name}/>
                    <p>{text}</p>
                </div>
                <div className='column'>
                    <table cellPadding="0" cellSpacing="0">
                        <tbody>
                            <tr>
                                <th>{lang==="English" ? "Position" : lang==="Espanol" ? "Posición" : "Pozycja"}</th>
                                <th>{lang==="English" ? "Age" : lang==="Espanol" ? "Edad" : "Wiek"}</th>
                                <th>{lang==="English" ? "Matches played" : lang==="Espanol" ? "Partidos jugados" : "Rozegrane mecze"}</th>
                                <th>{lang==="English" ? "Goals" : lang==="Espanol" ? "Objetivos" : "Gole"}</th>
                                <th>{lang==="English" ? "Assists" : lang==="Espanol" ? "Ayuda" : "Asysty"}</th>
                                <th>MVP</th>
                            </tr>
                            <tr>
                                <td>{role}</td>
                                <td>{age}</td>
                                <td>{matches}</td>
                                <td>{goals}</td>
                                <td>{assists}</td>
                                <td>{mvp}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='column2'>
                    <table cellPadding="0" cellSpacing="0">
                        <tbody>
                            <tr>
                                <th>{lang==="English" ? "Position" : lang==="Espanol" ? "Posición" : "Pozycja"}</th>
                                <th>{lang==="English" ? "Age" : lang==="Espanol" ? "Edad" : "Wiek"}</th>
                                <th>{lang==="English" ? "Matches played" : lang==="Espanol" ? "Partidos jugados" : "Rozegrane mecze"}</th>
                            </tr>
                            <tr>
                                <td>{role}</td>
                                <td>{age}</td>
                                <td>{matches}</td>
                            </tr>
                            <tr>
                                <th>{lang==="English" ? "Goals" : lang==="Espanol" ? "Objetivos" : "Gole"}</th>
                                <th>{lang==="English" ? "Assists" : lang==="Espanol" ? "Ayuda" : "Asysty"}</th>
                                <th>MVP</th>
                            </tr>
                            <tr>
                                <td>{goals}</td>
                                <td>{assists}</td>
                                <td>{mvp}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </article>
        </section>
    );
}

export default Player;
