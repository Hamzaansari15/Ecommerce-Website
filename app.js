//             <---------------- NAVIGATION AND OTHER FUNCTIONALITY START --------->

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

//             <---------------- NAVIGATION AND OTHER FUNCTIONALITY END --------->

//             <---------------- GET DATE FOR COPY RIGHT START ------------>


const getDate = () => {
    let year = new Date().getFullYear();
let date = document.getElementById('date');
date.innerHTML = year;
};
getDate();

//             <---------------- GET DATE FOR COPY RIGHT END ------------>

//             <---------------- WORKING FOR PRODUCT SHOW INTO CART START ------------>


const showData = () => {
    
}

window.showData = showData;
//             <---------------- WORKING FOR PRODUCT SHOW INTO CART END ------------>

//             <---------------- FETCHING DATA FROM API FOR HOME PAGE START ------------>


const getData = () => {
    let url = 'https://fakestoreapi.com/products'
    fetch(url)
        .then(Response => {
            return Response.json();
        })
        .then(data => {
            console.log(data)
            for (let i = 0; i < data.length; i++) {
                let image = data[i].image;
                let title = data[i].title.split(' ').slice(0,4).join(' ');
                let category = data[i].category;
                let price = data[i].price;
                let discountPrice = price / 10;
                let discount = (price - discountPrice).toFixed();
                let ratings = data[i].rating;
                let rate = ratings.rate;
                let allCard = document.getElementById('all_card');
                let card = `<div onclick="showData()" id="card">
                               <div id="card_image"><img id="image" src=${image} alt=""srcset=""></div>
                               <div id="description">
                                    <p id="title">${title}</p>
                                    <p id="category">category : ${category}</p>
                                    <p id="price">Price : <del>${price}$</del> <span>${discount}$</span></p>
                                    <p id="rating">Rating : ${rate}</p>
                               </div>
                            </div>`;
                allCard.innerHTML += card;
            }
        })
}
getData();

//             <---------------- FETCHING DATA FROM API FOR HOME PAGE END ------------>

//             <---------------- FETCHING ANOTHER DATA FROM API FOR PRODUCT PAGE START ------------>


let url = 'https://api.escuelajs.co/api/v1/products';
fetch(url)
.then((Response) => {
    return Response.json();
})
.then((data) => {
    console.log(data);
})