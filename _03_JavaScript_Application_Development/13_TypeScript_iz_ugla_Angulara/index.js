class Employee {
    constructor(code, name) {
        this.code = code;
        this.name = name;
    }
    getName() {
        return name;
    }
}
let obj = new Employee(111, 'Ana');
console.log('obj: ', obj);
// interface Named {
//     name: string;
// }
// function sayHello(personObj: Named): void {
//     console.log('Hello' + name);
// }
// let person = {
//     name: 'Ana',
//     email: 'foo@example.com'
// }
// sayHello(person )
// class Employee {
//     protected code: number;
//     private name: string;
//     // public email: string;
//     readonly email: string;
//     constructor(code: number, name: string, email: string) {
//         this.code = code;
//         this.name = name;
//         this.email = email;
//     }
// }
// let emp = new Employee(111, 'Ana', 'email@email.com');
// emp.email;
// READONLY: NOT CHANGE
// emp.email = 'ana@email.com';
// function great(greeting:string, name?: string): string {
//     return greeting + ' ' + name + '!';
// }
// function square(a: (number | string)): number {
//     return <number>a * <number>a;
// }
// enum Day { Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, Saturday = 6, Sunday = 7 };
// // let day: Day = Day.Monday;
// let day: number;
// switch (day) {
//     case Day.Monday:
//         console.log('Today is Monday');
//         break;
//     case Day.Tuesday:
//         console.log('Tuesday');
//         break;
//     case Day.Wednesday:
//         console.log('Wednesday');
//         break;
// }
// let myTuple: [string, boolean];
// myTuple = ['sdasada', false];
// let myArray: number[] = [8, 6, 2];
// let myArray2: Array<number> = [8, 6, 2];
// function infiniteLoop(): never {
//     while (true) {
//     }
// }
// function sayHello(message:string): never {
//     throw new Error(message);
// }
// let notSure: any = 6;
// function sayHeloo(name:string): void {
//     console.log('Hello ' + name);
//     // return "asdasdas"
// }
// let isDone: boolean = false;
// let width: number = 33;
// let message: string = "Hello world";
// let myVar: null = null;
// let myVar2: undefined = undefined;
// let message : string = "Hello!";
// function add (a:number, b:number) {
//     return a + b;
// }
// add(2, 6)
