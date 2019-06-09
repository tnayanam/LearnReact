// Spread Operator
const first = [1,2,3];
const second = [4,5,6];

// const combined =  first.concat(second); bad way
const combined = [...first ,'a',...second]; // output array like 1 ,2 ,3 a, 4 ,5 ,6


// lets combine two objects

const test2 = {
    job: 'instrucotr'
};
const test1 = {
    name: 'Mosh'
};

const comb = {...test1 , ...test2};

console.log(comb);  // Output - {name: "Mosh", job: "instrucotr"}
