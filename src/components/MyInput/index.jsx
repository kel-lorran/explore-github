import React,{ useState} from 'react'
import './index.scss'
import Image from '../Image';
import searchIcon from './img/Search Icon.png'
import { Link} from 'react-router-dom'

export default function MyInput( props){
    const [param, setParam ] = useState('')
    let heightReceived = props.height || '50px'
    let fontSizeReceived = props.fontSize || '20px'

    let styleInput = {
        height: heightReceived,
        fontSize: fontSizeReceived,
        paddingLeft: '17px'
    }

    let styleSearchBtn = {
        width: `calc( 2 * ${ heightReceived})`
    }

    let isRequired = props.required || false
    let defaultValue = props.defaultValue || ''
    let typeOfInput = props.type || 'text'


    return(
        <div className="my-input">
            <input
                style={styleInput}
                id={props.id} 
                name={props.name} 
                type={typeOfInput} 
                required={isRequired}
                defaultValue={defaultValue}
                onChange={(e) => setParam( e.target.value)}
                className="gray-shadow"
            />
            <Link to={`/result/${param}`} >
                <span style={styleSearchBtn} className="search-btn gray-shadow">
                    <Image width="100%" height="100%" arquivo={searchIcon} fill="initial" />
                </span>
            </Link>
        </div>
    )
}