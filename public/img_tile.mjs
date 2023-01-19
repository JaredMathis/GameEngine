import { element_img } from "./element_img.mjs";

export function img_tile(parent, url, size, x, y) {
    let img = element_img(parent, url);
    img.style.width = size;
    img.style.height = size;
    img.style['object-fit'] = 'none';
    img.style['object-position'] = `-${x * size}px -${y * size}px`;
    img.style.position = 'absolute';
    img.style.top = 0;
    img.style.left = 0;
    return img;
}
