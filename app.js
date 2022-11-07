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




//             <---------------- FETCHING DATA FROM API FOR HOME PAGE START ------------>

const buyItem = () => {
    let cancelIcon = document.getElementById('cancel_icon');
    cancelIcon.addEventListener('click', () => {
        buyModal.classList.remove('show');
    });
    let buyModal = document.getElementById('buy_modal');
    buyModal.classList.add('show');
}
const buyDone = () => {
    swal("Purchased Successful", "", "success")
    .then(() =>{
        location.reload();
    })
}
const getData = () => {
    let url = 'https://fakestoreapi.com/products'
    fetch(url)
        .then(Response => {
            return Response.json();
        })
        .then(data => {
            if (data) {
                let loader = document.getElementById('loader_icon');
                loader.style.display = 'none'
            }
            for (let i = 0; i < data.length; i++) {
                let image = data[i].image;
                let title = data[i].title.split(' ').slice(0, 4).join(' ');
                let category = data[i].category.split(' ').slice(0, 1);;
                let price = data[i].price;
                let discountPrice = price / 10;
                let discount = (price - discountPrice).toFixed();
                let ratings = data[i].rating;
                let rate = ratings.rate;
                let allCard = document.getElementById('all_card');
                let card = `<div id="card">
                               <div id="card_image"><img id="image" src=${image} alt=""srcset=""></div>
                               <div id="description">
                                    <p id="title">${title}</p>
                                    <p id="category">category :<span> ${category}</span></p>
                                    <p id="price">Price : <del>${price}$</del> <span>${discount}$</span></p>
                                    <p id="rating">Rating : <span>${rate}</span></p>
                                   <a><div onclick = 'buyItem()' id="cart_btn"><button><i class="fa-solid fa-cart-shopping"></i><span class="icon_text">Add to
                                    cart</span></button></div></a>
                               </div>
                            </div>`;
                allCard.innerHTML += card;
            }
        })
}
getData();

//             <---------------- FETCHING DATA FROM API FOR HOME PAGE END ------------>

