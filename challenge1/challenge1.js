const challenge1 = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts/4/comments')
    .then( res => {
        console.log("Dwi Nurfatma");
        console.log(res.data);
    })
}
challenge1();