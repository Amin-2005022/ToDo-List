import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";


const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [inputs, setInputs] = React.useState({email:"", username:"", password:""});
    const change =(e) =>{
        const{name, value}=e.target;
        setInputs({...inputs,[name]:value});
    }
    const submit = async(e) => {
        e.preventDefault();
        await axios.post("http://localhost:1000/api/v1/register", inputs)
            .then((response)=>{console.log(response.data.user);sessionStorage
            .setItem("email",inputs.email);setInputs({email:"", username:"", password:""});
            dispatch(authActions.login());
            navigate("/");
        });
    }
   return (
       <div className="d-flex flex-column">
        <input className="p-2 my=3" type="email" name="email" placeholder="enter yor email" onChange={change} value={inputs.email}/>
        <input className="p-2 my=3" type="username" name="username" placeholder="enter yor name" onChange={change} value={inputs.username}/>
        <input className="p-2 my=3" type="password" name="password" placeholder="enter password" onChange={change} value={inputs.password}/>
        <button className="btn btn-primary" onClick={submit}>Sign Up</button>
       </div>
   );
};

export default SignUp;