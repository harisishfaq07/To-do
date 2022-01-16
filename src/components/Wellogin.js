import React from 'react'
import { useState,useEffect } from 'react'
import { db } from '../firebase';
import View from '../View';


export default function Wellogin({user}) 


{
    // Here i make two usestates one for storing nex todo and other is array for storing all todos
    const [text, settext] = useState("");
  const [mytodos, setmytodos] = useState([])

// Step:1 here i initiliaze firestore in which i make collection and then store the user data
 const todos = ()=>{
    
    db.collection('todo').doc(user.uid).set({
     
        todos: [...mytodos , text]
        
        })}
// Here i use useeffect to make the network between previous todos and new todos. so here i collect all the todos and then combine it in on array
useEffect(()=>{

    if(user){ const docRef= db.collection("todo").doc(user.uid);
    docRef.onSnapshot(docSnap=>{
        if(docSnap.exists)
        { setmytodos(docSnap.data().todos)}
        else{
            console.log("no docs")
        }
       
        
    })}else{
        console.log("error")
    }
  
},[]);


   



   
    return (
        <div className="container">
            {/* <View/> */}
        <h1>To Do's</h1>
        
        <div className="input-field ">
        <input type="text" placeholder="Add To-dos" value={text} onChange={(e)=>settext(e.target.value)}/>
        </div>
      
       <button className="btn blue" onClick={()=>todos()}>Add</button>
       

       {/* Here i display the data from the firebase data base */}
       <ul className="collection">
           {mytodos.map(todo=>{
return <li className="collection-item" key={todo}>
    {todo}
     <i className="material-icons right">delete</i>
    
    </li>
           })}
    </ul>
    <br/><br/><br/>
    
    
            
      
            

       
        </div>
        
    
    )
}
