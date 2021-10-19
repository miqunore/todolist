let ADD_BUTTON = document.querySelector('#buttonWork');

const work1 = {};

const listWork = document.querySelector('#list_work');

function fun1(i) {
     let chBox;
     let valueInBox = document.querySelector(`#labelCheckBox${i}`);
     chBox = document.querySelector(`#checkBoxs${i}`);
     if (chBox.checked) {
        work1[valueInBox.textContent] = false;
        valueInBox.style.textDecoration = 'line-through';
     } else {
        work1[valueInBox.textContent] = true;
        valueInBox.style.textDecoration = 'none';
     }
}

let i = 0;

ADD_BUTTON.onclick = () => {
    work1[document.querySelector('input').value] = true;
    listWork.innerHTML += `            <div class="all_works">
    <input type="checkbox" id="checkBoxs${i}" onchange="fun1(${i})">
    <label id="labelCheckBox${i}">${document.querySelector('input').value}</label>
</div>`
    document.querySelector('input').value = '';
    i++
}

