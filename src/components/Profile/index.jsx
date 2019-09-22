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
            <MyList keyName="profile">
                {[<ElementOfList
                    key="item-avatar"
                    classList="element-list-profile"
                    title={props.user.name}
                    description={props.user.login}
                />, 
                <IconAndText key="item-comp" arquivo={company} text={props.user.company} />,
                <IconAndText key="item-loca" arquivo={location} text={props.user.location} />,
                <IconAndText key="item-star" arquivo={star} text={props.user.stars} />,
                <IconAndText key="item-repo" arquivo={repos} text={props.user.publicRepos} />,
                <IconAndText key="item-foll" arquivo={followers} text={props.user.followers} />
                ]}
            </MyList>
        </React.Fragment>
    )
}