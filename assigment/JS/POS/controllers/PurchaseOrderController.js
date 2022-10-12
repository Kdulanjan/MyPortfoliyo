
function loadAllCustomersForOption() {
    $("#selectCusID").empty();
    for (let cus of customers) {
        $("#selectCusID").append(`<option>${cus.id}</option>`);
    }

}



function loadAllItemForOption() {
    $("#selectItemCode").empty();
    for (let cus of items) {
        $("#selectItemCode").append(`<option>${item.code}</option>`);
    }

}