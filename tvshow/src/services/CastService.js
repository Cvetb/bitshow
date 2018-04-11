import { Cast } from "../models/Cast";

const fetchCast = (id) => {
    return fetch(`http://api.tvmaze.com/shows/${id}/cast`)
        .then(response => response.json())
        .then(result => result.map(person => new Cast(person)))
        .catch(error => alert("Error"))
}

export {
    fetchCast
};