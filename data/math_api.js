//Example of an exported function
export function randomFunc(){
    console.log('This is an exported function')
}

export function addMe(a,b){
    return a + b
}
export function subMe(a,b){
    return a - b
}
export function divMe(a,b){
    return a/b
}
export function modMe(a,b){
    return a % b
}
export function multiMe(a,b){
    return a * b
}

export function newFunc(arr){
   return arr[0] + arr[arr.length-1]
}
