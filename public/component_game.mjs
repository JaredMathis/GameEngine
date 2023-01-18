import { game_prefix } from "./game_prefix.mjs";
import { component_new_open } from "./component_new_open.mjs";
import { component_empty } from "./component_empty.mjs";

export function component_game(parent, view) {
    component_new_open(
        parent, 
        view, 
        game_prefix(), [
            { id: 'name', name: 'Name of Game', type: 'string', },
        ],
        component_empty
        );
}

