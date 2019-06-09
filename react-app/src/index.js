const square = number => number * number;

console.log(square(4));


const jobs =[
    {id: 1, IsActive : true},
        {id: 2, IsActive : true},
        {id: 3, IsActive : true},
        {id: 4, IsActive : false
        }];

const activejobs = jobs.filter(job=> job.IsActive);

console.log(activejobs);



