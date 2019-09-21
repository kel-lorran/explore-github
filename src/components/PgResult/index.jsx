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
            isLoading: false,
            githubProfile: new GithubUser( props.match.params.user),
            notFound: false
        }
    }

    componentWillMount(){
        this.hasParam()
    }

    async getDataOfUser(){
        let user = this.state.githubProfile
        try{
            this.setState( {isLoading: true})
            let result = await axios.get( `https://api.github.com/users/${user.login}` )
            user.name = result.data.name;
            user.avatarUrl = result.data['avatar_url'];
            user.company = result.data.company;
            user.location = result.data.location;
            user.followers = result.data.followers;
            let repositories = await axios.get( `https://api.github.com/users/${user.login}/repos` )

            user.repositories = repositories.data.map( (e, i) => new Repository( e.name, e.description, e['stargazers_count'], e['html_url']))
            this.setState( { githubProfile: user})
        }catch( er){
            console.log( er)
            this.setState( {notFound: true})
        }finally{
            this.setState( {isLoading: false})
        }
    }

    hasParam(){
        if( this.state.githubProfile.login){
            this.getDataOfUser()
        }
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

    render(){
        return(
            <div className="result layout">
                <div className="logo-area">
                    <DisplayLogo width="290px" height="50px" />
                </div>
                <div className="search-area">
                    <MyInput
                    />              
                </div>
                <div className="property-area">
                    {this.renderProfile()}
                </div>
                <div className="repository-ara">
                    {this.renderListRepository()}

                </div>
            </div>
        )
    }
}

export default PgResult