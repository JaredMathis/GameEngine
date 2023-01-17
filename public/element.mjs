import { element_child_append } from "./element_child_append.mjs";
import { element_html_inner } from "./element_html_inner.mjs";

export function element(parent, tag_name, text = '') {
    let result = document.createElement(tag_name);
    element_child_append(parent, result);
    element_html_inner(result, text);
    return result;
}

