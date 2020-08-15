const person = { name: 'Jack Ryan', age: 22, job: 'facebook', address: 'bashundhara', gfName: 'Saima', phone: "01717112211" };

const { gfName, salary, phone, age } = person;

console.log(gfName, salary, phone, age);


//property value of object can be set as name of that variable using destructuring
const friends = ['sakib', 'mamun', 'rakib', 'tareq', 'moinul', 'yeasin'];
const [firstFriend, nextFriend, ...restFriend] = friends;
console.log(nextFriend);
console.log(restFriend);




const complexObject = {
    name: 'abc',
    info: {
        address: 'ambagan',
        leader: 'Tiger'
    }
}
const { leader } = complexObject.info;