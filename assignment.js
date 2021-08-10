// problem-1:sherToMon
function sherToMon(sher) {
    // Eror message
    if (sher < 0) {
        return "please input positive value only";
    }
    // main function
    else {
        var mon = sher / 40;
        return mon;
    }
}

// problem-2:totalSales
function totalSales(shirtsQuantity, pantsQuantity, shoesQuantity) {
    if (shirtsQuantity < 0 || pantsQuantity < 0 || shoesQuantity < 0) {
        return 'please input positive value only';
    }

    else if (Number.isInteger(shirtsQuantity) == true && Number.isInteger(pantsQuantity) == true && Number.isInteger(shoesQuantity) == true) {
        const shirtPrice = 100;
        const pantPrice = 200;
        const shoePrice = 500;
        const totalShirtsPrice = shirtsQuantity * shirtPrice;
        const totalPantsPrice = pantsQuantity * pantPrice;
        const totalShoesPrice = shoesQuantity * shoePrice;
        const total = totalShirtsPrice + totalPantsPrice + totalShoesPrice;
        return total;
    }
    else {
        return "Enter integer values only"
    }
}

// problem-3:deliveryCost
function deliveryCost(shirtQuantity) {

    if (Number.isInteger(shirtQuantity) == true) {
        if (shirtQuantity <= 0) {
            return 'please enter a valid number';
        }
        else if (shirtQuantity <= 100) {
            totalCost = shirtQuantity * 100;
            return totalCost;
        }
        else if (shirtQuantity <= 200) {
            var firstPart = 100 * 100;
            var remaining = shirtQuantity - 100;
            var secondPart = remaining * 80;
            var totalCost = firstPart + secondPart;
            return totalCost;
        }
        else {
            var firstPart = 100 * 100;
            var secondPart = 100 * 80;
            var remaining = shirtQuantity - 200;
            var thirdPart = remaining * 50;
            var totalCost = firstPart + secondPart + thirdPart;
            return totalCost;
        }
    }
    else {
        return "Please enter integer values only";
    }
}

// problem-4:perfectFriend
function perfectFriend(names) {
    let perfectMatch = "";
    for (const elements of names) {
        if (typeof (elements) == "string") {
            if (elements.length == 0) {
                return 'please enter proper names';
            }
            else if (elements.length == 5) {
                perfectMatch = elements;
                return perfectMatch;
            }
        }
        else{
            return "Please make sure all names are string";
        }
    }
}

// problem-1:function call
var sher = 200;
var totalMon = sherToMon(sher);
console.log(totalMon);

// problem-2:function call
const allQuantity = totalSales(1, 2, 4);
console.log(allQuantity);

// problem-3:function call
var shirtQuantity = 210;
var deliveryCharge = deliveryCost(shirtQuantity);
console.log(deliveryCharge);

// problem-4:function call
const names = ["Ris", "at", "Rifat", "Hasan", "SAS", "Risat"];
const friend = perfectFriend(names);
console.log(friend);