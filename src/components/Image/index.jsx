import React from 'react'

export default function Image( props){
    const estilo = {
        backgroundImage: `url(${props.arquivo})`,
        backgroundSize: props.fill || 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center'
    }
    const dimension = props.width && props.height ? {
        width: props.width,
        height: props.height
    } : {}
    return(
        <div className="image" style={{...estilo,...dimension}} >
        </div>
    )
}