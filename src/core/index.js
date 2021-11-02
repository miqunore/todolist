export function render(component, props, parent) {
  const html = component(props);
  parent.innerHTML = html;
}