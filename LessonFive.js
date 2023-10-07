// function someFunc(){
//     console.log("Hello")
//     console.log("world")
// }
// someFunc()
// function sayHi(name){
// 	let message = "Привет, " + name + "!"
// 	console.log(message)
// 	}
// sayHi("Евгений")
// function checkAge(age){
//     if(age < 18){
//         console.log("you are not allowed")
//     }else if(age >= 18){
//         console.log("you are welcome")
//     }

// }
// checkAge(19)
function calc (operation, a, b){
    if(operation === 'add'){
        return a + b
    }else if (operation === 'multi'){
        return a * b
    }else if (operation === "substract"){
        return a - b
    }
}
alert(calc('add', 5, 3))
alert(calc('multi', 9, 6))
alert(calc('substract', 10, 4))
