//multiple items of same characteristic
class Student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.lover = "misk loves only"
    }
}
const student1 = new Student(12, "mim");
const student2 = new Student(22, "maria");
console.log(student1, student2);
console.log(student1.id, student2.name);//specific property access using like object 