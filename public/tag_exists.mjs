import { game_object_tags_get } from "./game_object_tags_get.mjs";
import { list_single } from "./list_single.mjs";

export function tag_exists(tags_all, ancestors, game_object, tag) {
    let parenthesis_left = '(';
    let parenthesis_right = ')';
    let and = '&&';
    let or = '||';
    let tokens_key = [
        parenthesis_left, 
        parenthesis_right,
        and, 
        or,
    ];

    let expression = tag;

    let matches = tags_all.filter(t => t.name === tag);
    if (matches.length > 1) {
        throw new Error('Multiple tags matched ' + tag);
    }
    if (matches.length === 1) {
        expression = expression
            .replaceAll(tag, `${parenthesis_left} ${matches[0].definition} ${parenthesis_right}`)
    }

    expression = expression
        .replaceAll(` and `, ` ${and} `) 
    expression = expression
        .replaceAll(` or `, ` ${or} `)
    
    let tokens = expression.split(' ');

    let tags_for_value = game_object_tags_get(
        game_object, ancestors);
    if (tags_for_value.length) {
        if (tags_for_value.includes(tag)) {
            return true;
        }
    }
    return false;
}
