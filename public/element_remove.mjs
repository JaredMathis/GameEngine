import { element_style_disappear_animate } from './element_style_disappear_animate.mjs';
import { animation_duration_get } from './animation_duration_get.mjs';

export function element_remove(e) {
    return new Promise(resolve => {
        element_style_disappear_animate(e);
        setTimeout(() => {
            e.remove();
            resolve();
        }, animation_duration_get());
    })
}
