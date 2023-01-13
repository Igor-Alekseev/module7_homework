//Задание 3.
//Написать функцию, которая создает пустой объект, но без прототипа.

function createObj(){
    const nullObj = Object.create(null);
    console.log(nullObj);
}
createObj()