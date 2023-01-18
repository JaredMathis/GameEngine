import { component_button_view } from "./component_button_view.mjs";
import { component_game } from "./component_game.mjs";
import { component_settings } from "./component_settings.mjs";

export function component_main(parent, view) {
    component_button_view(
        parent, view, 'Tiles', component_tiles);
    component_button_view(
        parent, view, 'Game', component_game);
    component_button_view(
        parent, view, 'Settings', component_settings);
}

function component_tiles(parent, view) {
    
}

