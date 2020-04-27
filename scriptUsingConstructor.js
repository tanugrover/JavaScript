"use strict";
class Department {
    constructor(name,strength) {
        this.name = name;
        this.strength = strength;
    };
    showDetails() {
        
        
        
        console.log("Deptartment Details\n" + this);
        console.log(this.name + " has strength "+this.strength);
        return (this.name + " has strength "+this.strength);

    }
};

let dept1 = new Department("Finance",30);
let dept2 = new Department("IT",20);

dept1.showDetails();
dept2.showDetails();

function createDepartments(){
    document.getElementById("message").textContent=dept1.showDetails();

}