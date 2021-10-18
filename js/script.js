let ADD_BUTTON = document.querySelector('#buttonWork');

const work1 = {};

const listWork = document.querySelector('#list_work');

ADD_BUTTON.onclick = () => {
    work1[document.querySelector('input').value] = 1;
    console.log(work1);
    console.log(work1.value);
    listWork.innerHTML += `<input type="checkbox"><label>${document.querySelector('input').value}</label>`
    document.querySelector('input').value = '';
}

