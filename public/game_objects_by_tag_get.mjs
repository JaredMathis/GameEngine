import { game_object_tags_get } from "./game_object_tags_get.mjs";
import { list_single } from "./list_single.mjs";
import { values_recursively_for_each } from "./values_recursively_for_each.mjs";

export function game_objects_by_tag_get(game_objects, tags_all, tag) {
    let result = [];
    values_recursively_for_each(game_objects, (value, ancestors) => {
        if (tag_exists(tags_all, ancestors, value, tag)) {
            result.push(value);
        }
    }, 
    undefined, 
    value => value instanceof HTMLElement);
    return result;
}

function tag_exists(tags_all, ancestors, game_object, tag) {
    let tags_for_value = game_object_tags_get(game_object, ancestors);
    if (tags_for_value.length) {
        let final = list_single(tags_for_value);
        if (final === tag) {
            return true;
        }
    }
    return false;
}

