import React from 'react'
import { useState, useEffect } from 'react';
import { MdDone, MdClose } from 'react-icons/md';


const History = (props:any) => {
    const { words } = props;

    return (
        <div className="history">
            {words.map( x => <WordWithInfo word={x}/>)}
        </div>
    );
}

const WordWithInfo = (props:any) => {
    const { word } = props;
    if (word.status === undefined) {
        return null
    }

    const icon = () => {
        if (word.status === 'guessed') {
            return <MdDone/>
        }

        if (word.status === 'skipped') {
            return <MdClose/>
        }
        
        return null
    }
    return (
        <div className={"word-info " + word.status}> 
         <div> {word.value} </div>
         <div> {icon()} </div>
         </div>
    );
}

export default History;