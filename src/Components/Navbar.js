import React from "react";

class Navbar extends React.Component{
   render(){
       return(
        <div className="navbar navbar-dark bg-dark">
            <h1 className="brandname"><i className="bi bi-camera icon"></i>Album</h1>
            <button className="navbar-toggler-icon"></button>
        </div>
    );
   }
}

export default Navbar;