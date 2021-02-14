import React from "react";

class Intro extends React.Component{
    render(){
        return(
            <div className="intro">
                <h1 className="title">Album example</h1>
                <p className="lead text-muted content">Something short and leading about the collection below—its contents, the
                creator, etc. Make it short and sweet, but not too short so folks don’t simply
                skip over it entirely.</p>
                <div>
                    <button className="btn btn-primary my-2 btn">Main call to action</button>
                    <button className="btn btn-secondary my-2 btn">Secondary action</button>
                </div>
            </div>
        );
    }
}

export default Intro;