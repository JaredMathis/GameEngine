import { element_img } from "./element_img.mjs";
import { element_on } from "./element_on.mjs";

export async function image_on_load(parent, url) {
    let img = element_img(parent, url);
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

