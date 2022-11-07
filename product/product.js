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
        .then(() => {
            location.reload();
        })
}

//             <---------------- NAVIGATION AND OTHER FUNCTIONALITY END --------->
const getData = () => {
    let url = 'https://api.escuelajs.co/api/v1/products';
    fetch(url)
        .then((Response) => {
            return Response.json();
        })
        .then((data) => {
            if (data) {
                let loader = document.getElementById('loader_icon');
                loader.style.display = 'none'
            }
            for (let i = 0; i <= 100; i++) {
                let category = data[i].category.name;
                let image = data[i].images;
                let title = data[i].title;
                let price = data[i].price;
                let allCard = document.getElementById('all_card');
                let card = `<div id="card">
                               <div id="card_image"><img id="image" src=${image} alt=""srcset=""></div>
                               <div id="description">
                                    <p id="title">${title}</p>
                                    <p id="category">category :<span> ${category}</span></p>
                                    <p id="price">Price : <span>${price}$</span></p>
                                    <p id="rating">Rating : <span> 3.9</span></p>
                                    <div onclick = 'buyItem()' id="cart_btn"><button><i class="fa-solid fa-cart-shopping"></i><span class="icon_text">Add to
                                    cart</span></button></div>
                               </div>
                            </div>`;
                allCard.innerHTML += card;
            };
        });
};
getData();

//             <---------------- WORKING FOR PRODUCT SHOW INTO CART START ------------>

// let body = document.getElementById('html');
// let loader = document.getElementById('loader_icon');
// body.addEventListener('load', () => {
//     loader.style.display = 'none';
// })
