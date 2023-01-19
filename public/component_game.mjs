import { component_new_open } from "./component_new_open.mjs";
import { game_prefix } from "./game_prefix.mjs";
import { game_on_tile_choose } from "./game_on_tile_choose.mjs";

export function component_game(parent, view) {
    component_new_open(
        parent, 
        view, 
        game_prefix(), 
        [
            { id: 'name', name: 'Name of Game', type: 'string', },
        ],
        (parent, view, stored) => {
            game_on_tile_choose(parent, view, stored);
        }
        );
}


