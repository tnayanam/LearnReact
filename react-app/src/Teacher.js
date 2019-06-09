
import {Person} from './Person';

function Promote(){};  // one independent method

export default class Teacher extends Person{  //one class
    constructor(name, degree){
        super(name);
        this.degree = degree;
    };
    teach(){
        console.log("teach");
    }
}
