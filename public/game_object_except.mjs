import { html_element_is } from "./html_element_is.mjs";

export function game_object_except() {
    return value => html_element_is(value);
}
