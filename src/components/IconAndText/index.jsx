import React from 'react'
import './index.scss'

import Image from '../Image'

export default function IconAndText( porps){
    return(
        <div className="icon-and-text">
            <Image width="23px" height="23px" arquivo={porps.arquivo}/>
            <span>{porps.text}</span>
        </div>
    )
}