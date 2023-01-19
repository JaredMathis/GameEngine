import { game_object_except } from "./game_object_except.mjs";
import { list_single } from "./list_single.mjs";
import { values_recursively_for_each } from "./values_recursively_for_each.mjs";

export function game_object_ancestors_get(game_objects, object) {
    let result = [];
    values_recursively_for_each(game_objects, (value, ancestors) => {
        if (value === object) {
            result.push(ancestors.slice());
        }
    }, undefined, game_object_except());
    return list_single(result);
}


