import { component_new_open } from "./component_new_open.mjs";
import { component_button_view } from "./component_button_view.mjs";

export function component_game(parent, view) {
    component_new_open(
        parent, 
        view, 
        game_prefix(), [
            { id: 'name', name: 'Name of Game', type: 'string', },
        ],
        (parent, view, stored) => {
            let field_infos = [
                { id:'name', name: 'Name', type: 'string' },
            ]
            component_button_view(
                parent, 
                view, 
                'On Tile Choose', 
                component_edit_local_storage_property(
                    field_infos, game_prefix(), stored, 'on_tile_choose', '1'))
        }
        );
}

