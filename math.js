import {randomFunc,newFunc,addMe,subMe,divMe,modMe,multiMe} from "./data/math_api.js"
//variables to test
let a = 4;
let b = 5;

//Plugging in the functions that were imported from math_api.js

//Example of imported function
randomFunc()

let sum = addMe(a,b)
console.log(sum)

let diff = subMe(sum,b)
console.log(diff)

let div = divMe(a,diff)
console.log(div)

let mod = modMe(div+b,b)
console.log(mod)

let multi = multiMe(mod*5,5)
console.log(multi)

//newFunc
let arr = ['I love', 'burgers', 'to code!']
let res = newFunc(arr)
console.log(res)

