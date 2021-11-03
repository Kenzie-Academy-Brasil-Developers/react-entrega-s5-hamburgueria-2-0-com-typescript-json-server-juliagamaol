import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";


export default function Routes() {
    
    return (
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>
            
            <Route path ="/signup">
                <SignUp />
            </Route>

            <Route path ="/dashboard">
                <Dashboard />
            </Route>
        </Switch>
    )
}
