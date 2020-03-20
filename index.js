let userData = {
    name: 'Steve',
    email: 'steve@steve.com'
};


let userObject = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(userData)
};

function submitData(name, email) {
    return fetch('http://localhost:3000/users', userObject)
    .then(resp => resp.json())
    .then(object => {
        document.body.append(object.id)
    })
    .catch(function(error) {
        let message = 'Unauthorized Access'
        document.body.append(error.message)
        
    })
};

document.addEventListener('DOMContentLoaded', function() {
    submitData()
})