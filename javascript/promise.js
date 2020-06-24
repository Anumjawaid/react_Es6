// let promise= new Promise(function(resolve,reject){
    // Syntax
// })
userInput=prompt("Input")
function success(){
    alert("Success")
}
function failure(){
    alert("Failure")
}
function chkUseProm(userInput){
const chkPromise=new Promise(function(resolve,reject){
       if (userInput){
           resolve()
           alert("sdf")
       }
       else{
           reject()
       }
    })
}