class Bird {
    name: string; 
    canFly: boolean; 
    hasFeather: boolean = true; 

    constructor(name: string, canFly: boolean) {
        this.name= name; 
        this.canFly = canFly;
    }

    flapWings(){
        if(this.canFly)
        console.log(`${this.name} flaps its wings and takes off`)
        else 
        console.log(`${this.name} prefers to run`)
    }
}

let birds: Array<Bird> = [
    new Bird("Toucan", true),
    new Bird("Penguin", false),
    new Bird("Pidgeon", true),
    new Bird("Emu", false)
]

birds.forEach((item: Bird) => {
    item.flapWings()
})