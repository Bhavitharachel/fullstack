let person = {
    name: "bhavitha",
    age: 19,
    greet: function() {
        return `Hello, my name is ${this.name}`;
    },
};
console.log(person.greet("bhavitha"));
console.log(person.age);