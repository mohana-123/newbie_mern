import { Routes,Route,BrowserRouter } from 'react-router-dom';
import Login from './components/login';
import Home from './components/home';
import MyCart from './components/mycart';
import Admin from './components/admin';
import AdminLogin from './components/adminlogin';
import CreateAccount from './components/createaccount';
import { useState, createContext } from 'react';

export const UserContext = createContext(null);

function App() {
  const [user,setUser] = useState(false);

  return (
    <>
      <BrowserRouter>
      <UserContext.Provider value={{user:user,setUser:setUser}}>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Mycart' element={<MyCart/>}/>
          <Route path='/CreateAccount' element={<CreateAccount/>}/>
          <Route path='/Adminlogin' element={<AdminLogin/>}/>
          <Route path='/Admin' element={<Admin/>}/>
          <Route path='*' element={<h1>Sorry, The page does not exist</h1>}/>
        </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
