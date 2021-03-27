let url = 'http://myapi-profstream.herokuapp.com/api/1771c6/books'



document.querySelector('#newBooks').addEventListener('submit', async(event) => {
    event.preventDefault();

    const title = document.querySelector('#newTitle').value
    const author = document.querySelector('#newAuthor').value

    const release_date = "2021"
    const image = '/Users/savan/Documents/GAHomework/GroupProject/image/BookCover.png'


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