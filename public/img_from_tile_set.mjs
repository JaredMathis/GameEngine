import { img_tile } from "./img_tile.mjs";

export function img_from_tile_set(parent, tile_set, x, y) {
    let { size, url } = tile_set;
    let img = img_tile(parent, url, size, x, y);
    return img;
}
