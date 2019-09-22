import React from 'react'
import './index.scss'
import { Link} from 'react-router-dom'

//meus componentes
import Image from '../Image'

//referencia Logo
import logo from './img/logo_github_search.png'

export default function DisplayLogo( props){
    return(
        <div className="display-logo">
            <Link to="/">
                <Image
                    arquivo={logo}
                    width={props.width}
                    height={props.height}
                    fill="contain"
                />
            </Link>
        </div>
    )
}