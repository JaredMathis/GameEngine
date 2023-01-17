import { component_main } from "./component_main.mjs";
import { view_create } from "./view_create.mjs";
import { element_style_background_color_standard } from "./element_style_background_color_standard.mjs";
import { element_style_standard } from "./element_style_standard.mjs";

document_body_style_set();

let view = view_create(document.body);
view.set(parent => component_main(parent, view));

function document_body_style_set() {
    element_style_background_color_standard(document.body);
    element_style_standard(document.body);
}
