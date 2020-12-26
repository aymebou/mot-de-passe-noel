import React from 'react'
import { useState, useEffect } from 'react';

const WordComponent = (props:any) => {
    const {word} = props
    return (
        <div className="word flex-center">
            <div className="text">
                {word.value}
            </div>
        </div>
    )
}

export default WordComponent;