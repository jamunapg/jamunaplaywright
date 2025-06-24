
collage={

    name: "NSPR",
    place:"hdp",
    braches:"bcom,ba",
    totalstudents:"100",
    totalteachers:"10"
}
console.log(collage['braches'])
//console.log(collage.braches)
collage['palce']="atp"//updating
console.log(collage['place'])
console.log(collage.principalname)//undefined

collage['principalname'] = "mohan"//adding new functionality
console.log (collage.principalname)

delete collage['totalteachers'] //deleting
console.log(collage.totalteachers)


//meanuitems

Menuitems ={
    menu1 :"Admin",
    menu2 :"PIM",
    menu3 :"leave"
}

 for (let item in Menuitems){
 console.log("loop starts")
 console.log(item)
       console.log("loop Ends")
 
 }
