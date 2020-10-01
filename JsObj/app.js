obj={
    fname:'Anum',
    lname:'Jawaid',
    Age :21,
    intro:function (){
        //document.write("MY Name IS Anum") Normally we will do that
        document.getElementById('q').innerHTML="MY Name IS Anum"
        console .log("My name is Anum")
    }
}
console.log("if we direct call obj ==> ",obj)
document.getElementById('o').innerHTML=("if we direct call obj ==> ",obj)
console.log("accessing single name",obj.fname)
document.getElementById('p').innerHTML=obj.fname
//console.log(obj.intro)
obj.intro()