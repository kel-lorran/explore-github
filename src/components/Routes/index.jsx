import React from 'react'
import PgHome from '../PgHome'
import { Switch, Route, Redirect} from 'react-router'
import PgResult from '../PgResult';

export default function Routes( props){
    return(
        <Switch>
            <Route exact path='/' component={PgHome} />
            <Route path='/result/:user' component={PgResult} />
            <Redirect from='*' to='/' component={PgHome} />
        </Switch>
    )
}