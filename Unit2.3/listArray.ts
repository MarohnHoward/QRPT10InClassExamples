var numbersList: Array<number> = [45, 60]

var animalsList: Array<string> = [
    "Elephant", 
    "Lion",
    "Tiger", 
    "Bear", 
    "Oh My"
]
/*arrays are hard, my guy
you are right */
numbersList.push(70)
numbersList.push(80)
numbersList.push(90)

console.log("The first list is:", numbersList)
console.log("The item at then of the second list is:", animalsList.pop() )
console.log("The remaining items on this list are:", animalsList)
console.log("This should be 70", numbersList[2])
console.log("This should be elephant", animalsList[0])