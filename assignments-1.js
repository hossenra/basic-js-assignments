// problem 1
function radianToDegree(radian){
    return radian * (180/ Math.PI);
}

// console.log(radianToDegree(4));

// problem 2
function isJavaScriptFile(str){
    if(str.match(/(\w*)\.js$/) == null){
        console.log("false");
        return false;
    }
    else{
        console.log("true");
        return true;
    }
}

isJavaScriptFile("app.js");

// problem 3

function oilPrice(diesel, petrol, octane){
    const perDiesel = 114;
    const perPetrol = 130;
    const perOctane = 135;

    const dieselPrice = diesel * perDiesel;
    const petrolPrice = petrol * perPetrol;
    const octanePrice = octane * perOctane;

    const totalPrice = dieselPrice + petrolPrice + octanePrice;
    return totalPrice;
}




