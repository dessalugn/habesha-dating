import React from "react";
import {Link,   BrowserRouter as Router,
} from "react-router-dom";

function Home(){
return<div className="jumbotron">
    <p>Home </p>
    <Router>
    <Link to="about">About</Link>
    </Router>
</div>
}
export default Home;