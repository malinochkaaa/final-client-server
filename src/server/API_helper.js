import axios from "axios";
 
const URL = "https://museumguide.herokuapp.com/";        
window.user_id = "";
 
export async function addToFavorites(museum_id) {
    await axios.post(`${URL}add_to_favorites`, {"user_id": window.user_id, "fav_id": museum_id, });
}

export async function deleteFromFavorites(museum_id) {
    await axios.post(`${URL}delete_from_favorites`, {"user_id": window.user_id, "fav_id": museum_id, });
}
 
export async function showAllMuseums() {
    console.log(window.user_id);
    return await axios.post(`${URL}museums`, {"user_id": window.user_id});
}
 
 
export async function showMuseum(museum_id) {
    return await axios.post(`${URL}museums/by_id`, {"museum_id": museum_id, "user_id": window.user_id});
}

export async function showFavorites() {
    return await axios.post(`${URL}favorites`, {"user_id": window.user_id});
}