



//alert('from script.js file');
let person = {
firstname:'John',
Lastname: 'Travolta',
age:52,
showInfo: function() {
    console.log('Hi '+ this.firstName + " \n"+this.firstname+ ' '+ this.Lastname);
    this.Lastname=(this.age=='32')? 'Grover':''; 
    console.log('person'+person.constructor.toString());
    console.log('person firstname'+person.firstname.constructor.toString().indexOf('String'));
    
   
}

};;
console.log("My First Object" + person);
console.log( person.firstname);
person.showInfo();
