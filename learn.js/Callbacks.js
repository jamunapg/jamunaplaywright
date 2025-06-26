const { chownSync } = require("fs")
const { sourceMapsEnabled } = require("process")

function greet() {
    console.log("hii hello")
}
function greet1(value) {
    console.log("Good morning  " + value)
}
function printmessage(value) {
    greet()
    console.log(value)
}
function printmessage(value,value1,callback) {
    let x = value1
    //callback(x)
    callback()
    console.log(value);
}

// printmessage("jamuna",greet)
printmessage("jamuna","how are you", greet1)



function myDisplayer(some){
    console.log(some)
}
function squerthenum(num1){
    console.log(num1*num1)
}
function numbytwo(num1){
 console.log(num1/2)
}
function myCalculator(num1,num2,callback){
    let sum=num1+num2;
    callback(sum)
}
myCalculator(5,5,squerthenum)
myCalculator(5,5,myDisplayer)
myCalculator(5,5,numbytwo)

let numbers=[1,2,3,4,5]
function processArray(arr,callback){
    for(let i=0;i<arr.length;i++){
        callback(arr[i])
    }      
}

function devidewith2(number){
    console.log(number/2)
}

function doubleAndPrint(number){
    console.log(number*2)
}
processArray(numbers,devidewith2)  // 05,1,1.5,2,2.5
processArray(numbers,doubleAndPrint)  // 2, 4, 6, 8, 10

let arr2=[1,2,3,4,5,6]
let evenNumbers=numbers.filter(number=>number % 2 ===0)
console.log(evenNumbers)