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
        if(value === "0"){
            return old_data;
        } else if(matchCat(trans, value)){
            new_data_object.push(trans);
        }
    }

    return new_data_object

}

function get_selected_cat(){
    var el = getElement("categories");
    var value = el.options[el.selectedIndex].value;
    var text = "";
    if(value === "0"){
        text = "Transaksjoner";
    } else {
    text =  "Kategori: " +  el.options[el.selectedIndex].text;
    }

    return text; 
}


function cleanTable(){
    var table = getElement("table");
    while(table.rows.length > 1){
        table.deleteRow(table.rows.length -1);
    }
}

function update_table(){
    cleanTable();
    var new_data = update_data_object();
    populateTable("table", new_data);
    set_totalInn(new_data);
    set_totalUt(new_data);
    setText("trans_header", get_selected_cat());
}



