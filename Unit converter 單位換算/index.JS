/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// first - area
const convertBtn = document.getElementById("btn")
const Number = document.getElementById("num")

// second - area
const lengthcard = document.getElementById("lengthcard")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")

// Button 
convertBtn.addEventListener("click", function(){
    let value = Number.value;

    const meter = (value * 3.281).toFixed(3)
    const feet = (value / 3.281).toFixed(3)

    const liters = (value / 0.264).toFixed(3)
    const gallons = (value * 0.264).toFixed(3)

    const kilogram = (value / 2.204).toFixed(3)
    const pounds = (value * 2.204).toFixed(3)

    lengthcard.textContent = `${value} meter = ${meter} feet | ${value} feer = ${feet} meter`;

    volume.textContent = `${value} liters = ${gallons} gallons | ${value} gallons = ${liters} liters`

    mass.textContent = `${value} kg = ${pounds} pounds | ${value} pounds = ${kilogram} kg`

})

// ❗️ .textContent => typeError: cannot set properties of null 

// ❎ textContent can not be null

// if not any value is null, then check DOM element, if you use the "getElementById()" method and pass it an "id" that is not present in DOM. ( when I wrong it's because I use "class" not "id" when I change it, then all good.)

// toFixed(3) is mean Three decimal places to the right. 





