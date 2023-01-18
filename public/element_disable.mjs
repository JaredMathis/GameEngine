import { color_white } from "./color_white.mjs";

export function element_disable(f) {
    f.setAttribute("disabled", "disabled");
    f.style.color = color_white();
}
