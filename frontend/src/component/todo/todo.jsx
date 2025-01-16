import React from "react";
import "./todo.css";
import { useState } from "react";
import TodoCard from "./todoCard";
import Update from "./update";


const ToDo = () => {
    const [inputs, setInputs] = useState({title:"",body:""});
    const [array, setArray] = useState([]);
    const change =(e) =>{
        const{name, value}=e.target;
        setInputs({...inputs,[name]:value});
    }
    const submit = () => {
        setArray([...array,inputs]);
        setInputs({title:"",body:""});
    }
    console.log(array);
    const del = (id) => {
        console.log(id);
    }
    const dis = (value) => {
        console.log(value);
        document.getElementById("todoUpdate").style.display=value;
    }
    
   return (
    <>
       <div className="todo">
           <div className="todo-main container d-flex flex-column">    
            <input type="text" name="title" value={inputs.title} className="my-2 p-2" placeholder="Title" onChange={change}/>
            <textarea className="my-2 p-2" name="body" value={inputs.body} placeholder="Description" onChange={change}/>
            <button className="btn btn-primary w-100" onClick={submit}>Add Todo</button>
           </div>
           <div className="todo-list">
            <div className="container-fluid"> 
                <div className="row d-flex">
                {array && array.map((item, index) => (
                    <div className="col-lg-3 bg-success mx-5 my-5">
                    <TodoCard key={index} title={item.title} body={item.body} id={index} delid={del} display={dis}/>
                    </div>
                ))}
                </div>
            
            </div>
                
            </div>
       </div>
       <div className="todoUpdate p-5" id="todoUpdate"><div className="container"><Update display={dis}/></div></div>
    </>
   );
};

export default ToDo;