import React from 'react'
import { useState } from 'react'
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';


export default function Login() {
    let history = useHistory();
const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
   
    const handleclick=async(e)=>{
        e.preventDefault();
        try{
            const result = await auth.signInWithEmailAndPassword(email,password);
            console.log(result);
        window.M.toast({html: `Welcome ${result.user.email}`, classes : "green"})
    history.push("/welllogin");
    }
        catch(error){
            window.M.toast({html: error.message , classes : "green"})}
        }
    
    return (
        <div className="center container" style={{maxWidth: "500px"}}>
            <h1>Please Login Here</h1>
            <form onSubmit={handleclick}>
                <div className="input-field">
<input type="email" autoComplete="off" placeholder="Enter Email" value={email} onChange={(e)=>setemail(e.target.value)}/>
<input type="password" autoComplete="off" placeholder="Enter password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
                </div>
                <button className="btn blue" type="submit">Login</button>
            </form>
        </div>
    )
}

