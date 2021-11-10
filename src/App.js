import { render, useRendered } from "./core/index.js";
import { Layout } from "./layout/Layout.js";

export function App() {
    useRendered((el) => {
        render(Layout, {}, el.querySelector("#layout"));
    });

    return `<div id="layout"></div>`;
}
