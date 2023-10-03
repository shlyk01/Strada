// console.log(3 > 2) // true
// console.log(4 == 2 * 2) // (4 = 4 ) true
// console.log(6 >= 4) // true
// console.log(4 <= 5) // true
// console.log(5 != 4) // true
// let result = 8 != 4;
// console.log(result)
// console.log('Кот' < 'кот') // true
// console.log('01' == 1) // (1 == 1) true При сравнении всегда будет явное преобразование в числовой тип
// console.log("2" > 1) // (2 > 1) true При сравнении всегда будет явное преобразование в числовой тип 
// console.log(true == 1) // true явное преобразование из булевого типа в числовой
// console.log('01'=== 1) // false При строгом равенстве оставляет строковый тип без попытки их преобразованя
// console.log(true === 1) // false
// console.log(true !== 1) // true
// console.log(null == undefined) // true это особое правило языка
// console.log(null > 0) // (0 > 0) false
// console.log(null == 0) // false
// console.log(null >= 0) // (0 == 0) true

console.log("Кот" < "кот") // true маленькая буква больше большой
console.log("010" == 10) // true при сравнении разных типов происходит явное преобразование к числу 10 = 10
console.log(Boolean(1) > 0) // true
console.log(true === 1) // false 
console.log(1 != true) // false 1 = 1
console.log(1 !== false) // true
console.log(null != undefined) // false 
console.log(null == 0) // false 
console.log(undefined < 0) // false
console.log(4 <= 8) // true 
console.log(String(100) < 40) // false "100" < 40  => 100 < 40
console.log(null >= 0) // true 0 = 0
console.log('дом' > 'лес') // false т.к (л > д)
console.log('сумка' < 'сук') // false т.к (m > к)
console.log(5 * 5 - 5 > 30) // false 20 > 30
console.log(5 ** 3 < 100) // false 125 > 100
console.log(null === undefined) // false
console.log(null == undefined) // true