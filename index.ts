// const add = (a: number, b:number ) :number =>{ return a * b};
// console.log(add(2,3));
// console.log(add(5,7));

// const Print = ():string =>{return "Hey My name"};

// const BigInt  : bigint = 3042552325n;
// console.log(BigInt);

// Type Annotations
// const id:object = {name:"String", age:25};
// console.log(id);

// const arr: number[] = [12,34, 45];
// console.log(arr);

// const arr1 : string[] =["Max","Tonny","Alex",];
// console.log(arr1[0]);
// console.log(arr1[1]);
// console.log(arr1[2]);


// Assignment 1

// const message : string = "Hello world";


// // Assignment 2

// const fastName : string ="Dipankar";
// const lastName : string ="Dutta";
// const fullName : string =`${fastName} ${lastName}`;
// const result :string = `My name is ${fullName}`;
// console.log(result);

// // Assignment 3

// const sentence : string = 'My name is maxwell';
// const lengthOfString : number = sentence.length;
// console.log(lengthOfString);

// // Assignment 4
// const sentence1 : string = 'My Self Learning TypeScript and it was very good in production';
// const uppercaseText : string = sentence1.toUpperCase();
// const lowercaseText : string = sentence1.toLowerCase();
// console.log(uppercaseText);
// console.log(lowercaseText);


// Assignment 5

// const longText : string =  'I am a web developer. I love to code. I love to eat Biryani.';
// const shortText :string = longText.slice(0, 10);
// console.log(shortText);


// Assignment 6

// const str1 : string =  'Hello World';
// const str2 : string =  'Hey There is no one';
// const result1 : boolean = str1.includes('World');
// const result2 : boolean = str2.includes('World');
// console.log(result1);
// console.log(result2);


// // Assignment 7


// const product : string = 'iPhone 12';
// const price : number = 100000;
// const total :any = `The Product ${product} ${price}`;
// console.log(total);

// const isLive : boolean = true;

// function isEven(number: number): boolean {
//     return number % 2 === 0;
// }
// // fun call
// console.log(isEven(4));
// console.log(isEven(5));
// console.log(isEven(10));
// console.log(isEven(11));
// console.log(isEven(20));
// console.log(isEven(21));


// Assignment 8
// function fun(a: number, b: number): boolean {
//     return (a % 4 && b % 8) === 0;
// }
// console.log(fun(4, 8));
// console.log(fun(5, 8));
// console.log(fun(4, 9));
// console.log(fun(16, 32));
// console.log(fun(20, 40));
// console.log(fun(21, 41));
// // fun call
// console.log(isDivisible(4, 8));

// const Max : number = Number.MAX_SAFE_INTEGER;
// console.log(Max);
// const maxNum : bigint =  9007199254740991;


// // Home Task 1
// const bigNumber: bigint = 9007199254740991n;
// const anotherBigNumber: bigint = 12345678901234567890n;
// var sum2: bigint = bigNumber + anotherBigNumber;
// console.log( " Sum: "  + sum2);

//  Home Task 2
// const bigNumber : bigint = 90071992547409914552368856n;
// const anotherBigNumber : bigint = 12345678901234567890n;
// const difference : bigint = bigNumber - anotherBigNumber;
// console.log("Difference: " +  difference);


// Home Task 3
// let bigNumber : bigint = 78521458235465635n;
// let anotherBigNumber :bigint = 55445456464986256n;
// let product = bigNumber * anotherBigNumber;
// console.log("Product: " + product);


// // Home Task 4
// let bigNumber :bigint = 78521458235465635n;
// let anotherBigNumber :bigint = 55445456464986256n;
// let division :bigint =  bigNumber / anotherBigNumber;
// console.log("Division: " + division);

// Function to add three numbers
// function addThreeNumbers(a: number, b: number, c: number): number {
//     return a + b + c;
// }

// // Example usage
// console.log("Adding 5, 10, and 15:", addThreeNumbers(5, 10, 15));
// console.log("Adding 1, 2, and 3:", addThreeNumbers(1, 2, 3));
// console.log("Adding 100, 200, and 300:", addThreeNumbers(100, 200, 300));


// // Define the structure of our data
// interface Post {
//     userId: number;
//     id: number;
//     title: string;
//     body: string;
// }

// async function fetchData(): Promise<Post[]> {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
        
//         const data = await response.json();
//         return data as Post[];
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         throw error;
//     }
// }

// async function processData() {
//     try {
//         const posts = await fetchData();
        
//         // Log total number of posts
//         console.log(`Total posts: ${posts.length}`);
        
//         // Display first 3 posts as example
//         posts.slice(0, 3).forEach(post => {
//             console.log('\n--- Post ---');
//             console.log(`Title: ${post.title}`);
//             console.log(`Body: ${post.body}`);
//         });
//     } catch (error) {
//         console.error('Failed to process data:', error);
//     }
// }

// // Execute the function
// // processData();

// // Function 1

// function fun(a:number,b:number): number {
//     return a + b;
// }

// //Function call
// console.log(fun(2,3));


// //Function 2
//     const fun2 = (a:string, b : string) : string =>{
//         return "Hello " + a + " " + b;
//     }

//     //Function call
//     console.log(fun2("Maxwell", "Stone"));

//     // Function 3
//     const  saymyName = (a:number, b: string) : string => "My name is Dipankar Dutta";

//     //Function call
//     console.log(saymyName(42, "test"));

// Function in Ts Home Task

function calculateAverage(numbers: number[]): number {
    
}