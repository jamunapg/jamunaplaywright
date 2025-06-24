//array functions
// arr=[]
// arr1=[2,5,8,7,4,9]
// console.log(arr1.length)

const { chownSync } = require("fs")

//particular element from the array based on index
 
// arr2=["jamuna",3,5,"jaanu",7,4,9,4,0]
// console.log(arr2[0])
// console.log(arr2[7])

//typeof 
//  arr3=["jamuna",3,5,"jaanu",7,4,9,4,0]
//   console.log (typeof[arr3])
//    console.log (typeof(arr3[0]))

//assending order

// arr4=[4,8,2,7,9,3,0,3]
// arr5=arr4.sort()
// console.log(arr5)

//arr6=["red", "pink", "White", "block", "green", "Yellow"]
//arr6=["red","pink","white","block","green","yellow"]
//arr7=arr6.sort("")
//console.log(arr7)
//console.log(arr7[2])

//reverse method
// arr6=["red", "pink", "White", "block", "green", "Yellow"]
// arr8=arr6.reverse()
// console.log(arr8)
//converting to string ( join method ) // "join" is converting string to array
// str=arr6.join("")                   // "revers" method it will reverse the all the array elements
// str=arr6.join(" ")                  // "sort" methos is sort the all the elements in assending order
// str=arr6.join()                     // "split" is converting string to array
// console.log(str)                    //  "push"add the elements in end of the array
                                       //  "unshift" add the elements in starting of the array
                                       // "pop" will remove the element off end

// string converting to array  ( split )
//  str="paanna govindaraju gari jamuna"
//  arr8=str.split(" ")   // split is converting string to array
//  arr8=str.split("") 
//  arr8=str.split("j") 
//  console.log(arr8)

// reversing method **imp
    // str1="jai hamunan"
    // revstr=str1.split("").reverse().join("")
    // revstr=str1.split("").reverse().length
    // console.log(revstr)

// push method  (end)
    //   arr=["good morning","good afternoon","good evening"]
    //   console.log(arr)
    //   arr.push("hii")
// unshift     (beging)
    //   arr.unshift("good night")
    //   console.log(arr)
// pop  ( remove end element)
    //    arr1=["sunday","monday","tuesday","ednesday","thursday","friday","saturday"]
    //   arr1.pop()
    //   console.log(arr1)
//  deleting some elements 
    //  arr1=["sunday","monday","tuesday","ednesday","thursday","friday","saturday"]
    //   arr1.pop()
    //   for(let i=0;i<=arr1.length-1;i++){
    //     arr1.pop()
    //   }
    //   arr1.shift()
    //   arr1.shift()
    //   console.log(arr1)    
  
// replace       
    // arr2=["cooking","eating","watching","sleeping"]
    // arr2[2]="talking"
    // console.log(arr2)

// includes  ( " it will give true/ false " )
    //  arr2=["cooking","eating","watching","sleeping"]  
    // arr2.includes("eating")
    // if(arr2.includes("eating")){
    //     console.log("elements is present")
    // }

    // arr2.includes("meating")
    // if(arr2.includes("meating"))
    //     console.log("elements is present")
    
    // else{
    //     console.log("elements is not present")
    // }

    //indexOf
    //console.log(arr2.indexOf("eating"))

    // concat method
    //    arr2=["cooking","eating","watching","sleeping"] 
    //    arr3=["playing","dancing","talking"]
    //    arr4=arr2.concat(arr3)
    //    console.log(arr4)

    // // slice method
    //  arr5=arr2.slice(1,3)   
    //  console.log(arr5)
    // // splies  ( removing )
    //    arr2.splice(2,3)
    //    console.log(arr2) 
    //    // adding splice
    //    arr2.splice(0,2,"dinking")
    //    console.log(arr2) 

    //looping elements in array
    arr2=["cooking","eating","watching","sleeping"]
    // arr2.forEach(Element =>{
    // console.log("loop start")
    // console.log(Element)
    // console.log("loop end") 

    // });

    // for loop element    
    for(let Element of arr2){
    console.log("loop start")
    console.log(Element)
    console.log("loop end")
    }