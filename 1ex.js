//Задание 1.
//Написать, функцию, которая принимает в качестве аргумента объект и 
//выводит в консоль все ключи и значения только собственных свойств. 
//Данная функция не должна возвращать значение.


let obj ={};
obj.mark='Audi';
obj.date = 2021;
obj.color = 'black';
delete obj.color;

function showResult(){
    obj.hasOwnProperty;
    console.log(obj)
}
showResult()