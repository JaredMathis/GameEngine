import { component_new_open_local_storage } from "./component_new_open_local_storage.mjs";
import { game_prefix } from "./game_prefix.mjs";
import { component_button_property_child } from "./component_button_property_child.mjs";
import { component_button_view } from "./component_button_view.mjs";
import { component_game_play } from "./component_game_play.mjs";

export function component_games(parent, view) {
    component_new_open_local_storage(
        parent, 
        view, 
        game_prefix(), 
        [
            { id: 'name', name: 'Name of Game', type: 'string', },
            { id: 'map_default', name: 'Default map tag', type: 'string', },
            { id: 'tile_size', name: 'Tile size', type: 'string', },
        ],
        (parent, view, root) => {
            component_button_view(parent, view, 'Play!', component_game_play(root));
            component_button_property_child(
                parent, view, 'Maps', game_prefix(), root, root, 'maps', [
                    { id: 'name', name: 'Name', type: 'string' },
                    { id: 'tags', name: 'Tags', type: 'string' },
                    { id: 'height', name: 'Height (Number of tiles vertically)', type: 'string' },
                    { id: 'width', name: 'Width (Number of tiles vertically)', type: 'string' },
                    { id: 'background', name: 'Background (tag of background tile)', type: 'string' },
                ]);
            component_button_property_child(
                parent, view, 'On Tile Choose', game_prefix(), root, root, 'on_tile_choose', [
                    { id: 'name', name: 'Name', type: 'string' },
                    { id: 'priority', name: 'Priority (order actions are ran)', type: 'string' },
                    { id: 'requirement', name: 'Requirement', type: 'string' },
                    { id: 'action', name: 'Action', type: 'string' },
                ]);
            component_button_property_child(
                parent, view, 'Players', game_prefix(), root, root, 'players', [
                    { id: 'name', name: 'Name', type: 'string' },
                    { id: 'tags', name: 'Tags', type: 'string' },
                ], 
                (parent, view, entity) => {
                    component_button_property_child(
                        parent, view, 'Children', game_prefix(), root, entity, 'children', [
                            { id: 'name', name: 'Name', type: 'string' },
                            { id: 'tags', name: 'Tags', type: 'string' },
                            { id: 'value', name: 'Value', type: 'string' },
                        ]);
                });
        }
        );
}


