import React from 'react';
import ImageBox from './ImageBox';

const list = [
    {content:'1This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    btn1name: 'View',
    btn2name: "Edit",
    time:'9 mins'},
    {content:'2This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    btn1name: 'View',
    btn2name: "Edit",
    time:'9 mins'},
    {content:'3This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    btn1name: 'View',
    btn2name: "Edit",
    time:'9 mins'},
    {content:'4This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    btn1name: 'View',
    btn2name: "Edit",
    time:'9 mins'},
    {content:'5This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    btn1name: 'View',
    btn2name: "Edit",
    time:'9 mins'},
    {content:'6This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    btn1name: 'View',
    btn2name: "Edit",
    time:'9 mins'},
    {content:'7This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    btn1name: 'View',
    btn2name: "Edit",
    time:'9 mins'},
    {content:'8This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    btn1name: 'View',
    btn2name: "Edit",
    time:'9 mins'},
    {content:'9This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    btn1name: 'View',
    btn2name: "Edit",
    time:'9 mins'}];

class ImageList extends React.Component{
    render(){
        return(
            <div className="album py-5 bg-light row">
              <ImageBox list={list[0]}/>
              <ImageBox list={list[1]}/>
              <ImageBox list={list[2]}/>
              <ImageBox list={list[3]}/>
              <ImageBox list={list[4]}/>
              <ImageBox list={list[5]}/>
              <ImageBox list={list[6]}/>
              <ImageBox list={list[7]}/>
              <ImageBox list={list[8]}/>
            </div>
        )
    }
}

export default ImageList;