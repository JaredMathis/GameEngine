import { assert } from "./assert.mjs";

export function property_get(object, property_name) {
    assert(object.hasOwnProperty(property_name));
    return object[property_name];
}
