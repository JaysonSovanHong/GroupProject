
let fetchUrl = url('http://myapi-profstream.herokuapp.com/api/05b3e0/books')


document.querySelector('#newBook').addEventListener('submit', async(event) => {
    event.preventDefault();

    const title = document.querySelector('#newTitle').value
    const author = document.querySelector('#newAuthor').value

    const release_date = "2070"
    const image = 'cool picture'
    

    const body = JSON.stringify({ title, author, release_date, image })

    const res = await fetch("http://myapi-profstream.herokuapp.com/api/5e06aa/books", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body
    })
    const data = await res.json()

    fetch('http://myapi-profstream.herokuapp.com/api/5e06aa/books')
        .then(response => response.json())
        .then(data => (data));

       

})

 
