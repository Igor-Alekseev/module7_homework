//Задание 4.

//Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. 
//Реализуйте его на прототипах.

//Определить иерархию электроприборов. 
//Включить некоторые в розетку. Посчитать потребляемую мощность. 

//Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). 
//Выбрав прибор, подумайте, какими свойствами он обладает.

//Определить родительскую функцию с методами, которые включают/выключают прибор из розетки;
//Создать делегирующую связь [[Prototype]] для двух конкретных приборов;
//У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов;
//Создать экземпляры каждого прибора;
//Вывести в консоль и посмотреть результаты работы, гордиться собой :)

const device = {
    electric: true,
    heating: true,
    isOn: function (time) {
        let consumption = this.power*time;
        console.log (`Потреблено ${consumption} Вт, за  ${time} секунд`);    
    },
    isOff:function(time) {
        let consumption = this.power*time*0;
        console.log (`Потреблено ${consumption} Вт, за  ${time} секунд.`);
        console.log (`устройство ${this.name} выключено и не потребляет энергию.`);
    }
};

function boilingWater (startTemp) {
    console.log(startTemp);
    let waterTemp = startTemp*10;
    console.log(`температура воды: ${waterTemp}`);
    if (waterTemp < 100) {
        setTimeout(boilingWater, 1000, ++startTemp);
    }
    if (waterTemp >= 100) {
        teapot.warmingWater(1.2);
    }
}

let lamp = {
    name: "Лампа",
    lighting: 800,
    power: 20,
    __proto__: device
};

let teapot = {
    name: "Электрочайник",
    capacity: 2,
    power: 1900,
    warmingWater: function (waterQty) {
        let time = this.power/waterQty*25;  //условно, расчёт времени на нагрев исходя из мощности и количества 
        this.isOn(time);
    },
    __proto__: device
};

console.log('Включаем лампу на 10 секунд');
lamp.isOn(10);
lamp.isOff(0);
console.log('Электрочайник 100 сек в состоянии выключено');
teapot.isOff(100);
console.log('------Теперь включим электрочайник------');
console.log(`Включаем ${teapot.name}`);
setTimeout(console.log, 1000, `${teapot.name} греется`);
setTimeout(boilingWater, 1000, 2);