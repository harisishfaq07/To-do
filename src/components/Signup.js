
import React from 'react'
import { useState } from 'react'
import { auth } from '../firebase';
import {useHistory} from "react-router-dom";

export default function Signup() {
    let history=useHistory();
const [email, setemail] = useState("");
   const [password, setpassword] = useState("");
   
    const handleclick=async(e)=>{
        e.preventDefault();
        console.log(email,password);
        try{
const result = await  auth.createUserWithEmailAndPassword(email,password);
setemail("");
setpassword("");
window.M.toast({html: `welcome ${result.user.email} you can login now`, classes : "green"})
history.push("/login");
}
catch(error){
    window.M.toast({html: error.message , classes : "green"})
}
    }
    return (
        <div  className="center container" style={{maxWidth: "500px"}}>
            <h1>Please Signup Here</h1>
            <form onSubmit={handleclick}>
                <div className="input-field">
<input type="email" placeholder="Enter Email" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
<input type="password" placeholder="Enter password" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                </div>
                <button className="btn blue" type="submit">Signup</button>
            </form>
        </div>
    )
}

