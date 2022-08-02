import PropTypes  from 'prop-types'
import { Link } from 'react-router-dom';
function SubjectList(props){
return(
<table className="table table-bordered">
<thead>
 <tr>
     <th>No</th>
     <th>Title</th>
     <th>Category</th>
     <th>Slug</th>
 </tr>
 </thead>
 <tbody>
{
props.subjects.map(c=>{
 return(
 <tr key={c.id}>
 <th>{c.id}</th>
 <th>      
      <Link to={"/course/"+c.slug}>{c.title}</Link>
</th>
 <th>{c.category}</th>
 <th>{c.slug}</th>
</tr> ) 
})
}
 </tbody>
</table>);
}
SubjectList.propTypes={
    subjects:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
        title:PropTypes.string.isRequired,
        category:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired
    }))
}
SubjectList.defaultProps={
    subjects:[]
}
export default SubjectList;