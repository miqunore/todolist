import { render } from './core/index.js';
import './index.scss';
import {  } from './components/TodoItem.js';

function TodoApp() {
    return `
    <section class="section_top">
        <h1>Список дел:</h1>
        <div class="add_work">
            <input type="text" placeholder="добавить дело" id="addWork">
            <button id=buttonWork>Добавить</button>
        </div>

        <div>
            <input type="radio" id="radioAll" name="radiobutton" value="radiobutton" checked>Всё
            <input type="radio" id="radioActiv" name="radiobutton" value="radiobutton">Активное
            <input type="radio" id="radioNoActiv" name="radiobutton" value="radiobutton">Не активное
        </div>

        <div class="work1" id="list_work">
            
           
        </div>
    </section>
    `;
}

render(TodoApp, {}, document.getElementById('root'))