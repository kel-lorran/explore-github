import React from 'react'

export default function( props){
    return(
        <ul>
            { props.children.map( (e, i) => (
                <div key={`teste-${i}`}>
                    {e}
                </div>
            ))}
        </ul>
    )
}