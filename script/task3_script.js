var kategoriData = {};


fetch('http://skbank.azurewebsites.net/api/kategori')
.then(response => response.json())
.then(data=> {

    kategoriData = data;
    
    
});


