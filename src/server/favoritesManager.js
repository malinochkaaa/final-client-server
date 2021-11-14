import {addToFavorites, deleteFromFavorites} from "./API_helper";

export function updateFavorites(inFavorite, museum_id) {
    if(inFavorite) deleteFromFavorites(museum_id);
    else addToFavorites(museum_id);
}