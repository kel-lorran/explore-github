import React from 'react'
import './index.css'

import Image from '../Image'

export default function IconAndText( porps){
    return(
        <div className="icon-and-text">
            <Image width="25px" height="25px" arquivo={porps.arquivo}/>
            {porps.text}
        </div>
    )
}