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



interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(user: Book): void {

    const { title, author, publishedYear, isAvailable } = user;

    console.log(`Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${isAvailable}`)
}



function getUniqueValues<T extends string | number>(array1: T[], array2: T[]): T[] {
    const result: T[] = []

    const seen: {
        [key: string]: boolean;
    } = {};

    for (let i = 0; i < array1.length; i++) {
        const key = String(array1[i]);
        if (!seen[key]) {
            seen[key] = true;
            result[result.length] = array1[i];
        }

    }

    for (let i = 0; i < array2.length; i++) {
        const key = String(array2[i])
        if (!seen[key]) {
            seen[key] = true;
            result[result.length] = array2[i]
        }
    }
    
    return result;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));



type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}

function calculateTotalPrice(products: Product[]) {
    if (products.length === 0) {
        return 0;
    }
    return products.map((product) => {
        const totalAmount = product.price * product.quantity;
        const discountAmount = product.discount ? (totalAmount * product.discount) / 100 : 0;
        return totalAmount - discountAmount;
    }).reduce((sum, value) => sum + value, 0);

}
