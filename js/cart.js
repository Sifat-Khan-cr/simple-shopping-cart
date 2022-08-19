function getId(data) {
    return document.getElementById(data);
}
function updateTotal(isincrease, id) {
    const quantity = parseInt(getId(id).value);
    if (isincrease === true) {
        newQuantity = quantity + 1;

    } else {
        newQuantity = quantity - 1;

    }
    getId(id).value = newQuantity;
    return newQuantity;
}
function getData(data) {
    const total = parseInt(getId(data).innerText);
    return total;
}
function subTotal() {
    const subTotal = getData("phone-total") + getData("case-total");
    getId("sub-total").innerText = subTotal;
    return subTotal;
}
function tax() {
    const tax = parseFloat((subTotal() * 0.1).toFixed(2));
    getId("tax").innerText = tax;
    return tax;
}
function finalTotal() {
    getId("final-total").innerText = subTotal() + tax();
}




getId("phone-plus").addEventListener('click', function () {
    updateTotal(true, "phone-quantity");
    getId("phone-total").innerText = newQuantity * 1219;
    subTotal();
    tax();
    finalTotal();
})
getId("phone-minus").addEventListener('click', function () {
    updateTotal(false, "phone-quantity");
    getId("phone-total").innerText = newQuantity * 1219;
    subTotal();
    tax();
    finalTotal();
})
getId("case-plus").addEventListener('click', function () {
    updateTotal(true, "case-quantity");
    getId("case-total").innerText = newQuantity * 59;
    subTotal();
    tax();
    finalTotal();
})
getId("case-minus").addEventListener('click', function () {
    updateTotal(false, "case-quantity");
    getId("case-total").innerText = newQuantity * 59;
    subTotal();
    tax();
    finalTotal();
})
getId('phone-remove').addEventListener('click', function () {
    getId("cart-phone").style.display = "none";
    getId("phone-total").innerText = 0;
    subTotal();
    tax();
    finalTotal();
})
getId('case-remove').addEventListener('click', function () {
    getId("cart-case").style.display = "none";
    getId("case-total").innerText = 0;
    subTotal();
    tax();
    finalTotal();
})

