import React from "react";

const Update = ({display}) => {
   return (
       <div>
          <div className="todo-main container d-flex flex-column">    
            <input type="text" className="my-2 p-2" placeholder="Title" />
            <textarea className="my-2 p-2" placeholder="Description" />
            <div >
            <button className="btn btn-primary mx-4" >update</button>
            <button className="btn btn-primary " onClick={()=>display("none")}>close</button>
            </div>
           </div>
       </div>
   );
};

export default Update;