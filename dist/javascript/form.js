'use strict';
const titleElement = document.querySelector('#title');
const descriptionElement = document.querySelector('#description');
const priceElement = document.querySelector('#price');
const fileElement = document.querySelector('#file');
async function createProduct(){
    const title = titleElement.value;
    const description = titleElement.value;
    const price = Number(priceElement.value);
    const file = fileElement.files[0];
    console.log(title,description,price,file);
    const imageUrl = await uploadImage(file);
    console.log(imageUrl);
    const product = {
        
            title,
            price,
            description,
            categoryId: 1,
            images: [imageUrl.location],
        
    };
    fetch('https://api.escuelajs.co/api/v1/products/',{
    method:'POST',
    body:JSON.stringify(product),
    Headers: {
        'Content-Type' : 'application/json'
    }
    }).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err))
}


//upload image tp server
async function uploadImage(file){
    const formData = new FormData()
    formData.append('file', file)
    const res = await fetch('https://api.escuelajs.co/api/v1/products/', {
        method: 'POST',
        body:formData,
    });
    return res.json();
}