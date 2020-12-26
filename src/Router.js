import React from 'react'
import { useState, useEffect } from 'react';
import GenerateTeams from './GenerateTeams';
import Game from './Game';
import ButtonWithCallback from './ButtonWithCallback';
import { MdDone, MdClose } from 'react-icons/md';
import testWordsData from './testWords'; 
import Word from './Word';
import GameOrganizer from './GameOrganizer'
import { Player } from 'video-react';
import "../node_modules/video-react/dist/video-react.css"; // import css





const RouterComponent = (props:any) => {
    const [route, setRoute] = useState('')
    return (

        <div className="root">
        <div className="left-pane">
        <ButtonWithCallback text={'Intro'} callback={() => setRoute('vid')}/>
        <ButtonWithCallback text={'Faire un test'} callback={() => setRoute('test')}/>
        <ButtonWithCallback text={'Generer les equipes'} callback={() => setRoute('teams')}/>
        {[1,2,3,4,5,6,7,8,9,10].map((index) => {return <ButtonWithCallback text={`Lancer la partie ${index}`} callback={() => setRoute(`play${index}`)}/>} )}
        </div>

        <div className="pane">
            {component(route)}
        </div>

        </div>
    )
}

const component = (route) => {
    if (route['startsWith']('play')) {
        return <GameOrganizer index={route.split('play')[1]}/>
    }

    if (route === 'teams') {
        return <GenerateTeams />
    }

    if (route === 'test') {
        return <GameOrganizer test/>
    }

    
    if (route === 'vid') {
        return     <Player>
      <source src='/vid.mp4' />
    </Player>
    }
}


const TextComponent = (text: str) => {
    return (<div>
    {text}
    </div>)
}

export default RouterComponent;