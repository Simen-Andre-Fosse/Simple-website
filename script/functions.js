
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


function createRow(){

}

function getTransactions(dataset){
    var transactions = dataset.transaksjoner;
    return transactions; 
}