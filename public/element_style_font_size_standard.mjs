import { local_storage_key_settings_font_size } from "./local_storage_key_settings_font_size.mjs";

export function element_style_font_size_standard(e) {
    e.style.fontSize = (4 * parseFloat(local_storage_get( local_storage_key_settings_font_size, 1))) + 'vh';
}

function local_storage_get(key_get, default_value) {
    let result = localStorage.getItem(key_get()) || default_value;
    console.log({result})
    return result;
}