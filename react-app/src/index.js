// Default Export
// Named export
 
import Teacher, { Promote} from './Teacher';

const teacher = new Teacher('Tanuj', 'Csc');
console.log(teacher);
console.log(Promote);
// coz we used default we dont need curly braces anymore and default Teacher class wil be imported
