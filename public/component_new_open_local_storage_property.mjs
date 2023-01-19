import { component_edit_local_storage_property } from "./component_edit_local_storage_property.mjs";
import { local_storage_key_selected_get } from "./local_storage_key_selected_get.mjs";
import { local_storage_object_get } from "./local_storage_object_get.mjs";
import { component_new_open_generic } from "./component_new_open_generic.mjs";
import { component_open_generic } from "./component_open_generic.mjs";

export function component_new_open_local_storage_property(
    parent, view, prefix, stored, property_name, fields, component_on_open) {

    let entities_get = () => stored[property_name] || [];
    let on_new = () => {
        return component_edit_local_storage_property(fields, prefix, stored, property_name);
    };
    let component_edit_get = () => component_edit_local_storage_property(
        fields, prefix, stored, property_name, undefined, true);
    let entity;
    let entity_get = () => entity
    let component_open_get = (component_opened) => { 
        return component_open_generic(
            entities_get, 
            value => entity = value,
            component_opened);
        };

    component_new_open_generic(
        parent, view, component_on_open, on_new, entities_get, component_open_get, component_edit_get, entity_get);
}


