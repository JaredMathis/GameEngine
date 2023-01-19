import { button_back } from "./button_back.mjs";
import { component_button_view } from "./component_button_view.mjs";
import { noop } from "./noop.mjs";
import { list_empty_not } from "./list_empty_not.mjs";

export function component_new_open_generic(
    parent, view, component_on_open, on_new, entities_get, component_open_get, component_edit_get, entity_get) {

    button_back(parent, view);
    component_button_view(
        parent,
        view,
        'New',
        on_new()
    );
    let entities = entities_get();
    if (list_empty_not(entities)) {
        component_open_get(component_opened)(parent, view);
    }

    function component_opened(parent, view) {
        button_back(parent, view);
        let entity = entity_get();
        component_button_view(
            parent,
            view,
            'Edit',
            component_edit_get(entity)
        );
        (component_on_open || noop)(
            parent,
            view,
            entity);
    }
}
