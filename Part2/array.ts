let myArray: (number | string | boolean)[] = [100, "Adam", true ];
for(let i = 0 ;i <myArray.length; i++){
    console.log("Index " + i + ": " + myArray[i]);
}
let otherArray = [...myArray, 200, "Bob", false];

console.log("---");

myArray.forEach((val, ind) => console.log("Index " + ind + ": " + val) );

let sum: number = otherArray.filter(val => typeof(val) == "number").reduce((total:number,val)=>total+(val as number),0)