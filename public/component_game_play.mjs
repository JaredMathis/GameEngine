import { button_back } from "./button_back.mjs";
import { values_for_each } from "./values_for_each.mjs";
import { tiles_prefix } from "./tiles_prefix.mjs";
import { tag_prefix } from "./tag_prefix.mjs";
import { element_div } from "./element_div.mjs";
import { element } from "./element.mjs";
import { element_on_click } from "./element_on_click.mjs";
import { copy } from "./copy.mjs";
import { range } from "./range.mjs";
import { local_storage_entities_get } from "./local_storage_entities_get.mjs";
import { game_object_ancestors_get } from "./game_object_ancestors_get.mjs";
import { game_object_by_tag_get } from "./game_object_by_tag_get.mjs";
import { game_object_tags_get } from "./game_object_tags_get.mjs";
import { img_from_tag } from "./img_from_tag.mjs";

export function component_game_play(root) {
    return function (parent, view) {
        button_back(parent, view);

        let game = copy(root);

        let tile_sets = local_storage_entities_get(tiles_prefix());
        let tags = local_storage_entities_get(tag_prefix());

        let game_objects = { tile_sets, game };

        console.log({ game_objects });

        let map_default_tag = game.map_default;
        let map_default = game_object_by_tag_get(game_objects, tags, map_default_tag);
        // console.log({map_default});
        values_for_each(game.maps, map => {

            let tiles = [];

            for (let y in range(map.height)) {
                let tile_row = element_div(parent);
                for (let x in range(map.width)) {
                    let map_background_tag = map.background;
                    let ui = element(tile_row, 'span');
                    let tile = { x, y, ui, overlays: [map_background_tag] };
                    tiles.push(tile);
                    element_on_click(ui, () => {
                        values_for_each(game.on_tile_choose, on_tile_choose => {
                            let {requirement, action} = on_tile_choose;
                            let overlays = tile.overlays.map(o => game_object_by_tag_get(
                                game_objects, tags, o));
                            let overlay_tags = overlays.map(o => 
                                game_object_tags_get(
                                    o, game_object_ancestors_get(game_objects, o)
                                )
                            );
                            let action_parts = action.split(' ');
                            if (action_parts[0] === 'overlay') {
                                let overlay_tag_get = action_parts[1];
                                console.log(overlay_tag_get);
                                // tile.overlays.push(overlay_tag);
                            }
                            console.log({overlay_tags});
                        });
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

