import { component_new_open } from "./component_new_open.mjs";
import { element } from "./element.mjs";
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
            let img_parent = element_div(parent);
            img_parent.hidden = true;
            let img = await image_on_load(img_parent, initial_values.url);
            let tiles_y = Math.floor(img.height / initial_values.size);
            let tiles_x = Math.floor(img.width / initial_values.size);
            console.log({tiles_x,tiles_y})
        }
    );
}

function element_div(parent) {
    return element(parent, 'div');
}

