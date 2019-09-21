import React from 'react'
import DisplayLogo from '../DisplayLogo';
import './index.css'
import MyInput from '../MyInput';

export default function PgHome( props){
    return(
        <div className="home layout">
            <div className="row">
                <DisplayLogo width="415px" height="80px" />
                <MyInput 
                />
            </div>
        </div>
    )
}
