// let arr = []
let booksId = null
    // const all = document.querySelector('.all')
    // const index = document.querySelector('#test')

fetch('http://myapi-profstream.herokuapp.com/api/124d70/books')
    .then(response => response.json())
    .then(data => console.log(data));


//title
//author
//Release Date

document.querySelector('#newBook').addEventListener('submit', async(event) => {
    event.preventDefault();

    const title = document.querySelector('#newTitle').value
    const author = document.querySelector('#newAuthor').value

    const release_date = "2070"
    const image = 'cool picture'
    form

    const body = JSON.stringify({ title, author, release_date, image })

    const res = await fetch("http://myapi-profstream.herokuapp.com/api/124d70/books", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body
    })
    const data = await res.json()

    fetch('http://myapi-profstream.herokuapp.com/api/124d70/books')
        .then(response => response.json())
        .then(data => console.log(data));

})

document.querySelector('#deleteBook').addEventListener('click', async() => {
    await fetch(`http://myapi-profstream.herokuapp.com/api/124d70/books/${booksId}`, { method: 'DELETE' })
})




// let books = async() => {
//     let getBook = await fetch("http://myapi-profstream.herokuapp.com/api/124d70/books")
//     let data = await getBook.json()
//     for(let i = 0; i < data.length; i++){
//         console.log(data[i].title)
//         arr.push(data[i].title)

//     }
//     console.log(data)
//     let text = arr.join(' ')
//     index.innerText = text;

// }
// books()

// all.addEventListener('click', () => {
//     index.innerHTML = books().then(data => console.log(data))
// })