import React from 'react'

export default function MyList( props){
    return(
        <ul>
            { props.children.map( (e, i) => (
                <div key={`${props.keyName}-item-${i}`}>
                    {e}
                </div>
            ))}
        </ul>
    )
}