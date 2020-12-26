import React from 'react'
import { useState, useEffect } from 'react';
import Marine from './img/Marine.jpg';
import RV from './img/RV.jpg';
import Nath from './img/Nath.jpg';
import Cricri from './img/Cricri.jpg';
import JP from './img/JP.jpg';
import Axel from './img/Axel.jpg';
import Aude from './img/Aude.jpg';
import Aymeric from './img/Aymeric.jpg';

const players = ['RV', 'Nath', 'Cricri', 'JP', 'Axel', 'Marine', 'Aude', 'Aymeric']
const teamIndexes = [0,0,1,1,2,2,3,3].sort(() => Math.random() - 0.5);
var playersWithVisibility = players.map((e) => [e, true]);

const teams = teamIndexes.reduce(
    (teams, teamIndex, playerIndex) => {
        teams[teamIndex].push(playersWithVisibility[playerIndex]);
        return teams
        }
    ,[[],[],[],[]]) 

const GenerateTeams = (props: any) => {
    const [remainingPlayers, setRemainingPlayers] = useState([0,1,2,3,4,5,6,7])

    useEffect(()=>{
    let myInterval = setInterval(() => {
        if (remainingPlayers.length > 0) {
            const playerIndex = remainingPlayers[Math.floor(Math.random() * remainingPlayers.length)];
            playersWithVisibility[playerIndex][1] = false;
            setRemainingPlayers(remainingPlayers.filter((e)=> {return e!== playerIndex}));
        }
        }
            , 5000)
        return ()=> {
            clearInterval(myInterval);
          };
    });
    
    return <div className="pane">
        <div className='row-fill'>
            {teams.map((e) => TeamSlate(e))}
        </div>
        <div className="players row-fill blur-round">
            {playersWithVisibility.map((e) => Player(e))}
        </div>
    </div>
}

const TeamSlate = (team) => {
    console.log(team)
    return <div className="players column-fill blur-round">
            {team.map((e) => Player(e, 0))}
        </div>
}

const imgFile = (playername) => {
    const translator = {
        'RV': RV,
        'Nath': Nath, 
        'Cricri': Cricri, 
        'JP': JP, 
        'Axel': Axel, 
        'Marine': Marine, 
        'Aude': Aude, 
        'Aymeric': Aymeric
    }
    return translator[playername]
}

const Player = (playerWithVisibility, valueIfTrue = 1) => {
    const playerName = playerWithVisibility[0];
    const visible = playerWithVisibility[1] ? valueIfTrue : 1-valueIfTrue
    return <div className="row-fill" style={{"flexBasis": "24%"}}> 
    <div className="player row-fill margin" style={{"flexBasis": "49%", "opacity": visible}}> 
        <img className="pic" src={imgFile(playerName)} alt="Logo" />
        <div className="player-name"> {playerName} </div>
    </div>
    </div>
}


export default GenerateTeams;