function hello(){
    console.log("Hello, world!");
}
hello();


console.log(1);
setTimeout(() => {
    console.log(2);
}, 3000);
console.log(3);


// sync = blocking
// async = non-blocking


async function fetchData(){
   // var response = await fetch('https://jsonplaceholder.typicode.com/users');
    var post = await fetch('https://jsonplaceholder.typicode.com/posts');
    //var data = await response.json();
    var post = await post.json();
    //console.log(data);
    console.log(post);

}
fetchData();






