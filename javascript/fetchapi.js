// console.log("Fetch")
// const api=fetch('https://jsonplaceholder.typicode.com/todos/1')  //this will only return a promise
// console.log(api)
async function Fetch(){
    const api=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(api,"API") 
    const con=await api.json()
    console.log(con,'json')


}
Fetch()

