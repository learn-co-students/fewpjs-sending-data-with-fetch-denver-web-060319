// Add your code here

function submitData(name, email)
{
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({name, email})
  };
       
   return fetch( "http://localhost:3000/users", configObj)
    .then(function(response) {
        return response.json();
      })
    .then(function(object) {
    console.log(object);
    const body = document.querySelector("body")
    body.append(object["id"])
    })
    .catch(function(error){
      const body = document.querySelector("body")
        body.innerHTML = error
    })
}