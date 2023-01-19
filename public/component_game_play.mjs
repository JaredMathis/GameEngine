import { button_back } from "./button_back.mjs";
import { values_for_each } from "./values_for_each.mjs";
import { tiles_prefix } from "./tiles_prefix.mjs";
import { tag_prefix } from "./tag_prefix.mjs";
import { img_from_tile_set } from "./img_from_tile_set.mjs";
import { element_div } from "./element_div.mjs";
import { element } from "./element.mjs";
import { element_on_click } from "./element_on_click.mjs";
import { copy } from "./copy.mjs";
import { range } from "./range.mjs";
import { local_storage_entities_get } from "./local_storage_entities_get.mjs";
import { game_object_ancestors_get } from "./game_object_ancestors_get.mjs";
import { game_object_by_tag_get } from "./game_object_by_tag_get.mjs";

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
                    let ui = element(tile_row, 'span');
                    let tile = { x, y, ui, overlays: [] };
                    tiles.push(tile);
                    element_on_click(ui, () => {
                        values_for_each(game.on_tile_choose, on_tile_choose => {
                            let requirement_tag = on_tile_choose.requirement;

                        });
                    });
                    let map_background_tag = map.background;
                    let background = game_object_by_tag_get(
                        game_objects, tags, map_background_tag);
                    let background_ancestors = game_object_ancestors_get(
                        game_objects, background);
                    let background_tile_set = background_ancestors[background_ancestors.length - 2];
                    let [background_y, background_x] = background.name.split('_');
                    img_from_tile_set(
                        ui, background_tile_set, background_x, background_y);
                }
            }

            map.tiles = tiles;
        });
    };
}
