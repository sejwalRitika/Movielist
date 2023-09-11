import React from "react";
import { Route, Routes } from "react-router-dom";
import Error from "./Error";
import Home from "./Home";
import Singalmovie from "./Singalmovie";
import "./style.css";
const App = ()=>{
return(
<>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/movie/:id" element={<Singalmovie/>}/>
<Route path="*" element={<Error/>}/>
</Routes> 
</>
)
}
export default App;
