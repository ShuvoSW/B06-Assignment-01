function formatValue(value: string | number | boolean):  
string | number | boolean {

    if (typeof value === "string") {
        return (value.toUpperCase());
    } else if (typeof value === "number") {
        return (value * 10);
    } else {
        return (!value);
    }
}



function getLength(value: string | unknown[]): number {
    
    if (typeof value === "string" || Array.isArray(value)) {
        return (value.length);
    }
    throw new Error("Invalid type");
}



class Person {

    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;

    }

    getDetails(): string {
        return (`'Name: ${this.name}, Age: ${this.age}'`)
    }
}



type Item = {
    title: string;
    rating: number;
}

function filterByRating(items: readonly Item[]): Item[] {

    return items.filter((item) => item.rating >= 4);
}



type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}
function filterActiveUsers(users: User[]): User[] {    
    return users.filter(i => i.isActive === true);
}

const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

console.log(filterActiveUsers(users));



interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(user: Book): void {

    const {title, author, publishedYear, isAvailable} = user;

    console.log(`Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${isAvailable}`)
}



// function getUniqueValues(array1: [], array2: []) {

//     let arr = array1.indexOf |  array2;
//     return arr;

// }

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// console.log(getUniqueValues(array1, array2));



// function calculateTotalPrice(products: object[]) {

// }

// const products = [
//   { name: 'Pen', price: 10, quantity: 2 },
//   { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
//   { name: 'Bag', price: 50, quantity: 1, discount: 20 },
// ];

// console.log(calculateTotalPrice(products));