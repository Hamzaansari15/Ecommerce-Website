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
            // console.log(data);
            for(let i = 0; i < data.length; i++){
                let image = data[i].image;
                console.log(data[i].title);
                let title = data[i].title;
                if(true){
                    console.log('hamza');
                    
                }
                console.log(data[i].category);
                let category = data[i].category;
                console.log(data[i].price);
                let price = data[i].price;
                let discountPrice = price/10;
                let discount = price - discountPrice;
                console.log(data[i].rating);
                let ratings = data[i].rating; 
                console.log(ratings.rate);
                let rate = ratings.rate;      
                let allCard = document.getElementById('all_card');
                let card = `<div id="card">
                <div id="card_image"><img id="image" src=${image} alt=""
                    srcset=""></div>
                    <div id="description">
                      <p id="title">${title}</p>
                      <p id="category">category : ${category}</p>
                      <p id="price">Price : <s>${price}</s>  ${discount}</p>
                      <p id="rating">Rating : ${rate}</p>
                    </div>
              </div>`;
              allCard.innerHTML += card;
            }
        })
} 
getData()