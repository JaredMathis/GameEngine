import { game_object_tags_get } from "./game_object_tags_get.mjs";
import { list_single } from "./list_single.mjs";

export function tag_exists(tags_all, ancestors, game_object, tag) {

    let expression = tag;

    let matches = tags_all.filter(t => t.name === tag);
    if (matches.length > 1) {
        throw new Error('Multiple tags matched ' + tag);
    }
    if (matches.length === 1) {
        expression = expression
            .replaceAll(tag, `( ${matches[0].definition} )`)
    }

    let tags_for_value = game_object_tags_get(
        game_object, ancestors);
    if (tags_for_value.length) {
        let final = list_single(tags_for_value);
        if (final === tag) {
            return true;
        }
    }
    return false;
}
