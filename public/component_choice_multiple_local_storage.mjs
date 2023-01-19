import { component_choice_multiple_generic } from "./component_choice_multiple_generic.mjs";
import { local_storage_set } from "./local_storage_set.mjs";

export function component_choice_multiple_local_storage(
    parent, choices, local_storage_key, view, next_screen) {

    let select = component_choice_multiple_generic(
        parent, view, choices, on_choose, next_screen);

    function on_choose() {
        local_storage_set(local_storage_key, current => select.value);
    }
}

