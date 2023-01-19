import { component_edit_local_storage_property } from "./component_edit_local_storage_property.mjs";
import { component_open_local_storage } from "./component_open_local_storage.mjs";
import { local_storage_entities_get } from "./local_storage_entities_get.mjs";
import { local_storage_key_selected_get } from "./local_storage_key_selected_get.mjs";
import { local_storage_object_get } from "./local_storage_object_get.mjs";
import { component_new_open_generic } from "./component_new_open_generic.mjs";

export function component_new_open_local_storage_property(
    parent, view, prefix, stored, property_name, fields, component_on_open) {
    
    let key_selected_get = () => localStorage
        .getItem(local_storage_key_selected_get(prefix));

    let entities_get = () => stored[property_name];
    let on_new = () => {
        return component_edit_local_storage_property(fields, prefix, stored, property_name);
    };
    let component_edit_get = () => component_edit_local_storage_property(
        fields, prefix, stored, property_name, undefined, true);
    let entity_get = () => local_storage_object_get(prefix + key_selected_get())
    let component_open_get = (component_opened) => component_open_local_storage(
        prefix, 
        component_opened,
    );

    component_new_open_generic(
        parent, view, component_on_open, on_new, entities_get, component_open_get, component_edit_get, entity_get);
}


