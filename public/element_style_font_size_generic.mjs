import { local_storage_get } from "./local_storage_get.mjs";
import { local_storage_key_settings_font_size } from "./local_storage_key_settings_font_size.mjs";

export function element_style_font_size_generic(e, size) {
    e.style.fontSize = (size * parseFloat(local_storage_get(local_storage_key_settings_font_size, 1))) + 'vh';
}
