//var button1 = document.getelementbyid ("btn1")

var button1 = document.querySelector('button');
var button2 = document.getElementById('btn2');
var button3 = document.getElementById('btn3');
var v_button  = document.getElementById("btn4");
var v_text  = document.getElementById("txt1");


// button1.addEventListener('click', function(){
// alert("Hello from addeventlistener!");
// })

//button1.onclick = function (){
  //  alert("hello")
//}

//button2.onmouseower = function(){
   // alert("Mouse is over the button! ")
//}

//button2.onmouseleave = function(){
   // alert("Mouse has left the button! ")
//}

v_button.onclick = function(){
v_text.style.color ="red";
v_text.style.backgroundColor ="lightgrey";
v_text.style.textAlgin ="center";
v_text.style.fontSize ="100px";
v_text.style.padding ="20px";
}


var btn_circle =document.getElementById(btn_circle)
var btn_rect =document.getElementById(btn_rect)
var btn_triangel =document.getElementById(btn_triangel)

var btn_circle =document.getElementById(circle)
var btn_rect =document.getElementById(rect)
var btn_triangel =document.getElementById(triangel)


btn_circle.onclick = function(){
    circle.setAttribute("class","shape_circle")
}
btn_rect.onclick = function(){
    rect.setAttribute("class","shape_rect")
}

btn_triangel.onclick = function(){
    triangel.setAttribute("class","shape_triangel")
}


btn_circle.onclick = function(){
    circle.setAttribute("class","shape_hide")
}
btn_circle.onclick = function(){
    rect.setAttribute("class","shape_hide")
}
btn_circle.onclick = function(){
    triangel.setAttribute("class","shape_hide")
}