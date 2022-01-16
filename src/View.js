import React from "react";
import Wellogin from "./components/Wellogin";
import { useState } from "react";

const View =(props)=>{
    const [mytodos, setmytodos] = useState([])
    return (
<>
<h1>HIHIHI</h1>
<ul className="collection">
           {mytodos.map(todo=>{
return <li className="collection-item" key={todo}>
    {todo}
     <i className="material-icons right">delete</i>
    
    </li>
           })}
    </ul>



</>

    );
}

export default View;