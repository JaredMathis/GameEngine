import { component_new_open } from "./component_new_open.mjs";
import { image_on_load_hidden } from "./image_on_load_hidden.mjs";
import { tiles_prefix } from "./tiles_prefix.mjs";

export function component_tiles(parent, view) {
    component_new_open(
        parent,
        view,
        tiles_prefix(), 
        [
            {
                id: 'name',
                name: 'Name of Tile Set',
                type: 'string',
            },
            {
                id: 'url',
                name: 'URL',
                type: 'string',
            },
            {
                id: 'size',
                name: 'Size',
                type: 'string',
            },
        ],
        async (parent, view, initial_values) => {
            let img = await image_on_load_hidden(parent, initial_values);
            let tiles_y = Math.floor(img.height / initial_values.size);
            let tiles_x = Math.floor(img.width / initial_values.size);

            for (let y of range(tiles_y)) {

            }
        }
    );
}

function range(limit) {
    let result = [];
    for (let i = 0; i < limit; i++) {
        result.push(i)
    }
    return result;
}


