import { button_back } from "./button_back.mjs";
import { component_button_view } from "./component_button_view.mjs";
import { component_new } from "./component_new.mjs";
import { component_open } from "./component_open.mjs";
import { list_empty_not } from "./list_empty_not.mjs";
import { local_storage_entities_get } from "./local_storage_entities_get.mjs";

export function component_new_open(parent, view, prefix, fields) {
    component_button_view(
        parent,
        view,
        'New',
        component_new(fields, prefix)
    );
    let entities = local_storage_entities_get(prefix);
    if (list_empty_not(entities)) {
        component_button_view(
            parent, view, 'Open', component_open(prefix));
    }
    button_back(parent, view);
}
