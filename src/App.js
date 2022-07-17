import React  from "react";

import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import { Route, Routes ,Navigate} from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
function App(){ 
   return (
    <div className="container-fluid">
      <Header/> 
      <Routes>
        <Route path="/" exact element={<Home/>}/>  
        <Route path="/home" element={<Home/>}/>  
        <Route path="/about" element={<About/>}/>  
        <Route path="/about-page" element={<Navigate replace to="/about" />} />
        <Route path="*" element={<PageNotFound/>}/>  
      </Routes>  
      
    </div>
   );
}
export default App;