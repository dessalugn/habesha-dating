import React from "react";
import { getCourses } from "../api/courseApi";

class  SubjectPage extends React.Component{
    state ={
        subjectList:[]
    }
    getSubjectsData(){
        getCourses().then(i=>this.setState({subjectList:i}) );
    }
    renderRows(c){
       return (<tr>
        <th>{c.id}</th>
        <th>{c.title}</th>
       </tr> );
    }
   render(){
    return<>
    <table className="table">
       <thead>
        <tr>
            <th>No</th>
            <th>Title</th>

        </tr>
        </thead>
        <tbody>
       {
       this.state.subjectList.map(c=>{
        return  this.renderRows;
       })
       }
        </tbody>
    </table>
    </>
   } 
}
export default SubjectPage;