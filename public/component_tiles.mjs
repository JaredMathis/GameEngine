import { component_new_open } from "./component_new_open.mjs";
import { image_on_load } from "./image_on_load.mjs";
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
            let img = await image_on_load(parent, initial_values.url);
            img.hidden = true;
        }
    );
}

