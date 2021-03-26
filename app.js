console.log('cloud strife')




document.getElementById("allBook").addEventListener("click", function(){
    fetchFunc()
});



function fetchFunc() {
fetch('http://myapi-profstream.herokuapp.com/api/22a96c/books') 
    .then(response => response.json())
    .then(data => {for(i = 0; i < data.length; i++){addBook(data[i])
    .then(clickBook());
}

// var myBookObj = data[i];
// title = myBookObj.title;
// console.log(myBookObj);





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


 }

// const allBooks = document.querySelector('#allBook').addEventListener("click", function(){
    
// })

// async function postData(url = 'http://myapi-profstream.herokuapp.com/api/81a7af/books', data = {}){
//     const response = await fetch(url, {
//         method: 'POST',
//         mode: 'cors',
//         cache: 'default',
//         credentials: 'same-origin',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         redirect: 'follow',
//         referrerPolicy: 'no-referrer',
//         body: JSON.stringify(data)
//     })
//     return response.json();
// }

// postData('http://myapi-profstream.herokuapp.com/api/81a7af/books', { answer: 42})
//     .then(data => {
//         console.log(data);
//     })


    



// {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     }

//     body: JSON.stringify({
//         key1: "value1"

//     })
// }
