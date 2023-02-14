class Employee {
    id: number; 
    name: string; 
    phone: number; 
    email: string; 

    constructor(id:number, name:string, phone: number, email: string) {
       this.id = id; 
       this.name = name; 
       this.phone = phone; 
       this.email = email;  
    }
    toString(): string {
        let output = 
        `Employee Record --- ID: ${this.id}\n` +
        `Name: ${this.name}\n` +
        `Contact Information\n` +
        `\tPhone: ${this.phone}\n` +
        `\tEmail: ${this.email}\n`
        return output
    }
}

let firstEmployee = new Employee(
    1,
    "Jane Doe", 
    5555555555,
    "i<3QA@devmountainrules.com"
);

console.log(firstEmployee.toString())

class Birb {
    name: string; 
    canFly: boolean; 
    hasFeathers: boolean = true; 

    constructor(name: string, canFly: boolean) {
        this.name = name; 
        this.canFly = canFly
    }
}

let birbs: Array<Birb> = [
    new Birb("Toucan", true),
    new Birb("Penguin", false), 
    new Birb("Pidgeon", true), 
    new Birb("Emu", false)
]

birbs.forEach((item: Birb) => {
    console.log(item)
})