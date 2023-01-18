import { view_set } from "./view_set.mjs";

export function view_set_get(view, component) {
    return () => view_set(view, component);
}
