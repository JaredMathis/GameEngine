export function game_object_tags_get(value, ancestors) {
    let values = ancestors.slice();
    values.splice(0, 0, value);
    
    let tags_for_value = [];
    for (let v of values) {
        if (v.tags) {
            let { tags } = v;
            tags_for_value = tags.split(',');
        }
        if (v.tags_added) {
            let { tags_added } = v;
            tags_for_value.push(...tags_added)
        }
    }
    return tags_for_value;
}
