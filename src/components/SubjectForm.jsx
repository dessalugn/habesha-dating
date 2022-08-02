import TextInput from "./common/TextInput";
import PropTypes  from 'prop-types'

function SubjectForm(props){
    return(<>
    <form  onSubmit={props.onSubmit}>
        <TextInput  
                onChange={props.onChange}
                id="title"
                name="title" 
                label="Title"
                className="form-control" 
                value={props.subject.title}
                error={props.errors.title}/>
        <div className="form-group">
            <label htmlFor="author">Author:</label>
            <div className="field">
            <select  type="text" id="authorId" name="authorId" 
            className="form-control" value={props.subject.authorId||""} onChange={props.onChange}>
                {                             
                    props.authors.map(i=>{return(
                        <option value={i.id} key={i.id}>{i.name}</option>
                    )
                    })
                }
            </select>
            </div>
            <div>
                {props.errors.authorId&&(
                <div className="alert alert-danger">
                    {props.errors.authorId}
                </div>
                )}
            </div>
        </div>     
        <TextInput  
                onChange={props.onChange}
                id="category"
                name="category" 
                label="Category"
                value={props.subject.category}
                error={props.errors.category}/>
     
            <TextInput  
                onChange={props.onChange}
                id="slug"
                name="slug" 
                label="Slug"
                value={props.subject.slug}
                error={props.errors.slug}/>
        <div className="form-group">
            <input type="submit" className="btn btn-primary" value="Save"/>
        </div>
    </form>
    
    </>)
}
SubjectForm.propTypes={
    authorId:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    category:PropTypes.string.isRequired,
    slug:PropTypes.string.isRequired
}
SubjectForm.defaultProps = {};

export default SubjectForm;