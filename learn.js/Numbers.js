// console.log("10"-5)  // 5
// console.log("jamuna"-5)  //NaN
// console.log(30+undefined)  //NaN
// console.log (isNaN(30+ undefined))  // true
// console.log(isNaN(30+34))   // false

// // number is converted into string

num=String(45)
console.log(typeof(num))

//  string is converted into number

str=Number("40")
console.log(typeof(str))

// parsflow get flooting point values

str=parseInt("10.5")
console.log(str)


// big intiger

console.log (2**55)
 num1=3602879701765588963970n
 num2=5n
 total=num1+num2
console.log(total)   //36028797018963970


// math conditions
// maximum

max = Math.max(40,30,55,88,33,35,39,58,63)
console.log(max)

// minimum

minm = Math.min(40,30,55,88,33,35,39,58,63)
console.log(minm)

// math ceil

x= Math.ceil(20.4)  // 21  upper intiger
console.log(x)

//  math floor

y= Math.floor(12.8)  //12   lower intiger
console.log(y)

// pow method

console.log(Math.pow(2,8))  //  256 qubes


// squer root

x= Math.sqrt(81)  // 9
console.log(x)

// random number ( randamly different number is generated )

a= Math.random()
console.log(a)