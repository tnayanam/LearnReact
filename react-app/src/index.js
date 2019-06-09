// Object Destructuring

const address =  {
street: '',
city:'',
country:''
};

// bad way
// const street = address.street;
// const city = address.city;
// const country = address.country;
//---------------------------
// const  {street, city, country} = address; 
// ------------------------------
// const  {street} = address;

// ----------------------------
const{street: st} = address;


