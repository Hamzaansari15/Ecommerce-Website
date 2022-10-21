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
// const getData = () => {
//     let url = 'https://fakestoreapi.com/products'
//     fetch(url)
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         console.log(data);
//         for(let i = 0; i < data.length; i++){
//             console.log(data[i]);
//         }
//     })
// } 
// getData();
// fetch('https://fakestoreapi.com/products/categories')
//             .then(res=>res.json())
//             .then(json=>console.log(json))
// fetch("https://fakestoreapi.com/products/category/women's clothing")
//             .then(res=>res.json())
//             .then(json=>console.log(json))
//             fetch('https://fakestoreapi.com/products',{
//             method:"POST",
//             body:JSON.stringify(
//                 {
//                     title: 'test product',
//                     price: 13.5,
//                     description: 'lorem ipsum set',
//                     image: 'https://i.pravatar.cc',
//                     category: 'electronic'
//                 }
//             )
//         })
//             .then(res=>res.json())
//             .then(json=>console.log(json))
const getData = () => {
    let url = 'https://api.storerestapi.com/categories';
    fetch(url).then((Response) => {
        return Response.json()
    }).then((data) => {
        console.log(data);
    })
}
getData()