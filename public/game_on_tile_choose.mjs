import { game_prefix } from "./game_prefix.mjs";
import { component_button_property_child } from "./component_button_property_child.mjs";

export function game_on_tile_choose(parent, view, stored) {
    let field_infos = [
        { id: 'name', name: 'Name', type: 'string' },
        { id: 'requirement', name: 'Requirement', type: 'string' },
        { id: 'action', name: 'Action', type: 'string' },
    ];
    let title = 'On Tile Choose';
    let property_name = 'on_tile_choose';
    let prefix = game_prefix();
    component_button_property_child(parent, view, title, prefix, stored, property_name, field_infos);
}

