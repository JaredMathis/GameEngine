import { element } from "./element.mjs";

export function element_img(parent, url) {
    let img = element(parent, 'img');
    img.src = url;
    return img;
}
