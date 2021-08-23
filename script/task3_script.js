var kategoriData = [];
var trans_data = {};

fetch('http://skbank.azurewebsites.net/api/kategori')
.then(response => response.json())
.then(data=> {

    kategoriData = data;
    
    
});

fetch('http://skbank.azurewebsites.net/api/transaksjon')
.then(response => response.json())
.then(data=> {

    trans_data = data;
    
});

function getCategoryIDs(arr){
    var liste = [];
    for(kat of kategoriData){
        liste.push(kat.kategoriID);
    }

    return liste;
}


function matchCat(obj1, obj2){
    if(obj1.kategoriID === obj2.kategoriID){
        return true; 
    } else {
        return false; 
    }

}

function update_data_object(){
    var new_data_object = {};
    var old_data = trans_data;

    var el = getElement("categories");
    var value = el.options[el.selectedIndex].value;

    return value; 

}

