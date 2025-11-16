const formatValue = (value: string | number | boolean) => {

    if (typeof value === "string") {
        return (value.toUpperCase());
    } else if (typeof value === "number") {
        return (value * 10);
    } else {
        return (!value);
    }
}

formatValue("hello");


const getLength = (value: string) => {
    
    if (typeof value === "string") {
        return (value.length);
    }
}

getLength('typescript');


class Person {

    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;

    }

    getDetails() {
        return (`Name: ${this.name}, Age: ${this.age}`)
    }
}

const person1 = new Person('John Doe', 30);
person1.getDetails();

const person2 = new Person('Alice', 25);
person2.getDetails();