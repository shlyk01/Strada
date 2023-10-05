// let year = prompt ("В каком году появилась первая версия JScript")
// if(year == 1996){
// alert("Это правильный ответ, похвально!")
// }else if(year > 1996){
// alert("Поздновато для первой версии")
// }else if(year < 1996){
// alert("Рановато для первой версии")
// }else{
// alert("Видимо ты плохо прочитал вопрос")
// }

// let message;
// let age = prompt ("Сколько тебе лет?")
// if(age < 3){
// 	message = "Здравствуй малыш"
// }else if(age < 18){
// 	message = "Привет"
// }else if(age < 50){
// 	message = "Здравствуйте!"
// }else{
// 	message = "Какой интересный возраст"
// }
// alert(message)
// let message = prompt ("Какое официальное название JavaScript")
// if(message == 'ECMAScript'){
//     alert('Верно!')
// }else{
//     alert('Не знаете ECMAScript ?')
// }
// let value = prompt('Введите число')
// if(value > 0 ){
//     alert(1)
// }else if(value < 0){
//     alert(-1)
// }else{
//     alert(0)
// }
// let result = (a + b < 4) ? "Мало" : "Много"
// let message = (login == "Cотрудник") ? "Привет" :
// (login == "Директор") ? "Здравствуйте" :
// (login == " ") ? "Нет логина" :
// ""; 

// let future = prompt("Попробуй посмотреть в будущее, напиши несколько строк и увидешь закономерный вывод из будущего!")
// if(future == "Не внимательно читал задачи и пропускал некоторые из них"){
//     alert('Так и не стал фронтендером через 7 месяцев')
// }else if(future == 'Делал всё и точно в срок'){
//     alert('Добился поставленной цели')
// }else{
//     alert('не корректный диалог')
// }
// let firstName;
// let lastName;
// let nickName = 'Суперкодер';
// alert(firstName || lastName || nickName || "аноним")
// true || alert ('никогда не сработает') // оператор останавливает выполнение т.к в первом аругменте находит true
// false || alert('сработает') // возвращает последний ложным аргумент 
// console.log(1 && 2 && 3 && true)
// let age = prompt("укажите свой возраст")
// if(age >= 14 && age <= 90){
//     console.log('верно')
// }
// let age = prompt('Укажите свой возраст')
//     if(!(age >= 14 && age <= 90)){
//         alert('Добро пожаловать')
//     }
// alert(age < 14 || age > 90)
// console.log( !1 ) // 0 -> false 
// console.log(!false) // true

let message = prompt("Кто там?")
if(message === 'Админ'){
    let pass = prompt("Пароль?")
    if(pass === "Я главный"){
        alert("Здравствуйте!")
    }else if(pass === "" || pass === null){
        alert("Отменено")
    }else{
        alert("Неверный пароль")
    }
    
}else if(message === "" || pass === null ){
        alert("Отменено")
}else{
        alert("Я вас не знаю")
}