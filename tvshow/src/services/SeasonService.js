import { Season } from "../models/Season";

const fetchSeasons = (id) => {
    return fetch(`http://api.tvmaze.com/shows/${id}/seasons`)
        .then((response => response.json()))
        .then((result) => result.map((season) => new Season(season)))
        .catch((error) =>alert("Error"))
}

export {
    fetchSeasons
};