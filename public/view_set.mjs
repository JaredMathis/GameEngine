export function view_set(view, component) {
    return () => {
        view.set(parent => component(parent, view));
    };
}
