//let n: number = 4;
//n = 5; // OK
//n = 'four'; // Error!

// let s: string = 'hello';
// s = 'hi'; // OK
// //s = null; // Error!

// let n: number;
// n = 42; // OK
// n = 'hello'; // Error!
// n = null; // Error!

let n: number = 1;
let s: string = 'hi';
let b: boolean = true;

let missing: undefined = undefined;
let nothing: null = null;

let state: 'alive' | 'dead';
state = 'alive'; // OK
state = 'dead'; // OK
// state = 'thriving'; // Error!

function add(a: number, b: number): number {
    return a + b;
}
add(140, 60); // 200
//add('oh', 'no'); // Error!


const concat = (a: string, b: string): string => {
    return a + b;
}
concat('oh', 'yeah'); // 'ohyeah'
//concat(40, 4); // Error!

const digits: number[] = [1,2,3];
digits.push(4); // OK
digits.push('no go'); // Error!

const letters: string[] = 'hello'.split();
letters.push('!'); // OK
//letters.push(5); // Error!

// let user: {name: string, id: number}; 
// user = {name: 'Anjana', id: 1234};
// user.name = 'Nanjana'; // OK
// user.id = 4321; // OK
// //user.name = null; // Error!
// //user.id = '1234'; // Error!
// //user.color = 'blue'; // Error!

let user: {
    id: number, 
    username: string, 
    fullname?: string,
}; 
user = {id: 1, username: 'anjana'}; // OK


user = {
    id: 2, 
    username: 'nanjana',
    fullname: 'Not Anjana'
}; // OK
delete user.fullname; // OK


//user = {username: 'anjana'}; // Error!


let numberOrString: number | string; 
numberOrString = 4;
// OK
numberOrString = '4';
// OK
//numberOrString = null; // Error! 

let nullishNumber: number | null;
nullishNumber = 4;
// OK
//nullishNumber = '4';
// Error!
nullishNumber = null; // OK
