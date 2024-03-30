import { useContext } from "react";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";
import "./style/style.css";
function Mycart(){
    const {user,setUser}=useContext(UserContext);
    const navigate=useNavigate();

    function placeorder(){
        fetch("http://localhost:8000/placeorder",
        {method:"post",body:JSON.stringify(user),headers:{"Content-Type":"application/json"}})
        .then((res)=>res.json())
        .then((d)=>{
            const result={userid:user.userid,address:user.address,orderid:d.orderid}
            setUser(result)
            navigate("/Home")
        })
        .catch((err)=>console.log(err));
    }

    return(
        <>
        <div className="header"><h1>My Cart</h1></div>
        <div className="container">
            <div className="imgcontainer">
                <img src="/order.png" alt="chef avatar" className="avatar"/>
            </div>
        <table>
            <tbody>
                <tr><td>UserId</td><td>{user.userid}</td></tr>
                <tr><td>Cheese and Corn</td><td>{user.cheeseandcorn}</td></tr>
                <tr><td>Capsicum</td><td>{user.capsicum}</td></tr>
                <tr><td>Margherita</td><td>{user.margherita}</td></tr>
                <tr><td>Onion</td><td>{user.onion}</td></tr>
                <tr><td>Address</td><td>{user.address}</td></tr>
                <tr><td>Total Amount</td><td>{user.totalamount}</td></tr>
            </tbody>
        </table>
        <button onClick={placeorder}>Place Order</button>
        </div>
        </>
    )
}

export default Mycart;