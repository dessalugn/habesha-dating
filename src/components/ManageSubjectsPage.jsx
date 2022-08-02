import { useEffect, useState } from "react";
import SubjectForm from "./SubjectForm";
import * as courseAction from "../actions/subjectDispatcher";
import store from "../store/subjectStore"
import { getAuthors } from "../api/authorApi";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import {toast} from "react-toastify";
const ManageSubjectPage=props=>{
  const { slug } = useParams();

  let navigate = useNavigate();
  const [errors,setErrors]=useState({});
  const [authors,setAuthors]=useState([]);
   
  useEffect(()=>{
        getAuthors().then(i=>setAuthors(i) );
    },[]);
  const[subject,setSubject]=useState({
    id:null,
    title:"",
    category:"",
    slug:"",
    authorId:null
  });
  function handelChange({target}) {
    setSubject({...subject,[target.name]:target.value});
  }
  useEffect(()=>{
   if(slug) store.getCourseBySlug(slug).then(data=>{
    setSubject(data)
  });
  },[slug]);
  function validateForm(){
    const _error={};
    if(!subject.title)    _error.title="Title is required";
    if(!subject.category)    _error.category="Category is required";
    if(!subject.slug)    _error.slug="Slug is required";
    if(!subject.authorId)    _error.authorId="Author is required";
    setErrors(_error);
    return Object.keys(_error).length===0;
  }
  function handleSubmit(event){
  if(!validateForm()) return;
   event.preventDefault();
   courseAction.saveCourse(subject).then(()=>{
    navigate("/about",{ replace: true});
    toast.success('Course Saved !');
   });
  }
 
    return(<>
        <h2>Manage Subjects</h2>
        <SubjectForm
          errors={errors} 
          subject={subject} 
          onChange={handelChange} 
          onSubmit={handleSubmit}
          authors={authors}
         />
    </>)
}
export default ManageSubjectPage;