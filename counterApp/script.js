
console.log('works');

const total = document.getElementById('#total')

const addBtn = document.getElementById('add');
const subBtn = document.getElementById('subtract');
const mulBtn2 = document.getElementById('mult-2');
const divBtn2 = document.getElementById('div-2');
const mulBtn5 = document.getElementById('mult-5');
const divBtn5 = document.getElementById('div-5');

// Attach funnctions to buttons 
addBtn.addEventListener("click", add);
subBtn.addEventListener('click', subtract);
mulBtn2.addEventListener('click', multiplyBy2);
divBtn2.addEventListener('click', divideBy2);
mulBtn5.addEventListener('click', multiplyBy5);
divBtn5.addEventListener('click', divideBy5);


function add() {
   console.log(total.textContent);
   total.textContent = Number(total.textContent) + 1

}

function subtract() {
   console.log(total.textContent);
   total.textContent = Number(total.textContent) - 1
}


function multiplyBy2() {
   console.log(total.textContent);
   total.textContent = Number(total.textContent) * 2
}

function divideBy2() {
   console.log(total.textContent);
   total.textContent = Number(total.textContent) / 2
}


function multiplyBy5() {
   console.log(total.textContent);
   total.textContent = Number(total.textContent) * 5
}

function divideBy5() {
   console.log(total.textContent);
   total.textContent = Number(total.textContent) / 5
}


