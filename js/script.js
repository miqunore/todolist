let ADD_BUTTON = document.querySelector('#buttonWork');

const work1 = {};

const listWork = document.querySelector('#list_work');

function onOffCheckBox(y) {
     let chBox;
     let valueInBox = document.querySelector(`#labelCheckBox${y}`);
     chBox = document.querySelector(`#checkBoxs${y}`);
     if (chBox.checked) {
        work1[valueInBox.textContent] = false;
        valueInBox.style.textDecoration = 'line-through';
        valueInBox.parentElement.classList.add("no_activ");
        valueInBox.parentElement.classList.remove("activ");
     } else {
        work1[valueInBox.textContent] = true;
        valueInBox.style.textDecoration = 'none';
        valueInBox.parentElement.classList.remove("no_activ");
        valueInBox.parentElement.classList.add("activ");
     }
}

let i = 0;

function buttonDelite(x) {
    let obj = document.querySelector(`#labelCheckBox${x}`).textContent;
    document.querySelector(`#divBlock${x}`).remove();
    delete work1[obj];
}

ADD_BUTTON.onclick = () => {
    work1[document.querySelector('input').value] = true;
    listWork.innerHTML += `            <div class="all_works activ" id="divBlock${i}">
    <input type="checkbox" id="checkBoxs${i}" onchange="onOffCheckBox(${i})">
    <label id="labelCheckBox${i}">${document.querySelector('input').value}</label>
    <button onclick="buttonDelite(${i})" id="buttonDelide${i}" class="btn_del">X</button>
    </div>`
    document.querySelector('input').value = '';
    i++
}

let radioButtonAll = document.querySelector("#radioAll");
let radioButtonActiv = document.querySelector("#radioActiv");
let radioButtonNoActiv = document.querySelector("#radioNoActiv");

let radioPointAll = document.querySelector("#radioAll");

radioPointAll.onclick = () => {
    let allll = document.getElementsByClassName("all_works");
    for (let item of allll) {
        item.style.display = "block"
    }
}

radioButtonActiv.onclick = () => {
    let activvvv = document.getElementsByClassName("activ");
    let noactivvv = document.getElementsByClassName("no_activ");

    for (let item of activvvv) {
        item.style.display = "block"
    }
    for (let item of noactivvv) {
        item.style.display = "none"
    }
}

radioButtonNoActiv.onclick = () => {
    let activvvv = document.getElementsByClassName("activ");
    let noactivvv = document.getElementsByClassName("no_activ");

    for (let item of activvvv) {
        item.style.display = "none"
    }
    for (let item of noactivvv) {
        item.style.display = "block"
    }
}


