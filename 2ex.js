//Задание 2.
//Написать функцию, которая принимает в качестве аргументов строку и 
//объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. 
//Функция должна возвращать true или false.

function TrueFalseFunc(){
    let a = "mark";
    let obj ={};
    obj.mark='Audi';
    obj.date = 2021;
    obj.color = 'black';
    if(a in obj) return true;
    return false

}
TrueFalseFunc()