// import React from 'react'
// import { useState } from 'react'
// import { db } from '../firebase'; 
// import { useEffect } from 'react';

// export const Contactus = ({user}) => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [message, setMessage] = useState("");
//     const [data, setdata] = useState([]);

// useEffect(()=>{
//     if(user){
//         const DocRef = db.collection("todo").doc(user.uid);
//         DocRef.onSnapshot(Docsnap=>{
//             if(user){
//                 console.log(Docsnap.data().updated);
//                 setdata(Docsnap.data().updated)
//             setdata("");
//             }else{
//                 console.log("no doc")
//             }
//         });

//     }else{
//         console.log("error");
//     }
// },[]);
    


// const handleSubmit=(e)=>{
// e.preventDefault();
// console.log(name,email,message);

// db.collection("todo").doc(user.uid).set({
//    updated:[...data ,  name,email,message]
// })
// }
    
//     return (
//         <div className="container">
//             <form onSubmit={handleSubmit}>
//                 <input type="text" placeholder="Your Name" value={name} onChange={(e)=>{setName(e.target.value)}} /><br/><br/>
//                 <input type="email" placeholder="Your Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/><br/>
//                 <input type="text" placeholder="Message" value={message} onChange={(e)=>{setMessage(e.target.value)}}/><br/><br/>
//                 <button type="submit" >Send</button>
               
//             </form>
       
//         </div>
//     )
// }
