class Person{
constructor(name){
    this.name = name;
}
    Walk(){
        console.log("walk");
    }
}

class Teacher extends Person{
    constructor(name, degree){
        super(name);
        this.degree = degree;
    };
    teach(){
        console.log("teach");
    }
}

const teacher = new Teacher('Tanuj', 'Csc');
console.log(teacher);
