import { component_choice_multiple } from "./component_choice_multiple.mjs";
import { component_empty } from "./component_empty.mjs";
import { games_get } from "./games_get.mjs";
import { game_prefix } from "./game_prefix.mjs";

export function component_open(parent, view) {
    let games = games_get();
    const prefix = game_prefix();
    let choices = games.map(k => k.substring(prefix.length));

    let local_storage_key = 'selected_game';
    let next_screen = component_empty;
    component_choice_multiple(parent, choices, local_storage_key, view, next_screen);
}
