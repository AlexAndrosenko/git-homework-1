const car1 = {
    brand:"Daewoo",
    model:"Lanos",
    year:2010
}
const car2 = {
    brand:"Hyundai",
    model:"Santa Fe",
    owner: "Вася Джаваскриптов"
}
const car3 = {...car1, ...car2};
console.log(car3);