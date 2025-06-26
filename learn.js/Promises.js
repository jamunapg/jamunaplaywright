// const p = new Promise ((resolve,reject) => {
//    let x=2;
//    //let x=20;
//    if (x===2){
//     resolve("Success")
//    } else {
//     reject("Fail")
//    }
// });
// console.log(p)  // promis{ success}

// 1) p.then

// p.then(message=>console.log(message)) // then   // promis
// console.log(p)  // promis { fail}

// 2) .catch

// .catch(message=>console.log(message)) // catch  // fail
//p.then(message=>console.log(message),message=>console.log(message))  // both excecute ( p.then/catch)

//  3) resolve

// p = Promise.resolve("Success")
// console.log(p)

//  4) reject

p = Promise.reject("jamuna")
console.log(p)
p.catch(message=>console.log(message))

// 5) . finally
.finally(console.log("promises finally"))

// 3 types of prmises
// 1) pending
//  2) resolved
//  3) rejected