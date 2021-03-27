let url = 'http://myapi-profstream.herokuapp.com/api/71e5d6/books'



document.querySelector('#newBooks').addEventListener('submit', async(event) => {
    event.preventDefault();

    const title = document.querySelector('#newTitle').value
    const author = document.querySelector('#newAuthor').value

    const release_date = "2021"
    const image = 'https://i.pinimg.com/originals/b9/03/7d/b9037d7dbbd779cafc88574420b088de.gif'


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