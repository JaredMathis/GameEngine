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
    component_button_view(
        parent, 
        view, 
        'New', 
        component_new(
            fields, 
            field_values => prefix + field_values.name)
    );
    let games = games_get();
    if (list_empty_not(games)) {
        component_button_view(
            parent, view, 'Open', component_open);
    }
    button_back(parent, view);
}
