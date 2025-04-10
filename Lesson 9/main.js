
// Lesson 9 :


// const person = {
//     name: "John",
//     age: 30,
//     job: "developer",
// }
// person.city = "Ha Noi";
// for (const key in person) {
//     console.log(key, person[key]);
// }


// // Bài 1
// const student = {
//     name: "John",
//     age: 20,
// }
// student.major = "Computer Science";

// console.log(student);


// // Bài 2
// const person = {
//     name: "Alice",
//     age: 25,
//     job: "Designer",
// }
// delete person.job;
// console.log(person);

// // Bài 3
// const car = { brand: "Toyota", model: "Camry", year: 2020,}
// console.log(Object.values(car)); 

// // Bài 4
// let product = {
//     name: "Laptop",
//     price: 1000
// }

// let keyValue = Object.keys(product)
// let values = Object.values(product)

// let result = []
// for (let i = 0; i < keyValue.length; i++) {
//     result.push([keyValue[i], values[i]])
// }
// console.log(result);


// // Bài 5
// const product = [
//     {
//         name: "Phone",
//         price: 500
//     },
//     {
//         name: "Camera",
//         price: 300
//     },
//     {
//         name: "Tablet",
//         price: 700
//     }
// ]
// for (let i = 0; i < product.length; i++) {
//     if (product[i].name === "Camera") {
//         console.log(product[i]);
//         break;
//     }
// }


// // Bài 6
// const products = [
//     {
//         name: "Phone",
//         price: 50
//     },
//     {
//         name: "Camera",
//         price: 300
//     },
//     {
//         name: "Tablet",
//         price: 700
//     }
// ]
// for (let i = 0; i < products.length; i++) {
//     if (products[i].price > 100) {
//         console.log(products[i]);
//     }
// }


// // Bài 7
// const person = {
//     name: "Bob",
//     age: 25,
//     job: "Developer",
// }
// person.age = 30;
// console.log(person);


// // Bài 8
// const obj1 = {
//     a: 1,
//     b: 2
// }
// const obj2 = {
//     c: 3,
//     d: 4
// }
// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

// // Bài 9 
// const animal = {
//     type : "Dog",
//     name : "Buddy",
//     age : 5
// }
// for (const key in animal) {
//     console.log(key, animal[key]);
// }

// // Bài 10 
// const car = {
//     brand : "BMW",
//     model : "X5"
// }
// console.log("color" in car);