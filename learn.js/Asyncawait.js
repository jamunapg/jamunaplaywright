async function myFunction() {
    return "Hello";
  }
 //or
// function myFunction() {
//     return Promise.resolve("Hello");
//   }
const getData = async () => {
    let y = await "Hello People";
    console.log(y);
}

 getData();

async function step1(value) {
    return value + 10;
  }
  async function step2(value) {
    return value + 10;
  }
  async function step3(value) {
    return value + 10;
  }  
  async function run() {

      let result1 = await step1(10);    //20
      let result2 = await step2(result1);  //30
      let result3 = await step3(result2); //40
      console.log("Results " + result3);
  }
   run();
  //=====================================================

 // Advantages of Async and Await
      //Improved Readability: Async and Await allow asynchronous code to be written 
      // in a synchronous style, making it easier to read and understand.


    //Error Handling: Using try/catch blocks with async/await simplifies error handling.
    
    //Avoids Callback Hell: Async and Await prevent nested callbacks and complex promise chains, 
    // making the code more linear and readable.


    //Better Debugging: Debugging async/await code is more intuitive since it behaves similarly to synchronous code.

    // ===============================