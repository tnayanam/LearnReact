const person = {
    name: "Mosh",
    walk(){
            console.log(this);
    }
};

person.walk(); // here this returns the actual object

var test = person.walk.bind(person);

test(); //here this returns the windows object


