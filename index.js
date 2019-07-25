// Add your code here

const body= document.querySelector("#body")
function submitData(userName, userEmail){
   return fetch("http://localhost:3000/users",
{
    method: "POST", 
    headers:{
    "Content-Type": "application/json",
    "Accept": "application/json"
},
body: JSON.stringify({
    name: `${userName}`,
    email: `${userEmail}`
    })
})
.then(function parseJSON(resp){
    return resp.json()
})
.then(function displayData(resp){
    document.body.innerHTML = resp["id"]
})
.catch( function ( error ) {
            document.body.innerHTML = error.message
          } ) 
}

