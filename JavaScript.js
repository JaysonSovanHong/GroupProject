// let arr = []
// let booksId = null
    // const all = document.querySelector('.all')
    // const index = document.querySelector('#test')

// fetch('http://myapi-profstream.herokuapp.com/api/5e06aa/books')
//     .then(response => response.json())
//     .then(data => console.log(sumbitBook()));
// let data = []
let fetchUrl = url('http://myapi-profstream.herokuapp.com/api/05b3e0/books')
//title
//author
//Release Date

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
        .then(data => sumbitBook(data));

       

})

 
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}




function sumbitBook(x){
    const container = document.querySelector('#viewArea');
    removeAllChildNodes(container);
    console.log('test')



    var bookTitle = document.createElement('p');
        var textnode = document.createTextNode(x.title)
        bookTitle.appendChild(textnode);

        var bookAuthor = document.createElement('p');
        var textnode2 = document.createTextNode(x.author)
        bookAuthor.appendChild(textnode2);

        var bookRelease = document.createElement('p');
        var textnode3 = document.createTextNode(x.release_date)
        bookRelease.appendChild(textnode3);

        var bookImage = document.createElement('img');
        bookImage.src = x.image





        document.getElementById('viewArea').appendChild(bookTitle);
        document.getElementById('viewArea').appendChild(bookAuthor);
        document.getElementById('viewArea').appendChild(bookRelease);
        document.getElementById('viewArea').appendChild(bookImage);

        console.log(bookTitle)
        console.log(bookAuthor)
        console.log(bookRelease)
}




























// document.querySelector('#deleteBook').addEventListener('click', async() => {
//     await fetch(`http://myapi-profstream.herokuapp.com/api/124d70/books/${booksId}`, { method: 'DELETE' })
// })




