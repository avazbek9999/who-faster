var elForm = document.querySelector('.form');
var elDistenceInput = elForm.querySelector('.form__input');
var elResaltBox = document.querySelector('.list__item__paragrph');
var elResaltBox2 = document.querySelector('.paragraph2');
var elResaltBox3 = document.querySelector('.paragraph3');
var elResaltBox4 = document.querySelector('.paragraph4');


var speedMan = 3.6;
var speedBike = 20.1;
var speedCar = 70;
var speedPlane = 800;

function calculeteTime(distance, speed) {
    var hour = Math.floor(distance / speed);
    var minute = Math.floor((distance / speed - hour) * 60);
    var secound = Math.floor(((distance / speed - hour) * 60 - minute) * 60);
    return hour + " soat " + minute + " minut " + secound + " secund "

}

elForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    var dictanceInput = Number(elDistenceInput.value.trim())

    elResaltBox.textContent = calculeteTime(dictanceInput, speedMan);
    elResaltBox2.textContent = calculeteTime(dictanceInput, speedBike);
    elResaltBox3.textContent = calculeteTime(dictanceInput, speedCar);
    elResaltBox4.textContent = calculeteTime(dictanceInput, speedPlane);
   
})