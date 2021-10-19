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
     } else {
        work1[valueInBox.textContent] = true;
        valueInBox.style.textDecoration = 'none';
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
    listWork.innerHTML += `            <div class="all_works" id="divBlock${i}">
    <input type="checkbox" id="checkBoxs${i}" onchange="onOffCheckBox(${i})">
    <label id="labelCheckBox${i}">${document.querySelector('input').value}</label>
    <button onclick="buttonDelite(${i})" id="buttonDelide${i}" class="btn_del">X</button>
    </div>`
    document.querySelector('input').value = '';
    i++
}

