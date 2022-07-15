import React from "react";
import SubjectPage from "./SubjectPage";
class About extends React.Component{
    render (){
        return (
        <>
        <p>About</p>            
        <a href="/home">Home</a>
        <SubjectPage/>
        </>);
       
    }
}
export default About;