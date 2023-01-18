import { button_back } from "./button_back.mjs";
import { component_new } from "./component_new.mjs";
import { component_settings } from "./component_settings.mjs";
import { element_button_standard } from "./element_button_standard.mjs";
import { element_input } from "./element_input.mjs";
import { element_select } from "./element_select.mjs";
import { game_prefix } from "./game_prefix.mjs";
import { view_set } from "./view_set.mjs";

export function component_main(parent, view) {
    element_button_standard(
        parent, 'New', view_set(view, component_new));
    element_button_standard(
        parent, 'Open', view_set(view, component_open));
    element_button_standard(
        parent, 'Settings', view_set(view, component_settings));
}

function component_open(parent, view) {
    button_back(parent, view);
    let games = Object.keys(localStorage).filter(k => k.startsWith(game_prefix()));

    let choices = games.map(k => k.substring(game_prefix().length));
    element_select(parent, choices);
}


