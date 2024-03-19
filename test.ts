// Create a class Person with name, age and sex as properties. Create a function that will return the age of the person. Create an object of the class and call the function.

const endereco = {};

class Person {
    name: string;
    age: number;
    sex: string;
    constructor(name: string, age: number, sex: string) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    gAge() {
        return this.age;
    }
}



// create a instance of the class Person
let John = new Person('John', 25, 'male');
John.getAge(); // 25

class AddrInfo {
    AI_Flags: boolean;
    AI_Family: string;
    AI_SocketType: string;
    AI_Protocol: string;
    AI_AddrLength: number;
}

function getAddrInfo(node: string, service: string, hints: AddrInfo, callback: (err: Error, address: string, family: string) => void) {
    if (node === 'localhost') {
        callback(null, 'address', 'family');
        return
    }
    for (let i = 0; i < 10; i++) {
        console.log(i);
        break;
    }
}
