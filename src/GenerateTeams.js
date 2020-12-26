import React from 'react'
import { useState, useEffect } from 'react';
import Player1 from './img/player1.png';
import Player2 from './img/player2.png';
import Player3 from './img/player3.png';
import Player4 from './img/player4.jpg';
import Player5 from './img/player5.png';
import Player6 from './img/player6.png';
import Player7 from './img/player7.jpg';
import Player8 from './img/player8.jpg';

const players = ['RV', 'Nath', 'Laulau', 'Karine', 'Val', 'Marco', 'Pauline', 'Dam']
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
        'RV': Player1, 
        'Nath': Player2, 
        'Laulau': Player3, 
        'Karine': Player4, 
        'Val': Player5, 
        'Marco': Player6, 
        'Pauline': Player7, 
        'Dam': Player8,
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