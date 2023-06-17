import Player from "./player";

const Players = ({players, team}) =>{
    return (
        <div className="playersContainer">
            {players.map((player)=>{
                if(player.team === team){
                    return <Player key = {player.id} {...player}/>
                }
                else{
                    return null
                }
            })}
        </div>
    );
}

export default Players;