import React  from "react";

import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import { Route, Routes ,Navigate} from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import ManageSubjectPage from "./components/ManageSubjectsPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App(){ 
  <ToastContainer autoClose={3000} hideProgressBar></ToastContainer>
   return (
    <div className="container-fluid">
      <Header/> 
      <Routes>
        <Route path="/" exact element={<Home/>}/>  
        <Route path="/home" element={<Home/>}/>  
        <Route path="/about" element={<About/>}/>  
        <Route path="/course/:slug" element={<ManageSubjectPage/>}/>  
        <Route path="/course" element={<ManageSubjectPage/>}/>          
        <Route path="/about-page" element={<Navigate replace to="/about" />} />
        <Route path="*" element={<PageNotFound/>}/>  
      </Routes>  
      
    </div>
   );
}
export default App;