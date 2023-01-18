import { component_new_open } from "./component_new_open.mjs";
import { tag_prefix } from "./tag_prefix.mjs";

export function component_tags(parent, view) {
    component_new_open(
        parent,
        view,
        tag_prefix(),
        [
            { id: 'name', name: 'Name of Tag', type: 'string', },
            { id: 'name', name: 'Definition', type: 'string', },
        ]
    );
}
