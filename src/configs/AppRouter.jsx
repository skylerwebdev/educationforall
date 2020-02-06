import React from 'react'
import { Route as R, Switch} from 'react-router-dom'
import DevBurnout from '../pages/DevBurnout'
import Login from '../pages/Login'
import Hello from '../pages/Hello'
import About from '../pages/About'
import Admin from '../pages/Admin'
import PrivateRoute from './PrivateRoute'
import Dev from '../pages/Dev'
import Customer from '../pages/Customer'
import Home from '../pages/Home'
import Classes from '../pages/Classes'
import Jobs from '../pages/Jobs'
import PricingDevBurnout from '../pages/PricingDevBurnout'
const AppRouter = () => {
    return (
        <div>
            <Switch>
            <R exact path ='/'>{Home}</R>
            <R path='/classes'>{Classes}</R>
            <R  path='/devburnout/price'>{PricingDevBurnout}</R>
            <R  path='/devburnout'>{DevBurnout}</R>

            <R path="/jobs">{Jobs}</R>
            
            <R exact path='/login'>{Login}</R>
            <PrivateRoute path='/admin' component={Admin}/>
            <R path ='/devs'>{Dev}</R>
            <R path = '/customers'>{Customer}</R>
    </Switch>
        </div>
    )
}

export default AppRouter
