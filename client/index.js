import React from "react";
import ReactDOM from "react-dom";
import { getRoot } from './api';

const App = () => {


    getRoot().then(res => {
        console.log('res',res);
    },err => {
        console.log('err', err);
    });

    return (
        <div className='main'>
            <p>11111</p>
        </div>
    );
};


ReactDOM.render(<App/>, document.getElementById("app"));