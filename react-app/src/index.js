// // import React from 'react';
// // import ReactDOM from 'react-dom';

// // const element = <h1>Hello World</h1>
// // ReactDOM.render(element, document.getElementById('root')); // here we are adding this element to that root element in main DOM.


// function sayHello(){
//     for(let i = 0 ; i < 5; i++)
//     console.log(i);
//     console.log(i); // now here we are getting error as i is not defined. so scope of i is limited the loop 
// }

// sayHello();
// Objects in javascript are collection of key value pairs.
const person = {
name: 'Mosh', // one property
walk: function(){}, // one function
talk(){}            // another way to add a function
};

person.talk();
person.name = 'John';