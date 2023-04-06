"use strict";
function getitems() {
    return fetch('items.json')
        .then(res => res.json())
        .then(res => {
        return res;
    });
}
getitems()
    .then(items => {
    document.write("<h1><center>Product Details</center></h1>");
    document.write(items.map(i => "Product ID : " + i.id + " <br> " + "Product Name : " + i.pname + " <br> " + "Product Description : " + i.pdescription + " <br> "
        + "Price : " + i.price + " <br> ").toString());
});
function getfakeAPI() {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(json => console.log(json));
}
getfakeAPI();
