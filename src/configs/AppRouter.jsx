import React from 'react'
import { Route , Switch} from 'react-router-dom'
import DevBurnout from '../pages/DevBurnout'
import Login from '../pages/Login'
import Hello from '../pages/Hello'
import About from '../pages/About'
import Admin from '../pages/Admin'
import PrivateRoute from './PrivateRoute'
import Customer from '../pages/Customer'
import Home from '../pages/Home'
import Classes from '../pages/Classes'
import Jobs from '../pages/Jobs'
import PricingDevBurnout from '../pages/PricingDevBurnout'
import Construction from '../pages/Construction'
import GetInq from '../pages/GetInq'
import DBS from '../pages/DBS'
const AppRouter = () => {
    return (
        <div>
            <Switch>
            <Route exact path ='/' component={Home}></Route>
            <Route path='/classes'component={Classes}></Route>
            <Route  path='/devburnout/price' component={PricingDevBurnout}></Route>
            <Route  path='/devburnout/signup' component={DBS}></Route>

            <Route  path='/devburnout' component={DevBurnout}></Route>
            <Route path='/construction' component={Construction}></Route>
            <Route path="/jobs" component={Jobs}></Route>
            
            <Route exact path='/login' component={Login}></Route>
            <PrivateRoute path='/admin' component={Admin}/>
            <Route path = '/customers' component={Customer}></Route>
    <Route path='/devinq' component={GetInq}></Route>
    </Switch>
        </div>
    )
}

export default AppRouter
