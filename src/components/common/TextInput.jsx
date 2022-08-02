import React from "react";
import PropTypes from "prop-types";
function TextInput(props){
var wrapperClass="form-group";
if(props.error.length>0){
    wrapperClass+=" has-error"
}
return(<>

      <div className={wrapperClass}>
            <label htmlFor={props.id}>{props.label}</label>
            <div className="field">
            <input  type="text" 
                onChange={props.onChange}
                id={props.id} 
                name={props.name} 
                className="form-control" 
                value={props.value}/>
            </div>
        </div>
        {props.error && <div className="alert alert-danger">{props.error}</div>}
</>)
}
TextInput.propTypes={
    id: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
    value:PropTypes.string,
    error:PropTypes.string
};
TextInput.defaultProps={error:""}
export default TextInput;