let someUser = {
    firstName: "Fred",
    lastName: "Flinstone",
    powerLevel: 9000,

    fullName: function() {
        console.log(this.firstName + " " + this.lastName);
    }
}

someUser.fullName();
console.log("power level is " + someUser.powerLevel);



// this verwijst naar het Object dat de functie aanroept.
//instance variable
// object litteral
// object ≠ array
//neihgboorhood scope ( element dat het oproept NIET ALTIJD OBJECT)