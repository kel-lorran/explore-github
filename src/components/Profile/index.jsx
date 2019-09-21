import React from 'react'

import IconAndText from '../IconAndText'
import MyList from '../MyList'
import ElementOfList from '../ElementOfList'
import Image from '../Image'

import company from './img/organization icon.png'
import location from './img/location icon.png'
import star from './img/star icon.png'
import repos from './img/repositorie icon.png'
import followers from './img/followers icon.png'

export default function Profile( props){
    return(
        <React.Fragment>
            <Image width="280px" height="280px" arquivo={props.user.avatarUrl} />
            <MyList>
                {[<ElementOfList
                    classList="element-list-profile"
                    title={props.user.name}
                    description={props.user.login}
                />, 
                <IconAndText arquivo={company} text={props.user.company} />,
                <IconAndText arquivo={location} text={props.user.location} />,
                <IconAndText arquivo={star} text={props.user.stars} />,
                <IconAndText arquivo={repos} text={props.user.publicRepos} />,
                <IconAndText arquivo={followers} text={props.user.followers} />
                ]}
            </MyList>
        </React.Fragment>
    )
}