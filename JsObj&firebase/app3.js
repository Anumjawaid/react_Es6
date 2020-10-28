function Save(){
    var name=document.getElementById('name')
var pw=document.getElementById('pw')
    var login={
        name:name.value,
        password:pw.value
    }
    console.log(login)
    // firebase.database().ref('logininfo').set(login)       //THIS WILL ADD A SINGLE OBJ WITH VALUES
    // firebase.database().ref('logininfo/user').set(login)    //THIS WILL ADD AN OBJECT OF OBJECT WITH VALUES
    // firebase.database().ref('logininfo/user').push(login)  //generate awith A KEY
    //   in order to generate a key without a push
    // var k=+Math.random()*8
    var k=firebase.database().ref('login').push().key
    console.log(k)
     firebase.database().ref('logininfo/st/'+k).set(login) //this will add a user with a key
}
// console.log(firebase)
// console.log(firebase.database)
function GetData(){
    firebase.database().ref('logininfo').once('value',function(data){
        console.log(data.val())
    })
}
function GetRealData(){
    firebase.database().ref('logininfo').on('child_added',function(data){
        console.log(data.val())
    })
}
function Chalnikal(){
    firebase.database().ref('logininfo').remove()
}
function chalbadal(){
    firebase.database().ref('logininfo/st').set({
        name:'',
        pw:''
    })
}
GetData()
GetRealData()
// Chalnikal()