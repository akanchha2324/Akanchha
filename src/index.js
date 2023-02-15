import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import "bootstrap/dist/css/bootstrap.css";

// let curDate= new Date();
// curDate=curDate.getHours();
// let greeting = "";
// const cssstyle ={};//inline css

// if(curDate>=1 && curDate<12){
//    greeting="Good Morning";
//    cssstyle.color='green';
// }
// else if (curDate>=12 && curDate<19){
//     greeting="Good Afternoon";
//     cssstyle.color='orange';
// }
// else{
//     greeting='Good Night';
//     cssstyle.color='black';
// }

ReactDOM.render(<App/>, document.getElementById('root'));
