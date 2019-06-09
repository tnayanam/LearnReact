const person = {
    name: "Mosh",
    walk(){
            console.log(this);
    }
};

person.walk(); // here this returns the actual object

var test = person.walk;

test(); //here this returns the windows object


