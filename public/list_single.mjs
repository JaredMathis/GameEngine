import { assert } from "./assert.mjs";

export function list_single(list) {
    assert(list.length === 1);
    return list[0];
}
