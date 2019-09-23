import React from 'react'
import './index.scss'
import inconStar from './img/star icon.png'

import IconAndText from '../IconAndText'

export default function ElementOfList( props){
    let classList = `repositories `
    classList += props.classList || ''
    
    return(
        <li className={classList}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            {props.numStar === undefined ? null : <IconAndText arquivo={inconStar} text={props.numStar} /> }
        </li>
    )
}