import { image_on_load_hidden } from "./image_on_load_hidden.mjs";

export async function img_to_count(parent, url, size) {
    let img = await image_on_load_hidden(parent, url);
    let y_count = Math.floor(img.height / size);
    let x_count = Math.floor(img.width / size);
    return { y_count, x_count };
}
