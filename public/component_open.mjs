import { component_choice_multiple } from "./component_choice_multiple.mjs";
import { local_storage_entities_get } from "./local_storage_entities_get.mjs";

export function component_open(prefix, component_on_open) {
    return function (parent, view) {
        let choices = local_storage_entities_get(prefix)
            .map(k => k.substring(prefix.length));
        component_choice_multiple(
            parent, choices, 'selected_' + prefix, view, component_on_open);
    }
}
