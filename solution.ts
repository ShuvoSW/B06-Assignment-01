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
        return (`'Name: ${this.name}, Age: ${this.age}'`)
    }
}

const person1 = new Person('John Doe', 30);
person1.getDetails();

const person2 = new Person('Alice', 25);
person2.getDetails();



// const filterByRating = (users: object[]) => {

//     users.filter(i => { 
//         // console.log(i.rating )
//         // if (i.rating <= 4) {
//         //     return arr=push[i.rating];
//         // }
   
//     });
//     // return arrOfObj.object.split("")
//     // let arr = 0
//     // if (arrOfItems.number <= 4) {
//     //     return arr.push[...arrOfItems]
//     // }
// }

// const books = [
//   { title: 'Book A', rating: 4.5 },
//   { title: 'Book B', rating: 3.2 },
//   { title: 'Book C', rating: 5.0 },
// ];

// console.log(filterByRating(books));



// const filterActiveUsers = (user: object[]) => {

//     // user.forEach(element => {
//     //     console.log(element)
//     // });
// //     user.forEach(( key, value) =>
// //         //  console.log("Key: ", key, "Value: ", value)
// //     if (value.split === true)
    
// // );
//    let arr = 0
//     user.filter((i) =>  
//         // console.log(i.isActive)
//         if (i.isActive === "True") {
//             return i.push = arr
//         }
// )


// }

// const users = [
//   { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
//   { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
//   { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
// ];

// console.log(filterActiveUsers(users));

// const topElectronicProducts = rawApiData.filter((item) => item.category == "Electronics")
// .sort((a, b) => b.rating -a.rating)
// .slice(0, 3)
// .map((item) => ({name: item.productName}



interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (user: Book) => {

    
}

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

console.log(printBookDetails(myBook))