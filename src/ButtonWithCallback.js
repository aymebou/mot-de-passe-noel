import React from 'react'
import { useState, useEffect } from 'react';


const ButtonWithCallback = (props:any) => {
    const { callback, icon } = props;
    const { text } = props;

    return <button type="button" onClick={() => callback()}>
        {(icon===undefined) ? text : React.createElement(icon, {})}
  </button>
}

export default ButtonWithCallback;

