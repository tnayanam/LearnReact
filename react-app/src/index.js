// import React from 'react';
// import ReactDOM from 'react-dom';

// const element = <h1>Hello World</h1>
// ReactDOM.render(element, document.getElementById('root')); // here we are adding this element to that root element in main DOM.


function sayHello(){
    for(var i = 0 ; i < 5; i++)
    console.log(i);
    console.log(i); // this prints 5 because in javascript the scope of A var keyword is not just limited to that loop. scope is for the entire function in which it is declared.
}

sayHello();