import React from "react";
import { Link } from "react-router-dom";
import SubjectPage from "./SubjectPage";
class About extends React.Component{
    render (){
        return (
        <>
        <p>About</p>            
        <Link to="/home" className="btn btn-primary">Home</Link>
        <SubjectPage/>
        </>);
       
    }
}
export default About;