import React from 'react'

export default function Image( props){
    const estilo = {
        backgroundImage: `url(${props.arquivo})`,
        width: props.width,
        height: props.height,
        backgroundSize: props.fill || 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center'
    }
    return(
        <div className="image" style={estilo} >
        </div>
    )
}