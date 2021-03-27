document.getElementById("allBook").addEventListener("click", function() {
    fetchFunc()
});

let data = []



function fetchFunc() {
fetch('http://myapi-profstream.herokuapp.com/api/94adb7/books') 
    .then(response => response.json())
    .then(data => 
        {const container = document.querySelector('#viewArea');
        removeAllChildNodes(container);
        var head = document.createElement('p');
        var t = document.createTextNode("Index of All Books");
        head.appendChild(t);
        document.getElementById('viewArea').appendChild(head);
        {for(i = 0; i < data.length; i++){allBook(data[i])}

        
   
}});






function allBook(x) {
    var book = document.createElement('p');
    book.id = x.id;
    var textnode = document.createTextNode(x.title);
    book.appendChild(textnode);
    document.getElementById('viewArea').appendChild(book);
    console.log(book)
    clickBook(book.id);
}

function printBook(x) {

    const container = document.querySelector('#viewArea');
    removeAllChildNodes(container);

    var head = document.createElement('p');
    var t = document.createTextNode("Details for " + x.title);
    head.appendChild(t);

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
    
    
    document.getElementById('viewArea').appendChild(head);
    document.getElementById('viewArea').appendChild(bookTitle);
    document.getElementById('viewArea').appendChild(bookAuthor);
    document.getElementById('viewArea').appendChild(bookRelease);
    document.getElementById('viewArea').appendChild(bookImage);

    console.log(bookTitle)
    console.log(bookAuthor)
    console.log(bookRelease)
    
}

function removeAllChildNodes(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}




 function clickBook(bookId){
        document.getElementById(bookId).addEventListener("click", function(){
                fetch('http://myapi-profstream.herokuapp.com/api/94adb7/books/' + bookId) 
                .then(response => response.json())
                .then(data => printBook(data))
        })
 }
}
