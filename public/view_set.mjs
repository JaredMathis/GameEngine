export function view_set(view, component) {
    view.set(parent => component(parent, view));
}
