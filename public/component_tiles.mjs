import { component_empty } from "./component_empty.mjs";
import { component_new_open } from "./component_new_open.mjs";
import { element } from "./element.mjs";
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
        (parent, view, initial_values) => {
            let img = element(parent, 'img');
            img.src = initial_values.url
        }
    );
}
