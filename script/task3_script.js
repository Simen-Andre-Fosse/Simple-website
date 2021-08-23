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



function matchCat(obj1, cat){
    var id = obj1.kategoriID.toString(); 
    if(id === cat){
        return true; 
    } else {
        return false; 
    }

}

function update_data_object(){
    var new_data_object = [];
    var old_data = getTransactions(trans_data, "transaksjoner");

    var el = getElement("categories");
    var value = el.options[el.selectedIndex].value;

    for (trans of old_data){
        if(matchCat(trans, value)){
            new_data_object.push(trans);
        }
    }

    return new_data_object

}

function update_table(){

}

