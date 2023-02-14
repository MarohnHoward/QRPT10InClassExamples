var todo: Array<string> = [
    "Wash the car", 
    "Get Groceries", 
    "Go to the gym",
    "Grade Homework"
]
// for: declare variable > statement to check > increase or decrease the variable
for(let i = 0; i < todo.length; i++){
    console.log(`Todo #${i + 1}: ${todo[i]}`);
}