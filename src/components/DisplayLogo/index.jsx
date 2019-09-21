import React from 'react'

//meus componentes
import Image from '../Image'

//referencia Logo
import logo from './img/logo_github_search.png'

export default function DisplayLogo( props){
    return(
        <div className="display-logo">
            <Image
                arquivo={logo}
                width={props.width}
                height={props.height}
                fill="contain"
            />
        </div>
    )
}