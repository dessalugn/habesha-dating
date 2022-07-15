import React  from "react";

import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";

function App(){    

   function getPage(){
    const route=window.location.pathname;
    if(route==="/home")return<Home/>
    return <About/>
   }

   return (
    <div className="container-fluid">
      <Header/>  
      {getPage()}
    </div>
   );
}
export default App;