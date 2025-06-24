// class jamuna{
//     x= 10
//     y= 20
//     add (num1, num2){
//         console.log(num1 + num2)
//     }
//     substract (num1, num2){
//         console.log(num1 - num2)
//     }
//     multiplication (num1, num2){
//         console.log(num1 * num2)
//     }
//     divide  (num1, num2){
//         console.log(num1 / num2)
//     }
// }
// // you need to create bject of this class or instancebof the class
//    const obj1=new jamuna()  // object method
//    obj1.add(5,8)
// const cal1 = new jamuna()   // class method
// cal1.add(10,4)


//  class Calculator{
//     x=10
//     y=20
//     add(num1,num2){
//     console.log(num1+num2)
//     }
//     substract(num1,num2){
//     console.log(num1-num2)
//     }
//     multiplication(num1,num2){
//     console.log(num1*num2)

//     }
//     divide(num1,num2){
//     console.log(num1/num2)
//     }
//  }
//  const cal1=new Calculator()
//  cal1.add(10,5)
//  cal1.substract(20,3)
//  console.log(cal1.x)
//  const cal2=new Calculator()
//  cal2.add(5,8)
//  cal2.add()

// constructer
// class employee{   // print message method
//     constructor(){
//         console.log("thid is one method")
//     }
//     printmessage(username, password){
//         console.log(username, password)
//     }
//     createEmployee(){
//         console.log("creat employee login here")
//     }

//  }
  //const emp1=new employee()


//  class employee{                        // constructer 
//     printmessage(){
//         console.log("thid is one method")
//     }
//     constructor(username, password){
//         console.log(username, password)
//     }
//     createEmployee(){
//         console.log("creat employee login here")
//     }
//  }
//  const emp1=new employee("jamuna","g")
//  const emp2=new employee("gowthami","g")
//  const emp3=new employee("bhavya","d")
//  const emp4=new employee("aishy","r")
//   const emp6=new employee()//  undefined

// class employee{

//     username="jamuna"
//     password= "G"

//     jamuna(){
//         console.log(this.username)
//         console.log(this.password)
//     }
//     constructor(){
//         this.jamuna()
//         console.log("thid is one method")
//     }
//    printmessage(username, password){
//         console.log(username, password)
//     }
//     createEmployee(){
//         this.printmessage
//         console.log("creat employee login here")
//     }
//  }
//   const emp1=new employee()
//   //emp1.createEmployee("abc","y")
//   emp1.jamuna()
  
  class student{
    static x="jamuna"    // static variables
    static y="jammu"
    static n1(){          // static method
        console.log("this method is n1")
    }
     static n2(){
        console.log("this method is n2")
    }
      n3(){              //  non static method
        console.log("this method is n3")
    }
     static n4(){
        console.log("this method is n4")
    }
    static n5(){
        console.log("this method is n5")
    }
  }
   
//    student.n1()
//    student.n2()
       
    const stu1=new student()
    stu1.n3()
    student.n1()
 