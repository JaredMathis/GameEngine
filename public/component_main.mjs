import { component_button_view } from "./component_button_view.mjs";
import { component_game } from "./component_game.mjs";
import { component_new_open } from "./component_new_open.mjs";
import { component_settings } from "./component_settings.mjs";
import { tiles_prefix } from "./tiles_prefix.mjs";

export function component_main(parent, view) {
    component_button_view(
        parent, view, 'Tiles', component_tiles);
    component_button_view(
        parent, view, 'Game', component_game);
    component_button_view(
        parent, view, 'Settings', component_settings);
}

function component_tiles(parent, view) {
    component_new_open(
        parent, 
        view, 
        tiles_prefix(), [
            { id: 'name', name: 'Name of Tile Set', type: 'string', },
        ]
        );
}


