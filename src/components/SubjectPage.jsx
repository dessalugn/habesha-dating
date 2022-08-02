import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCourses } from "../api/courseApi";
import SubjectList from "./SubjectList";
import store from "../store/subjectStore";
function  SubjectPage (){
   const [subjects,setSubjects]=useState([]);
   
   useEffect(()=>{
    setSubjects(store.getSubjects())
   },[]);
    
        
    return<>
    <h2>Courses</h2>
    <Link to="/course" className="btn btn-primary">New Course</Link>
    <SubjectList subjects={subjects}/>
    </>
   
}
export default SubjectPage;