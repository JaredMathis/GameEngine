import { button_back } from "./button_back.mjs";
import { values_for_each } from "./values_for_each.mjs";
import { tiles_prefix } from "./tiles_prefix.mjs";
import { tag_prefix } from "./tag_prefix.mjs";
import { element_div } from "./element_div.mjs";
import { element_on_click } from "./element_on_click.mjs";
import { copy } from "./copy.mjs";
import { range } from "./range.mjs";
import { local_storage_entities_get } from "./local_storage_entities_get.mjs";
import { game_object_ancestors_get } from "./game_object_ancestors_get.mjs";
import { game_object_by_tag_get } from "./game_object_by_tag_get.mjs";
import { img_from_tag } from "./img_from_tag.mjs";
import { tag_exists } from "./tag_exists.mjs";
import { img_container } from "./img_container.mjs";

export function component_game_play(root) {
    return function (parent, view) {
        button_back(parent, view);

        let game = copy(root);
        let tile_sets = local_storage_entities_get(tiles_prefix());
        let tags = local_storage_entities_get(tag_prefix());
        let game_objects = { tile_sets, game };
        
        game_turn_next(game);

        let map_default_tag = game.map_default;
        let map_default = game_object_by_tag_get(game_objects, tags, map_default_tag);

        values_for_each(game.maps, map => {

            let tiles = [];

            for (let y in range(map.height)) {
                let tile_row = element_div(parent);
                for (let x in range(map.width)) {
                    let map_background_tag = map.background;
                    let ui = img_container(tile_row, root.tile_size);
                    let tile = { x, y, ui, overlays: [map_background_tag] };
                    tiles.push(tile);
                    element_on_click(ui, () => {
                        let requirement_met = false;
                        const on_tile_chooses = object_values(game.on_tile_choose);
                        values_for_each(on_tile_chooses, on_tile_choose => {
                            let {requirement, action} = on_tile_choose;
                            let overlays = tile.overlays.map(o => game_object_by_tag_get(
                                game_objects, tags, o));
                            for (let o of overlays) {
                                if (!tag_exists(
                                    tags, game_object_ancestors_get(game_objects, o), o, requirement)) {
                                    console.log('Requirement not met', {
                                        o, 
                                        requirement,
                                        name:on_tile_choose.name
                                    })
                                    return;
                                }
                            }
                            console.log('Requirement met', {
                                requirement,
                                name:on_tile_choose.name
                            })
                            let action_parts = action.split(' ');
                            if (action_parts[0] === 'overlay') {
                                let overlay_tag_get = action_parts[1];

                                let value_get = game_object_by_tag_get(
                                    game_objects, tags, overlay_tag_get)

                                let {value} = value_get;

                                img_from_tag(ui, game_objects, tags, value);

                                tile.overlays.push(value);
                            }

                            requirement_met = true;
                        });
                        game_turn_next(game);
                    });
                    for (let o of tile.overlays) {
                        img_from_tag(ui, game_objects, tags, o);
                    }
                }
            }

            map.tiles = tiles;
        });
    };
}

function object_values(o) {
    return Object.keys(o).map(k => o[k]);
}


function game_turn_next(game) {
    values_for_each(game.players, p => {
        if (!p.tags_added) {
            p.tags_added = [];
        }
    })

    let pc = 'player_current'

    let {player1, player2} = game.players;
    if (player1.tags_added.includes(pc)) {
        game_turn_player_from_to(pc, player1, player2);
    } else {
        game_turn_player_from_to(pc, player2, player1);
    }
}

function game_turn_player_from_to(pc, a, b) {
    list_item_remove(a.tags_added, pc);
    b.tags_added.push(pc);
}

function list_item_remove(list, item) {
    let index = list.indexOf(item);
    list.splice(index, 1);
}