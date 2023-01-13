//Задание 5.

//Переписать консольное приложение из предыдущего юнита на классы.

let qty = 0;
let qtyOn = 0;

class Device {
    constructor(deviceName, deviceType, power) {
        this.name = deviceName;
        this.type = deviceType;
        this.power = power;
        this.electric = 'true';
        this.heating = 'true';
        qty++;
    }
    isOn(time) {
        let consumption = this.power*(time/3600);
        consumption = consumption.toFixed(2);
        qtyOn++;
        const  stateOn = `Устройством ${this.type} ${this.name} потреблено ${consumption} Вт, за  ${time} секунд`;
        return stateOn;
    }
    isOff() {        
        let stateoff = `Устройство ${this.type} ${this.name} выключено и не потребляет энергию.`;
        return stateoff;
    }
    static showQtyDevices(){
        console.log('количество устройств ' + qty);
        return 'Суммарное количество включений ' + qtyOn;
    }    
}

class Kitchenappliances extends Device {
    constructor (deviceName, deviceType, power, capacity) {
        super(deviceName, deviceType, power);
        this.capacity = capacity;        
    }
    warmingWater(waterQty) {
        let time = this.power/waterQty*25;
        let consumption  = this.isOn(time); 
        const result = `${consumption} нагрето ${waterQty} мл жидкости.`;
        return result;
    }
}

const tableLamp = new Device('Yandex', 'lamp', 50);
const teapot = new Kitchenappliances('Bork', 'teapot', 1500, 2700);
const coffMachine = new Kitchenappliances('Miele', 'coffeemachine', 2000, 800);

console.log(teapot.warmingWater(500));
console.log(coffMachine.isOff());
console.log(tableLamp.isOn(120));
console.log(Device.showQtyDevices());