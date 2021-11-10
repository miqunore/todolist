let currentParent;

export function render(component, props, parent) {
    currentParent = parent;
    currentParent.callback = undefined;

    const html = component(props);
    parent.innerHTML = html;

    if (currentParent.callback) {
        currentParent.callback(parent);
    }
}

export function useRendered(callback) {
    currentParent.callback = callback;
}

export function createSubject(initialValue) {
    return {
        value: initialValue,
        subscribers: [],
        next(value) {
            this.value = value;
            this.subscribers.forEach((callback) => callback());
        },
        subscribe(callback) {
            this.subscribers.push(callback);
        },
        unsubscribe(callback) {
            this.subscribers = this.subscribers.filter((fn) => fn !== callback);
        },
    };
}
