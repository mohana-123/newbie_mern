import { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import "./style/style.css";

function Admin(){
    const {user,setUser} = useContext(UserContext);
    const [data,setData] = useState([{Column1:"No Data",Column2:"No Data"}])

    function fetchData(){
        console.log("Fetching data")
        fetch("http://localhost:8000/getorders")
        .then((res)=>res.json())
        .then((mydata)=>setData(mydata))
        .catch((err)=>console.log(err))



    }


    useEffect(()=>{
        fetchData()
    },[]);
    //if(user){
        return(
            <>
            <div className="header"><h1>Welcome, ShopKeeper</h1></div>
            <table>
                <thead>
                    <tr>{Object.keys(data[0]).map(column=><th key={Math.random()}>{column}</th>)}</tr>
                </thead>
                <tbody>
                    {data.map(obj=>{
                        return <tr key={Math.random()}>{
                            Object.values(obj).map(value=>{return <td key={Math.random()}>{value}</td>})
                        }</tr>
                    })}
                </tbody>
            </table>
            </>
        )
    //}
    //else{
        //return(<><h1>You are not logged in</h1></>)
    //}
}

export default Admin;