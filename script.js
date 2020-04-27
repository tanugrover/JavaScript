
"use strict";
//alert('from script.js file');
let person = {
firstname:'John',
Lastname: 'Travolta',
age:52,
showInfo: function() {
    console.log('Hi ' + this.firstname + ' '+this.Lastname +" !!");
    document.getElementById("message").textContent='Hi ' + this.firstname + ' '+this.Lastname +" !!";
}

};;

//console.log("My First Object" + person);
//console.log( person.firstname);
function showMessage()
 {person.showInfo(); }
