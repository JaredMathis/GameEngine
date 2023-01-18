import { component_new_open } from "./component_new_open.mjs";
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
                id: 'id',
                name: 'URL',
                type: 'string',
            },
        ]
    );
}
