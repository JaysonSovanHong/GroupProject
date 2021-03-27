let url = 'http://myapi-profstream.herokuapp.com/api/db4401/books'



document.querySelector('#newBooks').addEventListener('submit', async(event) => {
    event.preventDefault();

    const title = document.querySelector('#newTitle').value
    const author = document.querySelector('#newAuthor').value

    const release_date = "2070"
    const image = 'cool picture'


    const body = JSON.stringify({ title, author, release_date, image })

    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body
    })
    const data = await res.json()
    printBook(data)
    

})


