import { component_button_view } from "./component_button_view.mjs";
import { component_new_open_local_storage_property } from "./component_new_open_local_storage_property.mjs";

export function component_button_property_child(parent, view, title, prefix, root, entity, property_name, field_infos, component_on_open) {
    component_button_view(
        parent,
        view,
        title,
        function on_tile_choose(parent, view) {
            component_new_open_local_storage_property(
                parent, view, prefix, root, entity, property_name, field_infos, component_on_open, !component_on_open
            );
        }
    );
}
