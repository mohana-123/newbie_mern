import { useState } from "react";
import "./style/style.css";

function createaccount(){
    const [data,updatedata]=useState("");

    function register(event){
        event.preventDefault();
        const data=new FormData(event.target);
        const senddata={
            userid:data.get("userid"),
            password:data.get("password"),
            address:data.get("address"),
        }

        fetch("http://localhost:8000/createAccount",
        {method:"post",body:JSON.stringify(senddata),headers:{"Content-Type":"application/json"}})
        .then((res)=>res.json())
        .then((d)=>updatedata(d))
        .catch((err)=>console.log(err));


    }
    return(
        <>
        <div className="header"><h1>Join us and Enjoy our pizza</h1></div>
        <div className="container">
            <div className="imgcontainer">
                <img src="/create account.png" alt="create account" className="avatar"/>
            </div>
        <form onSubmit={register}>
            <label htmlFor="userid"><b>Please enter your E-mail id</b></label>
            <input type="text" name="userid"/>
            <label htmlFor="userid"><b>Choose a password</b></label>
            <input type="password" name="password"/>
            <label htmlFor="userid"><b>Please enter delivery address</b></label>
            <input type="text" name="address"/>
            <button type="submit">Register</button>
        </form>
        <h2>{data.Mesg}</h2>
        <a href="/">Go to Home page</a>
        </div>
        </>
    )
}

export default createaccount;