import { component_main } from "./component_main.mjs";
import { view_create } from "./view_create.mjs";
import { document_body_style_set } from "./document_body_style_set.mjs";

document_body_style_set();

let view = view_create(document.body);
view.set(parent => component_main(parent, view));


