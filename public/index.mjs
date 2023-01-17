import { component_main } from "./component_main.mjs";
import { view_create } from "./view_create.mjs";
import { element_style_background_color_standard } from "./element_style_background_color_standard.mjs";

element_style_background_color_standard(document.body);

let view = view_create(document.body);
view.set(component_main);
