import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import "./style/style.css";

function Adminlogin(){

    const navigate=useNavigate();
    const {user,setUser}=useContext(UserContext);
    const [k,updatek]=useState("")

    function getdata(event) {
        event.preventDefault();
        const data=new FormData(event.target);
        const senddata={
            userid:data.get("userid"),
            password:data.get("password")
        }
        fetch("http://localhost:8000/adminlogin",
        {method:"post",body:JSON.stringify(senddata),headers:{"Content-Type":"application/json"}})
        .then((res)=>res.json())
        .then((d)=>{
            if(d){
                setUser(d)
                navigate("/Admin")
            }
            else{
                updatek("Incorrect ID or Password")
            }
        })
        .catch((err)=>console.log(err));
    }

    return(
        <>
        <div className="header"><h1>Welcome ShopKeeper</h1></div>
        <div className="container">
            <div className="imgcontainer">
                <img src="/shopkeeper.png" alt="chef avatar" className="avatar"/>
            </div>
        <form onSubmit={getdata}>
            <label htmlFor="userid"><b>Shopkeeper ID</b></label>
            <input type="text" name="userid"/>
            <label htmlFor="userid"><b>Password</b></label>
            <input type="password" name="password"/>
            <button type="submit">Login</button><br/>
            <a href="/">Go to Home page</a>
        </form>
        <h3>{k}</h3>
        </div>div
        </>
    )
}

export default Adminlogin;