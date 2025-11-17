//  Pratice Questions in TypeScript
// Questions 1

// const user: string = "jonny deep";
// const age : number = 27;
// console.log(`My name is ${user} and my age is ${age}`);


// // Questions 2
// function oppositeValue(value : boolean): boolean{
//     return !value;
// }
// console.log(oppositeValue(true));


// // Questions 3

// const  annotatedCVar : bigint =  89856546516549656445n;
// console.log(annotatedCVar);
// console.log(typeof annotatedCVar);


// Questions 4
// let app :any = 45254;
// let app2 : unknown =  " Hey";
// console.log(typeof(app));
// console.log(typeof(app2));


//Question 5

// function sum(a: number, b:number) : number{
//     return a+b;
// }

// console.log(sum(48,56));

// Question 7
// function fullname(name?: string): string {    // Optional Parameters.
//         return `Hey $ {name}  Gest`;
// }

// console.log(fullname());



//Question 8

// function sayGoodmoring (sayGoodmoring:string = "Dipu") :string{
//     return `hey ${sayGoodmoring} Good `;
// }

// console.log(sayGoodmoring());

//question 9

// let arraysNumber: Array<number> = [45,45,55,89,88];
// const newArray =  arraysNumber[4];
// console.log(newArray);
// console.log(arraysNumber.length);

// Question 10

// let arrayMap: number[] = [56,45,56,45];
// let double : number[] =  arrayMap.map((number) => number * 23);
// console.log(double);


// //Question 11

// const arrayFilter: number[] = [45, 46, 47, 49, 48];
// const evenNumber: number[] = arrayFilter.filter((number) => number% 2 === 0);
// console.log(evenNumber);

// Question 12

// type Book = {
//     title: string;
//     page:  number;
//     author:string
// }

// const myBook:Book = {
//     title:"Types Script",
//     page: 5,
//     author: "Gomi Max"
// }

// console.log(myBook.author);

// Question 13

// function person(person: object = {name:"Ram"}) {
//     return
// }


//Question 1

function arrReverse <array> (arr:array[]): array[]  {
    return  arr.reverse();
}

const number : number[] = [45, 565, 87, 48,89];
console.log(arrReverse(number));


//Question 2


function maxNumber <array> (arr: array[]) : number {
    return maxNumber.length;
}
