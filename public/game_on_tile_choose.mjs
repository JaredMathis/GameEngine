import { game_prefix } from "./game_prefix.mjs";
import { component_button_property_child } from "./component_button_property_child.mjs";

export function game_on_tile_choose(parent, view, stored) {
    component_button_property_child(
        parent, view, 'On Tile Choose', game_prefix(), stored, 'on_tile_choose', [
            { id: 'name', name: 'Name', type: 'string' },
            { id: 'requirement', name: 'Requirement', type: 'string' },
            { id: 'action', name: 'Action', type: 'string' },
        ]);
}

