import { component_button_view } from "./component_button_view.mjs";
import { game_prefix } from "./game_prefix.mjs";
import { component_new_open_local_storage_property } from "./component_new_open_local_storage_property.mjs";

export function game_on_tile_choose(parent, view, stored) {
    let field_infos = [
        { id: 'name', name: 'Name', type: 'string' },
        { id: 'requirement', name: 'Requirement', type: 'string' },
        { id: 'action', name: 'Action', type: 'string' },
    ];
    let title = 'On Tile Choose';
    let property_name = 'on_tile_choose';
    component_button_view(
        parent,
        view,
        title,
        function on_tile_choose(parent, view) {
            component_new_open_local_storage_property(
                parent, view, game_prefix(), stored, property_name, field_infos, undefined, true
            )
        }
        );
}
