// Array.map function

const colours = ['Red', 'Green', 'Blue'];
const item1 = colours.map(color => '<li>' + color + '</li>'); // one way
const item2 = colours.map(color => `<li>${color}</li>`); // another way

console.log(item1);

console.log(item2);
