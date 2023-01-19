import { component_edit_local_storage_property } from "./component_edit_local_storage_property.mjs";
import { component_new_open_local_storage } from "./component_new_open_local_storage.mjs";
import { element_img } from "./element_img.mjs";
import { element_on_click } from "./element_on_click.mjs";
import { image_on_load_hidden } from "./image_on_load_hidden.mjs";
import { range } from "./range.mjs";
import { tiles_prefix } from "./tiles_prefix.mjs";
import { view_set_get } from "./view_set_get.mjs";

export function component_tiles(parent, view) {
    component_new_open_local_storage(
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
        async (parent, view, root) => {
            let {size, url} = root;
            let img = await image_on_load_hidden(parent, url);
            let tiles_y = Math.floor(img.height / size);
            let tiles_x = Math.floor(img.width / size);

            let img_fields = [
                {
                    id: 'name',
                    name: 'Name (y- x- coordinates)',
                    type: 'string',
                },
                {
                    id: 'tags',
                    name: 'Tags (comma-separated)',
                    type: 'string',
                },
            ];

            for (let y of range(tiles_y)) {
                for (let x of range(tiles_x)) {
                    let img = element_img(parent, url)
                    img.style.width = size;
                    img.style.height = size;
                    img.style['object-fit'] = 'none';
                    img.style['object-position'] = `-${x * size}px -${y * size}px`;
                    
                    let id = y + '_' + x;

                    element_on_click(
                        img, 
                        view_set_get(
                            view, 
                            component_edit_local_storage_property(
                                img_fields, tiles_prefix(), root, root, 'tiles', id, true)
                        )
                    )
                }
            }
        }
    );
}



