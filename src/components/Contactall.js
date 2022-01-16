import React from 'react'
import { useState } from 'react';
import { db } from '../firebase';


 const Contactall = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email,name,message);
        db.collection('contactall').add({
            name: name,
            email: email,
            message: message
        })
        setName("");
        setEmail("");
        setMessage("");
        window.M.toast({html: `Message send successfully`, classes : "green"})}
    
    return (
        <div>
            <br/><br/><br/>
             <div className="container">
            <form onSubmit={handleSubmit} >
                <input type="text" placeholder="Your Name" value={name} onChange={(e)=>{setName(e.target.value)}} /><br/><br/>
                <input type="email" placeholder="Your Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/><br/>
                <input type="text" placeholder="Message" value={message} onChange={(e)=>{setMessage(e.target.value)}}/><br/><br/>
                <button type="submit" className="btn blue">Send</button>
            </form>
        </div>
        </div>
    )
}
export default Contactall;