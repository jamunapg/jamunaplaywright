// 1) encapsulation   // binding the data between different methods

const { count } = require("console")

// class employee {
//     empdetails(value1, value2, value3, value4) {
//         this.employeeName = value1
//         this.employeePlace = value2
//         this.employeeOrg = value3
//         this.employeeAge = value4
//     }
//     printEmployeeDetails() {
//         console.log(this.employeeName)
//         console.log(this.employeePlace)
//         console.log(this.employeeOrg)
//         console.log(this.employeeAge)
//     }
// }
// //object
// const emp1 = new employee()
// emp1.empdetails("jamuna", "atp", "dbs", "25")
// emp1.printEmployeeDetails()


//  2) inheritance

// baseclass/parentclass
// derivedclass/childclass
// single inheretence from one class to another class
// supported in javascript
// single and multilevel inheritance supported  
// base class supported( hirarchical inheritance)
// not supported in javascript
// multiple inheritance is not possible(through inheritance)  
// hybrid also not supported
class a {
    m1() {
        console.log("this is m1 method")
    }
    m2() {
        console.log("this is m2 method")
    }
    m3() {
        console.log("this is m3 method")
    }
    m4() {
        console.log("this is m4 method")
    }
}

class b extends a {
    m5() {
        console.log("this is m5 method")
    }
    m6() {
        console.log("this is m6 method")
    }
    m7() {
        console.log("this is m7 method")
    }
    m8() {
        console.log("this is m8 method")
    }
}

class c extends b {
    m9() {
        console.log("this is m9 method")
    }
    m10() {
        console.log("this is m10 method")
    }
    m11() {
        console.log("this is m11 method")
    }
    m12() {
        console.log("this is m12 method")
    }
}
//const jamuna=new b()
const jamuna = new c()
jamuna.m1()  //a
jamuna.m8()  // b
jamuna.m11()  // c

// 3) pholimarphism

// both supported
// inthat method overriding
// inthat method overloding

class A{
    printHiMessage(){
      console.log("hii hello")
    }
 add (num1,num2){
    console.log(num1)
    console.log(num2)
    console.log(num1+num2)
 }

}

class B extends A{
    printHiMessage(){
      console.log("hii Goodmorning")
    }
 add (num1,num2,num3){
    console.log(num1)
    console.log(num2)
    console.log(num3)
    console.log(num1+num2+num3)
 }

}
//const jammu=new A()  //hii hello
const jammu=new B()  // hii goodmorning
jammu.printHiMessage()
jammu.add(4,2,8,5)  // 14


