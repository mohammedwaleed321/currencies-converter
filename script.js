const amount = document.getElementById("amount");
const coins1 = document.getElementById("coins1");
const coins2 = document.getElementById("coins2");
let result = 0;
amount.addEventListener("input", function() {
    if(amount.value < 0) {
        amount.value = 1;
    }
});
function calculating_dolar() {
    if(coins1.value == "dollar" && coins2.value == "dollar") {
        result = amount.value * 1;
    }
    if(coins1.value == "dollar" && coins2.value == "Egyptian pound") {
        result = amount.value * 50;
    }
    if(coins1.value == "dollar" && coins2.value == "euro") {
        result = amount.value * 0.87;
    }
    if(coins1.value == "dollar" && coins2.value == "riyal") {
        result = amount.value * 3.75;
    }
}
function calculating_pound() {
    if(coins1.value == "Egyptian pound" && coins2.value == "dollar") {
        result = amount.value * 0.02;
    }
    if(coins1.value == "Egyptian pound" && coins2.value == "Egyptian pound") {
        result = amount.value * 1;
    }
    if(coins1.value == "Egyptian pound" && coins2.value == "euro") {
        result = amount.value * 0.018;
    }
    if(coins1.value == "Egyptian pound" && coins2.value == "riyal") {
        result = amount.value * 0.075;
    }
}
function calculating_euro() {
    if(coins1.value == "euro" && coins2.value == "dollar") {
        result = amount.value * 1.15;
    }
    if(coins1.value == "euro" && coins2.value == "Egyptian pound") {
        result = amount.value * 57.18;
    }
    if(coins1.value == "euro" && coins2.value == "euro") {
        result = amount.value * 1;
    }
    if(coins1.value == "euro" && coins2.value == "riyal") {
        result = amount.value * 4.3;
    }
}
function calculating_riyal() {
    if(coins1.value == "riyal" && coins2.value == "dollar") {
        result = amount.value * 0.27;
    }
    if(coins1.value == "riyal" && coins2.value == "Egyptian pound") {
        result = amount.value * 13.28;
    }
    if(coins1.value == "riyal" && coins2.value == "euro") {
        result = amount.value * 13.29;
    }
    if(coins1.value == "riyal" && coins2.value == "riyal") {
        result = amount.value * 1;
    }
}
function calculating() {
    calculating_dolar();
    calculating_pound();
    calculating_euro();
    calculating_riyal();
}
function showResult() {
    alert("the result is " + result)
}
function generate() {
    if(amount.value == "") {
        alert('please enter the amount of money');
    }
    else {
        calculating();
        showResult();
    }
}