import { button_back } from "./button_back.mjs";
import { component_button_view } from "./component_button_view.mjs";
import { noop } from "./noop.mjs";
import { component_edit_local_storage } from "./component_edit_local_storage.mjs";
import { component_open_local_storage } from "./component_open_local_storage.mjs";
import { list_empty_not } from "./list_empty_not.mjs";
import { local_storage_entities_get } from "./local_storage_entities_get.mjs";
import { local_storage_key_selected_get } from "./local_storage_key_selected_get.mjs";
import { local_storage_object_get } from "./local_storage_object_get.mjs";

export function component_new_open_local_storage(
    parent, view, prefix, fields, component_on_open) {
    
    let key_selected_get = () => localStorage
        .getItem(local_storage_key_selected_get(prefix));

    let entities_get = () => local_storage_entities_get(prefix);
    let on_new = () => component_edit_local_storage(fields, prefix);
    let component_edit_get = () => component_edit_local_storage(
        fields, 
        prefix,
        key_selected_get());
    let entity_get = () => local_storage_object_get(prefix + key_selected_get())
    let component_open_get = () => component_open_local_storage(
        prefix, 
        component_opened,
    );

    component_new_open_generic(parent, view, on_new, entities_get, component_open_get);

    function component_opened(parent, view) {
        component_button_view(
            parent,
            view,
            'Edit',
            component_edit_get()
        );
        (component_on_open || noop)(
            parent, 
            view, 
            entity_get());
        button_back(parent, view);
    }
}

function component_new_open_generic(parent, view, on_new, entities_get, component_open_get) {
    button_back(parent, view);
    component_button_view(
        parent,
        view,
        'New',
        on_new
    );
    let entities = entities_get();
    if (list_empty_not(entities)) {
        component_button_view(
            parent,
            view,
            'Open',
            component_open_get()
        );
    }
}

