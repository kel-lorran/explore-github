import React from 'react'
import './index.scss'

//meus componentes
import DisplayLogo from '../DisplayLogo';
import MyInput from '../MyInput';
import MyList from '../MyList'
import ElementOfList from '../ElementOfList'

//model
import GithubUser from '../../model/GithubUser';


import axios from 'axios'
import Repository from '../../model/Repository';
import Profile from '../Profile'



class PgResult extends React.Component{
    constructor( props){
        super( props)

        this.state = {
            isLoading: true,
            paramUser: props.match.params.user,
            githubProfile: new GithubUser( ),
            notFound: false
        }
    }

    componentWillMount(){
        this.hasParam()
    }

    async getDataOfUser( user){
        let paramUser = this.state.paramUser
        try{
            this.setState( {isLoading: true})
            let result = await axios.get( `https://api.github.com/users/${paramUser}` )
            user.name = result.data.name
            user.login = result.data.login
            user.avatarUrl = result.data['avatar_url']
            user.company = result.data.company
            user.location = result.data.location
            user.followers = result.data.followers
            let repositories = await axios.get( `https://api.github.com/users/${paramUser}/repos` )

            user.repositories = repositories.data.map( (e, i) => new Repository( e.name, e.description, e['stargazers_count'], e['html_url']))
            this.setState( {
                githubProfile: user,
                notFound: false
            })
        }catch( er){
            console.log( er)
            this.setState( {notFound: true})
        }finally{
            this.setState( {
                isLoading: false,
                githubProfile: user
            })
        }
    }

    hasParam(){
        let userEmpty = new GithubUser( )
        if( this.state.paramUser){
            this.getDataOfUser( userEmpty)
        } else{
            this.setState({
                githubProfile: userEmpty,
                notFound: true,
                isLoading: false
            })
        }
    }
    setUserLogin( e){
        let val = e.target.value
        this.setState( { paramUser: val})
    }
    handleSubmit(e){
        e.preventDefault()
        let paramUser = this.state.paramUser
        this.hasParam()
        this.props.history.push(`/result/${paramUser}`)
    }

    renderListRepository(){
        let repositories = this.state.githubProfile.repositories
        if( repositories.length)
            return(
                <MyList>
                    {
                        repositories.map( ( dataOfRepository , i) => <ElementOfList
                            key={`repo-${i}`}
                            title={dataOfRepository.name}
                            description={dataOfRepository.description}
                            numStar={dataOfRepository.star}
                        />)
                    }
                </MyList>
            )
    }
    renderProfile(){
        let user = this.state.githubProfile
        if( user.avatarUrl)
            return(
               <Profile user={ user} />
            )
    }
    renderNotFound(){
        let isLoading = this.state.isLoading
        let notFound = this.state.notFound
        if(! isLoading && notFound)
            return(
                <div className="mesage-not-found">
                    <p >User not found :(</p>
                </div>
            )
    }
    renderLoader(){
        let isLoading = this.state.isLoading
        let notFound = this.state.notFound
        if(isLoading && !notFound)
            return(
                <div className="loader">
                    <p className="fa-3x">
                        <i className="fas fa-circle-notch fa-spin"></i>
                    </p>
                </div>
            )
    }

    render(){
        return(
            <div className="result layout">
                <div className="logo-area">
                    <DisplayLogo width="290px" height="50px" />
                </div>
                <div className="search-area">
                    <MyInput
                        onClick={this.handleSubmit.bind(this)}
                        onChange={this.setUserLogin.bind(this)} 
                    />            
                </div>
                {this.renderNotFound()}
                {this.renderLoader()}
                <div className="property-area">
                    {this.renderProfile()}
                </div>
                <div className="repository-area">
                    {this.renderListRepository()}
                </div>
            </div>
        )
    }
}

export default PgResult