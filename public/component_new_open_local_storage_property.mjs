import { component_edit_local_storage_property } from "./component_edit_local_storage_property.mjs";
import { component_new_open_generic } from "./component_new_open_generic.mjs";
import { component_open_generic } from "./component_open_generic.mjs";
import { local_storage_object_set } from "./local_storage_object_set.mjs";
import { property_get } from "./property_get.mjs";

export function component_new_open_local_storage_property(
    parent, view, prefix, root, entity, property_name, fields, component_on_open, edit_immediately) {

    let entities_get = () => Object.keys(entity[property_name] || {});
    let on_new = () => {
        return component_edit_local_storage_property(fields, prefix, root, entity, property_name);
    };
    let component_edit_get = (child) => component_edit_local_storage_property(
        fields, prefix, root, entity, property_name, property_get(child, 'name'), true);
    let entity_name;
    let entity_get = () => entity[property_name][entity_name]
    let component_open_get = (component_opened) => { 
        return component_open_generic(
            entities_get, 
            value => entity_name = value,
            value => { 
                delete entity[property_name][value]; 
                local_storage_object_set(prefix + root.name, current => root);
            },
            edit_immediately 
                ? (parent, view) => component_edit_get(entity_get())(parent, view) 
                : component_opened);
        };

    component_new_open_generic(
        parent, view, component_on_open, on_new, entities_get, component_open_get, component_edit_get, entity_get, edit_immediately);
}


