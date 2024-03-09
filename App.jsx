import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import react from 'react'
import Navbar from './Navbar'
import {Routes, Route } from 'react-router-dom';
import Home from './Home'
import Login from "./Login";
import Dashboard from "./Dashboard";
import Disclaimer from "./Disclaimer"
import Task from './Task'
import Leave from "./Leave";
import Apply from "./Apply";
function App()
{
    return(
        <>
        <Navbar/>
        <Routes>
        <Route exact path ="/" element={<Home/>} />
        <Route exact path ="/login" element={<Login/>} />
        <Route exact path ="/dashboard" element={<Dashboard/>} />
        <Route exact path ="/task" element={<Task/>}/>
        <Route exact path ="/leave" element={<Leave/>}/>
        <Route exact path ="/apply" element={<Apply/>}/>
        </Routes>
        <Disclaimer/>
        </>
    )
}
export default App;