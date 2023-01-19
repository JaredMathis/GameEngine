export function game_object_tags_get(value, ancestors) {
    let values = ancestors.slice();
    values.push(value);
    
    let tags_for_values = [];
    for (let v of values) {
        if (v.tags) {
            let { tags } = v;
            tags_for_values.push(...tags.split(','));
        }
        if (v.tags_added) {
            let { tags_added } = v;
            tags_for_values.push(...tags_added)
        }
    }
    return tags_for_values;
}
