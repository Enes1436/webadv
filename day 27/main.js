// for loop
let text1="";

for(let i =0; i<10; i++){
    text1+="The number is  "+ i +"<br>";
}

document.getElementById("demo1").innerHTML = text1;

//for loop

const cars =["BMW" , "VOLVA" , "SAAB" , "FORD" , "FIAT" , "AUDI"];

let text = "";

for(let i=0; i<cars.length; i++){
    text += cars[i] +"<br>";
}
document.getElementById("demo").innerHTML = text;

//For//in

const person ={name:"ENES", lastname:"MENXHIQI", age:14};

let txt = "";

for(let x in person){
    txt += person[x] + " ";
}

document.getElementById("demo2").innerHTML = txt;

//For/of

const ds =["Code", "Scratch", "Wed", "Js", "Wordpress", "Python", "AI/ML", "React native"];

let text3 = "";

for(let x of ds){
    text3+=x+"<br>";
}
//for/of 2

let language = "Javascript";

let text5="";

for(let x of language){
    text5+=x+"<br>";
}

document.getElementById("demo2").innerHTML = text5;



document.getElementById("demo3").innerHTML = text3;

//while loop

let text4 ="";
let i =0;
while(i<10){
    text4 += "This number is"+ i +"<br>";
    i++
}

document.getElementById("demo4").innerHTML = text4;

//do while loop

let text6 ="";
let j =0;

do{
    text6 += "<br> the number is"+j;
    j++
}while(j<10);

document.getElementById("demo6").innerHTML = text6;

//

var students = ["ILMA" , "ELMA" ,"ERONA"];
    
for(let i=0; i<students.length; i++){
    document.write('<br>'+students[i])
}