// import {obj} from './app'
obj={
    fname:'Anum',
    lname:'Jawaid',
    Age :21,
    intro:function (){
        //document.write("MY Name IS Anum") Normally we will do that
        document.getElementById('q').innerHTML="MY Name IS Anum"
        console .log("My name is Anum")
    },
    hob:function(hobby){
        document.getElementById('pq').innerHTML="My hobbie is "+hobby
        console.log("My Hobbies are "+hobby)
    }
}
console.log("************************************************************************")
console.log("Properties Of Objects From here")
console.log("************************************************************************")
console.log("fname" in obj)
for (o in obj){
    console.log(o)
}
console.log("For finding the values of the properties too")

for(o in obj){
    console.log(o,obj[o])
}