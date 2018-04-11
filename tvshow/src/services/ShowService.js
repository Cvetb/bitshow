import { Show } from "../models/Show";



const fetchShowList = () => {
    return fetch(`http://api.tvmaze.com/shows`)
        .then((response) => response.json())
        .then((showList) => {
            return showList
        })
        .catch((error) => alert(error))
}


const fetchShowById=(id)=>{
    return fetch(`http://api.tvmaze.com/shows/${id}`)
    .then(response=>response.json())
    .then(singleShow => new Show(singleShow))
    .catch(error=>alert("error"))
}

export { fetchShowList, fetchShowById };