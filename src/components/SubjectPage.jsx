import React, { useEffect, useState } from "react";
import { getCourses } from "../api/courseApi";
import SubjectList from "./SubjectList";

function  SubjectPage (){
   const [subjects,setSubjects]=useState([]);
   
   useEffect(()=>{
    getCourses().then(i=>setSubjects(i) );
   },[]);
    
        
    return<>
    <SubjectList subjects={subjects}/>
    </>
   
}
export default SubjectPage;