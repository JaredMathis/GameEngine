import { component_main } from "./component_main.mjs";
import { view_create } from "./view_create.mjs";

let view = view_create(document.body);
view.set(component_main);
