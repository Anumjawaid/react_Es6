
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