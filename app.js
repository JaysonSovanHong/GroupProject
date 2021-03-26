console.log('cloud strife')




document.getElementById("allBook").addEventListener("click", function(){
    fetchFunc()
});



function fetchFunc() {
fetch('http://myapi-profstream.herokuapp.com/api/22a96c/books') 
    .then(response => response.json())
    .then(data => {for(i = 0; i < data.length; i++){addBook(data[i])
    // .then(clickBook)
}});


function addBook(x) {
    var book = document.createElement('p');
    book.id = x.id;
    var textnode = document.createTextNode(x.title);
    book.appendChild(textnode);
    document.getElementById('viewArea').appendChild(book);
    console.log(book)
}


 function clickBook(){
        document.getElementById("2937").addEventListener("click", function(){
            console.log('test click');
        })
        document.getElementById("2938").addEventListener("click", function(){
            console.log('test click');
        })
        document.getElementById("2939").addEventListener("click", function(){
            console.log('test click');
        })
        document.getElementById("2940").addEventListener("click", function(){
            console.log('test click');
        })
        document.getElementById("2941").addEventListener("click", function(){
            console.log('test click');
        })
        document.getElementById("2942").addEventListener("click", function(){
            console.log('test click');
        })
        document.getElementById("2943").addEventListener("click", function(){
            console.log('test click');
        })
        document.getElementById("2944").addEventListener("click", function(){
            console.log('test click');
        })
    }}