import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import Welcome from './components/Welcome'
import Login from './components/Login'
import Signup from './components/Signup'
import Wellogin from './components/Wellogin'
import Contactall from './components/Contactall'
import { Contactus } from './components/Contactus'
import { auth } from './firebase'
import { useState, useEffect } from 'react'
import View from './View'

export default function App() {
 const [user, setuser] = useState(null);

 useEffect( ()=>{
    auth.onAuthStateChanged(user=>{
         if(user){setuser(user)}
         else{setuser(null)}
     })
      } ,[])
    return (
        
        <BrowserRouter>
         <Navbar user={user}/>   
         <Switch>
<Route   exact path="/" >
    <Welcome/>
</Route>
<Route exact path="/login">
    <Login/>
</Route>
<Route exact path="/signup">
    <Signup/>
</Route>
<Route exact path="/contactall">
    <Contactall/>
</Route>
<Route exact path="/welllogin" >
    <Wellogin  user={user}/>
</Route>
<Route exact path="/contactus" >
    <Contactus  user={user}/>
</Route>
</Switch>
        </BrowserRouter>
    )
}
