import React from 'react'
import DisplayLogo from '../DisplayLogo';
import './index.scss'
import MyInput from '../MyInput';

export default class PgHome extends React.Component{
    constructor( props){
        super( props)

        this.state = {
            paramUser: ''
        }
    }

    handleSubmit(e){
        e.preventDefault()
        let paramUser = this.state.paramUser
        this.props.history.push(`/result/${paramUser}`)
    }
    setUserLogin( e){
        let val = e.target.value
        this.setState( { paramUser: val})
    }

    render(){
        return(
            <div className="home layout">
                <div className="row">
                    <DisplayLogo />
                    <MyInput
                        onClick={this.handleSubmit.bind(this)}
                        onChange={this.setUserLogin.bind(this)} 
                    />
                </div>
            </div>
        )
    }
}
