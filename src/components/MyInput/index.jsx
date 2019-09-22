import React from 'react'
import './index.scss'
import Image from '../Image';
import searchIcon from './img/Search Icon.png'

export default function MyInput( props){
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

    const handleKeyEnter = (e) => {
        if (e.key === 'Enter') {
            props.onClick(e);
        }
    }


    return(
        <div className="my-input">
            <input
                style={styleInput}
                id={props.id} 
                name={props.name} 
                type={typeOfInput} 
                required={isRequired}
                defaultValue={defaultValue}
                onChange={props.onChange}
                className="gray-shadow"
                onKeyDown={handleKeyEnter}
            />
            <a onClick={ props.onClick}>
                <span style={styleSearchBtn} className="search-btn gray-shadow">
                    <Image width="100%" height="100%" arquivo={searchIcon} fill="initial" />
                </span>
            </a>
        </div>
    )
}