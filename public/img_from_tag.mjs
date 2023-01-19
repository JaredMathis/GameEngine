import { img_from_tile_set } from "./img_from_tile_set.mjs";
import { game_object_ancestors_get } from "./game_object_ancestors_get.mjs";
import { game_object_by_tag_get } from "./game_object_by_tag_get.mjs";

export function img_from_tag(parent, game_objects, tags, tile_tag) {
    let tile = game_object_by_tag_get(
        game_objects, tags, tile_tag);
    let background_ancestors = game_object_ancestors_get(
        game_objects, tile);
    let background_tile_set = background_ancestors[background_ancestors.length - 2];
    let [background_y, background_x] = tile.name.split('_');
    img_from_tile_set(
        parent, background_tile_set, background_x, background_y);
    return {tile};
}
