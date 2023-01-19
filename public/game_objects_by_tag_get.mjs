import { tag_exists } from "./tag_exists.mjs";
import { values_recursively_for_each } from "./values_recursively_for_each.mjs";
import { game_object_except } from "./game_object_except.mjs";

export function game_objects_by_tag_get(game_objects, tags_all, tag) {
    let result = [];
    values_recursively_for_each(
        game_objects, 
        (value, ancestors) => {
            if (tag_exists(tags_all, ancestors, value, tag)) {
                result.push(value);
            }
        }, 
        undefined, 
        game_object_except()
        );
    return result;
}


