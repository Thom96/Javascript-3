
const age = (18);
const isFemale = true;
const driverStatus = 'bob'; 
const name = ['Abraham', 'Sarah'];
const totalAmount = (50);

/*
const age = (19);
const isFemale = false;
const driverStatus = 'bobbbbb'; */

    if (age <= 18){
        console.log("Je mag niet naar binnen, je bent te jong")
    }
    else {
        console.log("Kom verder!")
    }

    if (isFemale == true){
        console.log("Welkom op de Ladies Night!")
    }
    else {
        console.log("Sorry, vanavond is het Ladies Night.")
    }

    if (driverStatus == 'bob'){
        console.log("Je mag nog rijden!")
    }
    else {
        console.log("Je mag helaas niet meer rijden.")
    }

    if (age >= 18 && age <= 25){
        console.log("Je krijgt 50% korting!")
    } else {
        console.log("Geen korting voor jou, helaas pindakaas.")
    }

    if (name == 'Abraham' || 'Sarah'){
        console.log("Gefeliciteerd een gratis biertje!")
    } else {
        console.log("Geen gratis drank voor jou")
    }

    if (totalAmount >= 25 && totalAmount <= 49){
        console.log("Je krijgt gratis bitterballen!")
    } else if (totalAmount >= 50 && totalAmount <= 99){
        console.log("Je krijgt gratis nacho's!")
    } else if (totalAmount >= 100){
        console.log("Je krijgt een fles champagne van het huis!")
    }
