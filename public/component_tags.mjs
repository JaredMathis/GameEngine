import { component_new_open_local_storage } from "./component_new_open_local_storage.mjs";
import { tag_prefix } from "./tag_prefix.mjs";

export function component_tags(parent, view) {
    component_new_open_local_storage(
        parent,
        view,
        tag_prefix(),
        [
            { id: 'name', name: 'Name of Tag', type: 'string', },
            { id: 'definition', name: 'Definition', type: 'string', },
        ]
    );
}
