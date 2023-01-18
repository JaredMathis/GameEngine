import { element_div } from "./element_div.mjs";
import { image_on_load } from "./image_on_load.mjs";

export async function image_on_load_hidden(parent, url) {
    let img_parent = element_div(parent);
    img_parent.hidden = true;
    let img = await image_on_load(img_parent, url);
    return img;
}
