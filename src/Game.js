import React from 'react'
import { useState, useEffect } from 'react';
import Word from './Word';
import WordComponent from './WordComponent';
import ButtonWithCallback from './ButtonWithCallback';
import { MdDone, MdClose } from 'react-icons/md';
import History from './History'
import Timer from './Timer';



const Game = (props: any) => {
    const [wordIndex, setWordIndex] = useState(0);
    const { words, time, childId } = props;

    useEffect(() => {setWordIndex(0)}, [childId]);

    if (wordIndex === -1) {
        return <History words={words} />;
    }
    
    const acceptCallback = () => {
        words[wordIndex].guess()
        setWordIndex(wordIndex + 1)
    }

    const skipCallback = () => {
        words[wordIndex].skip()
        setWordIndex(wordIndex + 1)
    }

    console.log(childId);

    return (
    <div className='pane'>
        <Timer initialSeconds={time} overCallback={() => setWordIndex(-1)} key={childId}/>
        <History words={words} />
        <div className='bottom-bar'>
            <WordComponent word={words[wordIndex]} />
            <div className="flex-center">
                <ButtonWithCallback icon={MdDone} callback={skipCallback} icon={MdClose} />
                <ButtonWithCallback icon={MdDone} callback={acceptCallback} icon={MdDone} />
            </div>  
        </div>
    </div>
    
    );
}

export default Game;