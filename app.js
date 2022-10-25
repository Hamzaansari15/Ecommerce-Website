let searchBtn = document.getElementById('search_btn');
let closeBtn = document.getElementById('close_btn');
let searchBar = document.getElementById('search_bar');
let menuToggle = document.getElementById('menu');
let navigation = document.getElementById('navigation');
let header = document.getElementById('header');
searchBtn.addEventListener('click', () => {
    searchBar.classList.add('active');
    closeBtn.classList.add('active');
    searchBtn.classList.add('active');
    menuToggle.classList.add('active');
});
closeBtn.addEventListener('click', () => {
    searchBar.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBtn.classList.remove('active');
    menuToggle.classList.remove('active');
});
menuToggle.addEventListener('click', () => {
    header.classList.toggle('show')
});
const getData = () => {
    let url = 'https://fakestoreapi.com/products/category/jewelery'
    fetch(url)
        .then(Response => {
            return Response.json();
        })
        .then(data => {
            console.log(data);
            for(let i = 0; i < data.length; i++){
                // console.log(data[i]);
                console.log(data[i].title);
                let title = data[i].title;
            }
        })
} 
getData()