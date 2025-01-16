import React from "react";

const TodoCard = ({ title, body ,id ,delid , display}) => (
    <div className="todo-card">
        <h3>{title}</h3>
        <p>{body.split("",40)}...</p>
        <div className="d-flex justify-content-center align-item-center"><button onClick={()=>{delid(id);display("block");}} >update</button></div>
    </div>
    
);

export default TodoCard;