import { button_back } from "./button_back.mjs";
import { component_button_view } from "./component_button_view.mjs";
import { component_new } from "./component_new.mjs";
import { component_open } from "./component_open.mjs";
import { games_get } from "./games_get.mjs";
import { list_empty_not } from "./list_empty_not.mjs";
import { game_prefix } from "./game_prefix.mjs";

export function component_game(parent, view) {
    let fields = [
        { id: 'name', name: 'Name of Game', type: 'string', },
    ]
    const prefix = game_prefix();
    component_new_open(parent, view, fields, prefix);
}
function component_new_open(parent, view, fields, prefix) {
    component_button_view(
        parent,
        view,
        'New',
        component_new(fields, prefix)
    );
    let entities = games_get();
    if (list_empty_not(entities)) {
        component_button_view(
            parent, view, 'Open', component_open(prefix));
    }
    button_back(parent, view);
}

