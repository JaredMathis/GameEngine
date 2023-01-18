import { component_button_view } from "./component_button_view.mjs";
import { component_new } from "./component_new.mjs";
import { component_open } from "./component_open.mjs";
import { component_settings } from "./component_settings.mjs";
import { games_get } from "./games_get.mjs";
import { list_empty_not } from "./list_empty_not.mjs";

export function component_main(parent, view) {
    component_button_view(parent, view, 'New', component_new);

    let games = games_get();
    if (list_empty_not(games)) {
        component_button_view(
            parent, view, 'Open', component_open);
    }

    component_button_view(
        parent, view, 'Settings', component_settings);
}



