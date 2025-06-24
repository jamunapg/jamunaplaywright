str="playwright"
console.log(str.length)
console.log(str[4])
console.log(str.charAt(3))
str1="jamuna"
str2="bangalor"
str3="learnig course"
str4=str1.concat(str2).concat(str3)
//str4=str1+str2+str3
console.log(str4)

// 1) trim method

str5="           jamuna        "
console.log(str5.trim())
console.log(str5.trimEnd())
console.log(str5.trimStart())
console.log(str5.length)
console.log(str5.trim().length)

//  2) uppercase

str6="hgferyimtjhbgdszjiopiugt"
str7=str6.toUpperCase()
console.log(str7)

//  3) lowercase

str8="GHIKNVCERTIMNVCSARTUKN"
str9=str8.toLowerCase()
console.log(str9)

//  4) substring

str10="playwright"
str11=str10.substr(0,4)
str11=str10.substr(4)
console.log(str11)

//  5) multiline

str="Jamuna\nPriya"
console.log(str)

//   6) tabline

str="Jamuna\tPriya"
console.log(str)

//   7) includes method

console.log(str10.includes("wrig"))  // true
console.log(str10.includes("jamuna"))  // false

// 4) templete litarals

str13="Delhi"
str15="delhi is polution capital"
str16="delhi is UT"
str14=`capital of india -${str13} -${str15} -${str16}`  //  you can add $ symboll you should give bactic like (``)
console.log(str14);

// string are immutable

str=("Admin","admin123")
str[0]="jamuna"
console.log(str)

// arrays are mutable     // not changing

arr="Admin","admin123"
arr[0]="jamuna"
console.log(arr)


//  replace 
//  replaceAll

str=Number(10)
price1=Number("₹108999".replace("₹","").replace(",",""))
price2=Number("₹79999".replace("₹","").replace(",",""))
total=price1+price2
console.log(total)