const challenge2 = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then( res => {
        const filterData = res.data.filter( value => {
            return value.userId == 8;
        });
        console.log("Dwi Nurfatma");
        console.log(filterData);
    })
}
challenge2();