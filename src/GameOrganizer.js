import React from 'react'
import { useState, useEffect } from 'react';
import wordsData from './words';
import testWordsData from './testWords';
import Word from './Word.js'
import Game from './Game';

const parseAndShuffle = (array) => {
    return array.map(e => new Word(e)).sort(() => Math.random() - 0.5);
}

const GameOrganizer = (props:any) => {
    const { test, index } = props;
    const words = parseAndShuffle(test ? testWordsData : wordsData.slice((index-1) * 25, index*25));
    const time = 60;

    return <Game words={words} time={time} childId={index}/>

}

export default GameOrganizer;