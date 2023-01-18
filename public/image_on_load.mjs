import { element } from "./element.mjs";
import { element_on } from "./element_on.mjs";

export async function image_on_load(parent, url) {
    let img = element(parent, 'img');
    img.src = url;
    await new Promise((resolve, reject) => {
        element_on(img, 'load', () => {
            resolve();
        });
        element_on(img, 'error', () => {
            reject();
        });
    });
    return img;
}
