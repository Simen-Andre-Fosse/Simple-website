myDataset = {};


fetch('http://skbank.azurewebsites.net/api/transaksjon')
.then(response => response.json())
.then(data=> {
    myDataset = data;
    
});

function print(something){
    console.log(something);
}



function createElement(type, content) {
    var element = document.createElement(type);
    element.innerHTML = content;

    return element;
}

function getElement(id){
    var element = document.getElementById(id);

    return element;
}


function setText(contentId, content){
    document.getElementById(contentId).innerHTML = content + ".";
}


function createTD(data, tr){
    var td = document.createElement("td");
    td.innerHTML = data; 
    return td; 
}

function fillTable(tableId, datasetObject, dataSetName){
    var myTransactions = getTransactions(datasetObject, dataSetName);
    var table = getElement(tableId);

    for(var trans of myTransactions){
        var i = 0;
        var row = table.insertRow(i);
        i++; 
        
    }

    for( var i = 0, row; row = table.rows[i]; i++) {
        for(var j = 0, col; col = row.cells[j]; j++){

        }
    }
}

function populateTable(tableId, transObject){
    var table = getElement(tableId);
transObject.forEach(function(object) {
    var tr = document.createElement('tr');
    tr.innerHTML = '<td>' + split_string(object.dato) + '</td>' +
        '<td>' + object.beskrivelse + '</td>' +
        '<td>' + object.beloep + '</td>' +
        '<td>' + object.beloep + '</td>';
    table.appendChild(tr);
});
}

function getTransactions(objectName, dataSetName){
    var transactions = objectName[dataSetName];
    return transactions; 
}

function get_a_transaction(objectName, dataSetName, index){
    var trans_list = getTransactions(objectName, dataSetName)
    var the_transaction = trans_list[index];

    return the_transaction;
}

function checkNrPositve(number){
    if(number > 0) {
        return true; 
    } else {
        return false; 
    }
}

function split_string(a_string){
    var new_string = a_string.split("T");
    return new_string[0];
}
