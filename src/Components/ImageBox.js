import React from 'react';

class ImageBox extends React.Component{
    render(){
        return(
            <div className="card shadow-sm col-md-4">
               <img src="..." alt='Thumbnail'></img>
                <div className="card-body">
                    <p className="card-text">{this.props.list.content}</p>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">{this.props.list.btn1name}</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">{this.props.list.btn2name}</button>
                    </div>
                   <p className="text-muted">{this.props.list.time}</p>
                </div>
            </div>
        );
    }
}

export default ImageBox;