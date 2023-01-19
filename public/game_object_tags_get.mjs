export function game_object_tags_get(value, ancestors) {
    let tags_for_value = [];
    if (value.tags) {
        let { tags } = value;
        if (tags) {
            tags_for_value = tags.split(',');
        }
    }
    return tags_for_value;
}
