import { component_new_open } from "./component_new_open.mjs";
import { element_img } from "./element_img.mjs";
import { image_on_load_hidden } from "./image_on_load_hidden.mjs";
import { range } from "./range.mjs";
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
            let {size, url} = initial_values;
            let img = await image_on_load_hidden(parent, url);
            let tiles_y = Math.floor(img.height / size);
            let tiles_x = Math.floor(img.width / size);

            for (let y of range(tiles_y)) {
                for (let x of range(tiles_x)) {
                    let img = element_img(parent, url)
                    img.style.width = size;
                    img.style.height = size;
                    img.style['object-fit'] = 'none';
                    img.style['object-position'] = `-${x * size}px -${y * size}px`;
                }
            }
        }
    );
}


