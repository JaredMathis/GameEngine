import { tag_prefix } from "./tag_prefix.mjs";

export function component_tags() {
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
