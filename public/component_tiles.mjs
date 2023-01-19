import { component_edit_local_storage_property } from "./component_edit_local_storage_property.mjs";
import { component_new_open_local_storage } from "./component_new_open_local_storage.mjs";
import { element_on_click } from "./element_on_click.mjs";
import { img_container } from "./img_container.mjs";
import { img_from_tile_set } from "./img_from_tile_set.mjs";
import { img_to_count } from "./img_to_count.mjs";
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
            let { y_count, x_count } = await img_to_count(parent, url, size);

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

            for (let y of range(y_count)) {
                for (let x of range(x_count)) {
                    let container = img_container(parent, root.size);
                    let img = img_from_tile_set(container, root, x, y);
                    
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






