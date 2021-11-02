import { render } from './core/index.js';
import './index.scss';

function TodoApp() {
    return `
    <h2>Todo App</h2>
    `;
}

render(TodoApp, {}, document.getElementById('root'))