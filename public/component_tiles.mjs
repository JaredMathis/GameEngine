import { component_empty } from "./component_empty.mjs";
import { component_new_open } from "./component_new_open.mjs";
import { element } from "./element.mjs";
import { element_on } from "./element_on.mjs";
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
            let url = initial_values.url;
            await image_on_load(parent, url);

        }
    );
}
async function image_on_load(parent, url) {
    let img = element(parent, 'img');
    img.src = url;
    await new Promise((resolve, reject) => {
        element_on(img, 'load', () => {
            resolve();
        });
        element_on(img, 'error', () => {
            reject();
        });
    });
}

