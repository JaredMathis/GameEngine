import { number_max } from "./number_max.mjs";
import { number_min } from "./number_min.mjs";

export function number_range_in(current) {
    current = number_max(current, 5);
    current = number_min(current, 0.5);
    return current;
}
