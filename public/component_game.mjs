import { game_prefix } from "./game_prefix.mjs";
import { component_new_open } from "./component_new_open.mjs";

export function component_game(parent, view) {
    let fields = [
        { id: 'name', name: 'Name of Game', type: 'string', },
    ]
    const prefix = game_prefix();
    component_new_open(parent, view, prefix, fields);
}

