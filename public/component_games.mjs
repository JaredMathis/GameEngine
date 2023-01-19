import { component_new_open_local_storage } from "./component_new_open_local_storage.mjs";
import { game_prefix } from "./game_prefix.mjs";
import { component_button_property_child } from "./component_button_property_child.mjs";
import { component_button_view } from "./component_button_view.mjs";
import { button_back } from "./button_back.mjs";
import { img_to_count } from "./img_to_count.mjs";
import { local_storage_entity_keys_get } from "./local_storage_entity_keys_get.mjs";
import { values_for_each } from "./values_for_each.mjs";
import { tiles_prefix } from "./tiles_prefix.mjs";
import { local_storage_object_get } from "./local_storage_object_get.mjs";
import { assert } from "./assert.mjs";
import { tag_prefix } from "./tag_prefix.mjs";

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
        console.log({map_default});

        values_for_each(game.maps, map => {
            let tiles = [];
            for (let y in range(map.height)) {
                for (let x in range(map.width)) {
                    tiles.push({
                        x,
                        y,
                        overlays: [
                            
                        ]
                    });
                }
            }
            map.tiles = tiles;
        });
    }
}

function local_storage_entities_get(prefix) {
    let tile_keys = local_storage_entity_keys_get(prefix);
    let tile_sets = tile_keys.map(key => local_storage_object_get(key));
    return tile_sets;
}

function copy(object) {
    return JSON.parse(JSON.stringify(object));
}

function range(limit) {
    let result = [];
    for (let i = 0; i < limit; i++) {
        result.push(i)
    }
    return result;
}

function game_objects_by_tag_get(game_objects, tags_all, tag) {
    let result = [];
    values_recursively_for_each(game_objects, value => {
        if (value.tags) {
            let {tags} = value;
            if (tags) {
                let split = tags.split(',');
                let final = list_single(split);
                if (final === tag) {
                    result.push(value);
                }
            }
        }
    });
    return result;
}

function game_object_by_tag_get(game_objects, tags, tag) {
    return list_single(game_objects_by_tag_get(game_objects, tags, tag));
}

function list_single(list) {
    assert(list.length === 1);
    return list[0];
}

function values_recursively_for_each(object, for_each, ancestors) {
    if (!ancestors) {
        ancestors = [];
    }
    values_for_each(object, value => {
        for_each(value, ancestors);
        if (typeof value === typeof {}) {
            ancestors.push(value);
            values_recursively_for_each(value, for_each, ancestors)
            ancestors.pop();
        }
    })
}