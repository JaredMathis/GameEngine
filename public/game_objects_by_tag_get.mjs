import { list_single } from "./list_single.mjs";
import { values_recursively_for_each } from "./values_recursively_for_each.mjs";

export function game_objects_by_tag_get(game_objects, tags_all, tag) {
    let result = [];
    values_recursively_for_each(game_objects, value => {
        if (value.tags) {
            let { tags } = value;
            if (tags) {
                let split = tags.split(',');
                let final = list_single(split);
                if (final === tag) {
                    result.push(value);
                }
            }
        }
    });
    return result;
}
