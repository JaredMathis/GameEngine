import { component_new_open_local_storage } from "./component_new_open_local_storage.mjs";
import { game_prefix } from "./game_prefix.mjs";
import { component_button_property_child } from "./component_button_property_child.mjs";
import { component_button_view } from "./component_button_view.mjs";
import { button_back } from "./button_back.mjs";
import { values_for_each } from "./values_for_each.mjs";
import { tiles_prefix } from "./tiles_prefix.mjs";
import { tag_prefix } from "./tag_prefix.mjs";
import { img_from_tile_set } from "./img_from_tile_set.mjs";
import { element_div } from "./element_div.mjs";
import { element } from "./element.mjs";
import { element_on_click } from "./element_on_click.mjs";
import { copy } from "./copy.mjs";
import { list_single } from "./list_single.mjs";
import { range } from "./range.mjs";
import { local_storage_entities_get } from "./local_storage_entities_get.mjs";
import { game_objects_by_tag_get } from "./game_objects_by_tag_get.mjs";
import { game_object_ancestors_get } from "./game_object_ancestors_get.mjs";

export function component_games(parent, view) {
    component_new_open_local_storage(
        parent, 
        view, 
        game_prefix(), 
        [
            { id: 'name', name: 'Name of Game', type: 'string', },
            { id: 'map_default', name: 'Default map tag', type: 'string', },
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

function component_game_play(root) {
    return function (parent, view) {
        button_back(parent, view);

        let game = copy(root);
        
        let tile_sets = local_storage_entities_get(tiles_prefix());
        let tags = local_storage_entities_get(tag_prefix());

        let game_objects = {tile_sets,game};

        console.log({game_objects});

        let map_default_tag = game.map_default;
        let map_default = game_object_by_tag_get(game_objects, tags, map_default_tag)
        // console.log({map_default});

        values_for_each(game.maps, map => {
            let map_background_tag = map.background;
            let background = game_object_by_tag_get(
                game_objects, tags, map_background_tag);
            let background_ancestors = game_object_ancestors_get(
                game_objects, background);
            let background_tile_set = background_ancestors[background_ancestors.length - 2];
            let [background_y, background_x] = background.name.split('_');

            for (let y in range(map.height)) {
                let tile_row = element_div(parent);
                for (let x in range(map.width)) {
                    let tile = element(tile_row, 'span');
                    element_on_click(tile, () => {
                        // values_for_each(game.on_tile_choose,
                    })
                    img_from_tile_set(
                        tile, background_tile_set, background_x, background_y);
                }
            }
        });
    }
}

function game_object_by_tag_get(game_objects, tags, tag) {
    return list_single(game_objects_by_tag_get(game_objects, tags, tag));
}

