import { render } from '@testing-library/react';
import React from 'react'
import './Style/style.css';

function Square(props) {


    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button >

    )

}




export default Square;