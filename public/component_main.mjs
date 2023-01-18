import { component_new } from "./component_new.mjs";
import { component_open } from "./component_open.mjs";
import { component_settings } from "./component_settings.mjs";
import { element_button_standard } from "./element_button_standard.mjs";
import { games_get } from "./games_get.mjs";
import { list_empty_not } from "./list_empty_not.mjs";
import { view_set_get } from "./view_set_get.mjs";

export function component_main(parent, view) {
    element_button_standard(
        parent, 'New', view_set_get(view, component_new));

    let games = games_get();
    if (list_empty_not(games)) {
        element_button_standard(
            parent, 'Open', view_set_get(view, component_open));
    }

    element_button_standard(
        parent, 'Settings', view_set_get(view, component_settings));
}


