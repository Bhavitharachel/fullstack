let person={
    name: "hema",
    greet: function(name){
        return `Hello, my name is ${this.name}`;
    
    },
};
console.log(person.name);
console.log(person.greet("hema"));
