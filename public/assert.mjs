export function assert(b) {
    if (!b) {
        throw new Error('Assertion error');
    }
}
