import { list_single } from "./list_single.mjs";
import { values_recursively_for_each } from "./values_recursively_for_each.mjs";

export function game_objects_by_tag_get(game_objects, tags_all, tag) {
    let result = [];
    values_recursively_for_each(game_objects, (value) => {
        let tags_for_value = game_object_tags_get(value);
        let final = list_single(tags_for_value);
        if (final === tag) {
            result.push(value);
        }
    }, undefined, value => value instanceof HTMLElement);
    return result;
}
function game_object_tags_get(value) {
    let tags_for_value = [];
    if (value.tags) {
        let { tags } = value;
        if (tags) {
            tags_for_value = tags.split(',');
        }
    }
    return tags_for_value;
}

