import { button_back } from "./button_back.mjs";
import { component_new } from "./component_new.mjs";
import { component_settings } from "./component_settings.mjs";
import { element_button_standard } from "./element_button_standard.mjs";
import { element_select } from "./element_select.mjs";
import { game_prefix } from "./game_prefix.mjs";
import { list_empty_not } from "./list_empty_not.mjs";
import { local_storage_set } from "./local_storage_set.mjs";
import { view_set } from "./view_set.mjs";

export function component_main(parent, view) {
    element_button_standard(
        parent, 'New', view_set(view, component_new));

    let games = games_get();
    if (list_empty_not(games)) {
        element_button_standard(
            parent, 'Open', view_set(view, component_open));
    }

    element_button_standard(
        parent, 'Settings', view_set(view, component_settings));
}

function component_open(parent, view) {
    let games = games_get();
    const prefix = game_prefix();
    let choices = games.map(k => k.substring(prefix.length));
    let on_choose = () => {

    }
    let local_storage_key = 'game_selected'
    let choose = element_select(parent, choices);
    element_button_standard(parent, 'Choose', () => {
        local_storage_set(local_storage_key, current => choose.value);
        on_choose();
    })
    choose.focus();
    button_back(parent, view);
}

function games_get() {
    const prefix = game_prefix();
    return Object
        .keys(localStorage)
        .filter(k => k.startsWith(prefix));
}

