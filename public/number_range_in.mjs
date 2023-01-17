import { number_max } from "./number_max.mjs";
import { number_min } from "./number_min.mjs";

export function number_range_in(current, min_value, max_value) {
    current = number_max(current, max_value);
    current = number_min(current, min_value);
    return current;
}
