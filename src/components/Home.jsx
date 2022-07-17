import React from "react";
import { Link } from "react-router-dom";

function Home(){
return<div className="jumbotron">
    <p>Home </p>
    <Link to="/about" className="btn btn-primary">About</Link>
</div>
}
export default Home;