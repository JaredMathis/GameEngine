import { component_button_view } from "./component_button_view.mjs";
import { component_new_open_local_storage_property } from "./component_new_open_local_storage_property.mjs";

export function component_button_property_child(parent, view, title, prefix, stored, property_name, field_infos) {
    component_button_view(
        parent,
        view,
        title,
        function on_tile_choose(parent, view) {
            component_new_open_local_storage_property(
                parent, view, prefix, stored, property_name, field_infos, undefined, true
            );
        }
    );
}
