import { component_choice_multiple } from "./component_choice_multiple.mjs";
import { component_empty } from "./component_empty.mjs";
import { games_get } from "./games_get.mjs";
import { game_prefix } from "./game_prefix.mjs";

export function component_open(prefix) {
    return function (parent, view) {
        let choices = games_get()
            .map(k => k.substring(prefix.length));
        component_choice_multiple(
            parent, choices, 'selected_' + prefix, view, component_empty);
    }
}
