import { element } from "./element.mjs";

export function img_container(parent, size) {
    let ui = element(parent, 'span');
    ui.style.position = 'relative';
    ui.style.display = 'inline-block';
    ui.style.width = size + 'px';
    ui.style.height = size + 'px';
    return ui;
}
