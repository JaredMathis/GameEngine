import { game_object_tags_get } from "./game_object_tags_get.mjs";
import { range } from "./range.mjs";
import { values_for_each } from "./values_for_each.mjs";

export function tag_exists(
    tags_all, ancestors, game_object, tag) {
    let parenthesis_left = '(';
    let parenthesis_right = ')';
    let and = '&&';
    let or = '||';
    let not = '!';
    let tokens_key = [
        parenthesis_left, 
        parenthesis_right,
        and, 
        or,
        not,
    ];

    let expression = ` ${tag} `;

    let versions = [expression];

    let changed = true; 
    for (let i of range(100)) {
        changed = false;
        let blob = tokens_key_not_get(expression, tokens_key);
        values_for_each(blob, (value, key) => {
            let matches = tags_all.filter(t => t.name === key);
            if (matches.length > 1) {
                throw new Error('Multiple tags matched ' + key);
            }
            if (matches.length === 1) {
                const m = matches[0];
                expression = expression
                    .replaceAll(key, `${parenthesis_left} ${m.definition} ${parenthesis_right}`)
                changed = true;
            }
        })
        if (!changed) {
            break;
        }
        versions.push(expression);
    }

    expression = expression
        .replaceAll(` and `, ` ${and} `) 
    expression = expression
        .replaceAll(` or `, ` ${or} `)
    expression = expression
        .replaceAll(` not `, ` ${not} `)
    
    let blob = tokens_key_not_get(expression, tokens_key);

    let tags_for_value = game_object_tags_get(
        game_object, ancestors);
    for (let n of tags_for_value) {
        blob[n] = true;
    }

    values_for_each(blob, (value, key) => {
        expression = expression.replaceAll(key, value);
    })

    console.log({versions, expression})

    return eval(expression);
}
function tokens_key_not_get(expression, tokens_key) {
    let tokens = expression.split(' ').filter(t => t.length >= 1);
    let names = tokens.filter(t => !tokens_key.includes(t));
    let blob = {};
    for (let n of names) {
        blob[n] = false;
    }
    return blob;
}

