// alert("HELLO WORLD")
// var a='b';
// var b='A';
// var c=b+a;
// //alert(c);
// alert(c)
// var x=10;
// var c=x++ + ++x -x + x++ - ++x +x;
// alert(c)
// by using alert a pop up is generated
// by using log a log in console is generated 
// alert("WELCOME TO MY WEBSITE")
// alert("JAVASCRIPT ALERT \nError!Please Enter a Valid Password")
// alert("Welcome to JS land........\nHappy Coding..")
// alert("Welcome ToJs Land");
// alert()
// for(var a=1;a<=100;a=a+10){
//     for (var b=a;b<=a+9;b++){
//         document.write(b + "  ");
//     }
//     document.write("<br>");
// }
// var city=prompt("Enter your city:");
// city=city.toLowerCase()
// var arr=["Karachi","Isl","Pesda"]

// for (var i=0;i<arr.length;i++){
//     if(arr[i]===city){
//         alert("city found")
//     }
//     else{
//         alert("not found")
//     }
// }

// document.write("<h1>asdfg</h1>\n <p>asdfgh</p>");
// var a=4
// var b=3
// document.write("SUM of"+a+"and "+b +"is"+a+b);
// var c=a+b
// document.write("SUM of &nbsp ",a,"and &nbsp",b ,"is",c);
// var a;
// document.write("Value after variable declaration is &nbsp",a);
// var a=4;
// for (i=1;i<=10;i++){
//     document.write("4*",i,"=",a*i,"<br>")
// }
// var p1=650;
// var p2=100
// var q1=3
// var q2=7
// var sc=100
// var tc=(p1*q1)+(p2*q2)+sc
// document.write("<h1>Shopping Cart</h1>")
// document.write("Price of item 1 is:",p1)
// document.write("Price of item 2 is:",p2)
// document.write("Quantity of item 1 is:",q1)
// document.write("Quantity of item 2 is:",q2)
// document.write("Shipping charges is:",sc)
// document.write("</br>")
// document.write("</br>")
// // document.write("Total Cost  is:",tc)
// var a1=prompt("Enter Subject Name")
// var a2=prompt("Enter Subject Name")
// var a3=prompt("Enter Subject Name")
// var tm=100
// var m1=prompt("Enter Marks of ",a1)
// var m2=prompt("Enter Marks of ",a2)
// var m3=prompt("Enter Marks of ",a3)
// var mm=m1+m2+m3
// var s=" "

// var p=(mm)/300
// document.write("<table><tr> <th>Subjects</th> <th>total Marks</th> <th>obtained marks</th><th>Percentage</th></tr>")
// document.write("<tr><td>",a1,"</td><td>",tm,"</td><td>",m1,"</td><td>",m1,"</td></tr>")
// document.write("<tr><td>",a2,"</td><td>",tm,"</td><td>",m2,"</td><td>",m2,"</td></tr>")
// document.write("<tr><td>",a3,"</td><td>",tm,"</td><td>",m3,"</td><td>",m3,"</td></tr>")
// document.write("<tr><td>",s,"</td><td>",tm,"</td><td>",mm,"</td><td>",p,"</td></tr></table>")

// var a=prompt("please give road traffic signal color:")
// a=a.toLowerCase()
// if(a==="red"){
//     document.write("Must Stop")
// }
// else if(a==="Yellow"){
//     document.write("Ready to move")
// }
// else{
//     document.write("Move Now")
// }

// var m3=Number(prompt("Enter Marks Obtained "))
// var tm=Number(prompt('Enter total Marks'))
// var mm=(m3)/tm
// var p=mm*100
// var g='fail'
// var r="SORRy"
// if (p>=80){
//     g="A-one"
//     r="Excellent"

// }
// else if (p>=70){
//     g="A"
//     r="Good"

// }
// else if(p>=60){
//     g="B"
//     r="You Need To improve"

// }
// else{
//     r="SORRy"
//     g='fail'
// }
// document.write("<h1>Mark Sheet</h1>")
// document.writeln("</br>Total marks",tm)
// document.writeln("</br>marks Obtained",m3)
// document.writeln("</br>Percentage{p}",p)
// document.writeln("</br>Grade",g)
// document.writeln("</br>Remarks",r)
// ***************************************
// Events
// function foo(){
//     alert("HI")
// }
function Greet(msg,alertGreet){
    
    if (msg==='MORNING'){
        Morning(alertGreet)
    }
    else if (msg==='EVENING'){
        Evening(alertGreet)
    }
    else if (msg==='NIGHT'){
        Night(alertGreet)
    }

}
function Morning(alertGreet){
    alert("GOOD MORNING")
    alertGreet("Iam greet")
}
function Evening(alertGreet){
    alert("EVENING")
    alertGreet("Iam greet")

}
function Night(alertGreet){
    alert("NIGHT")
    alertGreet("Iam greet")

}
function alertGreet(msg){
    alert(msg)
}
Greet("NIGHT",alertGreet)