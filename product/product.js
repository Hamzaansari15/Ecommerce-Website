const getData = () => {
    let url = 'https://api.escuelajs.co/api/v1/products';
fetch(url)
.then((Response) => {
    return Response.json();
})
.then((data) => {
    console.log(data);
    for(let i = 0; i <= 100; i++){
        console.log(data[i]);
        // console.log(data[i].description);
        let description = data[i].description;
        // console.log(data[i].category.name);
        let category = data[i].category.name;
        // console.log(data[i].images);
        let image = data[i].images;
        for(let j = 3; j <= 3; j++){
            console.log(image[j]);
        }
        // console.log(data[i].title);
        let title = data[i].title;
        // console.log(data[i].price);
        let price = data[i].price;
        let allCard = document.getElementById('all_card');
        let card = `<div onclick="showData()" id="card">
                               <div id="card_image"><img id="image" src=${image} alt=""srcset=""></div>
                               <div id="description">
                                    <p id="title">${title}</p>
                                    <p id="category">category :<span> ${category}</span></p>
                                    <p id="price">Price : <span>${price}$</span></p>
                                    <p id="rating">Rating : <span> 3.9</span></p>
                               </div>
                            </div>`;
                allCard.innerHTML += card;
    };
});
};
getData();

//             <---------------- WORKING FOR PRODUCT SHOW INTO CART START ------------>


const showData = () => {
    let body = document.getElementById('main_body');
    body.style.display = 'none';
    let footer = document.getElementById('main_footer');
    footer.style.display = 'none';
    let mainProduct = document.getElementById('main_product');
    mainProduct.style.display = 'block';
}

window.showData = showData;
//             <---------------- WORKING FOR PRODUCT SHOW INTO CART END ------------>