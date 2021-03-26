document.getElementById("allBook").addEventListener("click", function() {
    fetchFunc()
});

let data = []



function fetchFunc() {
fetch('http://myapi-profstream.herokuapp.com/api/8debf4/books') 
    .then(response => response.json())
    .then(data => 
        {const container = document.querySelector('#viewArea');
        removeAllChildNodes(container);
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

function removeAllChildNodes(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}




 function clickBook(bookId){
        document.getElementById(bookId).addEventListener("click", function(){
            // console.log(bookId);
            fetch('http://myapi-profstream.herokuapp.com/api/8debf4/books/' + bookId) 
                .then(response => response.json())
                .then(data => printBook(data))
        })
        // document.getElementById("2938").addEventListener("click", function(){
        //     console.log('test click');
        // })
        // document.getElementById("2939").addEventListener("click", function(){
        //     console.log('test click');
        // })
        // document.getElementById("2940").addEventListener("click", function(){
        //     console.log('test click');
        // })
        // document.getElementById("2941").addEventListener("click", function(){
        //     console.log('test click');
        // })
        // document.getElementById("2942").addEventListener("click", function(){
        //     console.log('test click');
        // })
        // document.getElementById("2943").addEventListener("click", function(){
        //     console.log('test click');
        // })
        // document.getElementById("2944").addEventListener("click", function(){
        //     console.log('test click');
    //     })
     }}

