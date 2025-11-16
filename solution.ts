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



const filterByRating = (arrOfObj: object) => {

    Map.forEach(arrOfObj => {
        console.log
    });
    // return arrOfObj.object.split("")
    // let arr = 0
    // if (arrOfItems.number <= 4) {
    //     return arr.push[...arrOfItems]
    // }
}

const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

console.log(filterByRating(books));
