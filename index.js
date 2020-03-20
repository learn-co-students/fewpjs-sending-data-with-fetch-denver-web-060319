const formatData = {
    name: 'Steve',
    email: 'steve@steve.com'
}

const submitData = (name, email) => {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formatData)
    })
    .then(response => response.json())
    .then(response => { 
        const body = document.body
        const h1 = document.createElement('h1')
        const h2 = document.createElement('h2')
        h1.innerHTML = response.id
        h2.innerHTML = response.name
        body.appendChild(h1)
        body.appendChild(h2)
    })
    .catch((error) => {
        const body = document.body
        const h1 = document.createElement('h1')
        const h2 = document.createElement('h2')
        h1.innerHTML = error.message
        h2.innerHTML = error.code
        body.appendChild(h1)
        body.appendChild(h2)
        console.log(error.message)
        console.log(error)
    })
}

document.addEventListener('DOMContentLoaded', () => {
    submitData()
})

