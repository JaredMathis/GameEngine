import { component_button_view } from "./component_button_view.mjs";
import { game_prefix } from "./game_prefix.mjs";
import { component_edit_local_storage_property } from "./component_edit_local_storage_property.mjs";

export function game_on_tile_choose(parent, view, stored) {


    
    let field_infos = [
        { id: 'name', name: 'Name', type: 'string' },
        { id: 'requirement', name: 'Requirement', type: 'string' },
        { id: 'action', name: 'Action', type: 'string' },
    ];
    component_button_view(
        parent,
        view,
        'On Tile Choose',
        component_edit_local_storage_property(
            field_infos, game_prefix(), stored, 'on_tile_choose', '1'));
}
