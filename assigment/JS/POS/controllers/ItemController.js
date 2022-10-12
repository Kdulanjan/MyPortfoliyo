$("#btnItem").click(function () {


    let Itemcode = $("#itemCode").val();
    let ItemName = $("#itemName").val();
    let  ItemPrice = $("#itemPrice").val();
    let Itemqty= $("#itemQty").val();

    var itemObject = {
        code: Itemcode,
        name: ItemName,
        price: ItemPrice,
        qty: Itemqty,
    }
    items.push(itemObject);

    loadAllItem();

    bindRowClickEvents();

    loadAllItemForOption();

});


$("#btnItemDelete").click(function () {
    let deleteID = $("#txtItemCode").val();

    let option = confirm("Do you really want to delete item id :" + deleteID);
    if (option){
        if (deleteItem(deleteID)) {
            alert("Item Successfully Deleted..");
            setTextfieldValues("", "", "", "");
        } else {
            alert("No such Item to delete. please check the code");
        }
    }

});


$("#btnGetAll").click(function () {
    loadAllItem();
});


$("#btnItemUpdate").click(function () {
    let Itemcode = $("#txtItemCode").val();
    let response = updateitem(Itemcode);
    if (response) {
        alert("Item Updated Successfully");
        setTextfieldValues("", "", "", "");
    } else {
        alert("Update Failed..!");

    }
});

function loadAllItem() {
    $("#tblItem").empty();



    for (var item of items) {
        var row = `<tr><td>${item.code}</td><td>${item.name}</td><td>${item.price}</td><td>${item.qty}</td></tr>`;
        $("#tblItem").append(row);
    }
}

function bindRowClickEvents() {
    $("#tblItem>tr").click(function () {
        let code = $(this).children(":eq(0)").text();
        let name = $(this).children(":eq(1)").text();
        let price = $(this).children(":eq(2)").text();
        let qty = $(this).children(":eq(3)").text();


        $('#txtItemCode').val(code);
        $('#txtItemDescription').val(name);
        $('#txtItemPrice').val(price);
        $('#txtQTYOnHand').val(qty);

    });
}



$("#txtItemCode").on('keyup', function (event) {
    if (event.code == "Enter") {
        let typedId = $("#txtItemCode").val();
        let item = searchItem(typedId);
        if (item != null) {
            setTextfieldValues(item.code, item.name, item.qty, item.price);
        } else {
            alert("There is no item available for that " + typedId);
            setTextfieldValues("", "", "", "");
        }
    }
});

function setTextfieldValues(code, name, price, qty) {
    $("#txtItemCode").val(code);
    $("#txtItemDescription").val(name);
    $("#txtItemPrice").val(price);
    $("#txtQTYOnHand").val(qty);
}


function searchItem(itemcode) {
    for (let item of items) {
        if (item.id == itemcode) {
            return item;
        }
    }
    return null;
}


function deleteItem (Itemcode) {
    let item = searchItem(Itemcode);
    if (item != null) {
        let indexNumber = items.indexOf(item);
        items.splice(indexNumber, 1);
        loadAllItem();
        return true;
    } else {
        return false;
    }
}

function updateitem(itemcode) {
    let item = searchItem(itemcode);
    if (item != null) {
        item.code = $("#txtItemCode").val();
        item.name = $("#txtItemDescriptiont").val();
        item.price = $("#txtItemPrice").val();
        item.qty = $("#txtQTYOnHand").val();
        loadAllItem();
        return true;
    } else {
        return false;
    }

}
