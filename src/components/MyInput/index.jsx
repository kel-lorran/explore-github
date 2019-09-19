import React from 'react'
import './index.css'

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

    let onChange = props.onChange || null
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
                onChange={onChange}
            />
            <span style={styleSearchBtn} className="search-btn">
                btn
            </span>
        </div>
    )
}