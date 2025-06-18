// A )arthematic operaters:

const { chownSync } = require("fs")

// console.log(5+10)
// console.log("jamuna"+"g")
// console.log("jamuna"+" "+"g")
// console.log("jamuna"+45)
// console.log(10+20+5+"10"+2+2)   //number is converted into string

// console.log(50-30)
// console.log(20/10)
// console.log(20*10)
// console.log(10%"2")
// console.log(20-"2")  //string is converted into number  (- , / , * , % ,)
// console.log(45-"jamuna") //nan  = not a number

// x=20
// x++   //x+1
// console.log(x)

// x=20
// x--   //x-1
// console.log(x)


// B). logical operaters
// 1). AND 
// 2). OR 
// 3). NOT 

//AND =>&&

//console.log(true&&false)
//console.log((10>5)&&(5<1))

//OR => ||

//console.log(true||false)
//console.log((10>5)||(5<1))

//NOT => !

//console.log(!(true))
//console.log(!(false))

// C).Comparission operaters
//==  it will just compare only values but not datatypes
//=== it will compare not only  values but also datatypes 
//>
//<
//<=
//>=

//1) ==
// console.log("jamuna"=="gowthami")
// console.log(35=="35")
// console.log("Jamuna"==35)
// //2) ===
// console.log(34==="34")
// console.log("Jamuna"==="Jamuna")
// //3)>
// console.log(5>2)
// //4)<
// console.log(5<2)
// //<=
// console.log(5>=5)
// //>=
// console.log(5>=8)

//D). assignment operaters
 //+=
 x=50
 x+=20
 console.log(x)
 //-=
 x=30
 x-=5
 console.log(x)
 //*
 x=20
 x*=5
 console.log(x)
 //** 
 console.log(10**5)

 //E) condition /ternary operaters
  value1="jamuna"
  value2="gowthami"
  //syntax   condition ? value1:value2
  x=5=="6"?value1:value2
  x=5=="5"?value1:value2
  console.log(x)
  x=5==="6"?value1:value2