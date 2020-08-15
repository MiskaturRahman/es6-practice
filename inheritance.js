class Parent {
    constructor() {
        this.fatherName = "Scwerznegger";
    }
}

class Child extends Parent {//connect child and parent using extends
    constructor(name) {
        super(); //have to use super() to join another class source
        this.name = name;
    }

    getFullName() {
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("Arnold");
const baby2 = new Child("Tom");

console.log(baby);
console.log(baby2);

console.log(baby.getFullName());
console.log(baby2.getFullName());