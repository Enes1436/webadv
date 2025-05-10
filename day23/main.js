// function showMessage(){
//  alert("This is a function in Javasript");
//}

//showMessage();

function sum(x,y){
    document.write(x+y);
}

sum(2,5);
document.write("<br>");
sum(55,44)
document.write("<br>");
sum(120,54)


// arrow function
// var arrowFunction = name => alert (`Hello ${name}`);

//arrowFunction("ENES")


//function testfunction(){
   // var localVar ="ENES";
   // alert(localVar)
//}

//testFunction();

var car ={name:"BMW",
color:"black",
year:2025,
kilometres:0,
startEngine: function(){
   alert("The car is moving!");
},
get getKilometers(){
    return  this.kilometres;
},
set setKilometers(km){
    this.kilometers=km;
}
};







