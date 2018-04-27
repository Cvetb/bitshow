const dataModule = (() => {
    class TvShow {
        constructor(name, url, id) {
            this.name = name;
            this.url = url;
            this.id = id;
        }
    }

    const createTvShow = (name, url, id) => {
        return new TvShow(name, url, id);
    }

    const adaptTvShows = (allShows) => {
        const shows = allShows.slice(0, 50);
        const showObjects = shows.map(show => {
            return createTvShow(show.name, show.image.medium, show.id);
        });
        return showObjects;
    }

    class TVShowDetails {
        constructor(name, imageUrl, showId, seasonsList, castList, details) {
            this.name = name;
            this.imageUrl = imageUrl;
            this.id = showId;
            this.seasons = seasonsList;
            this.cast = castList;
            this.details = details;

        }
        getName() {
            return name;
        }
        addSeason(season) {
            this.seasons.push(season);
        }

        addCast(cast) {
            this.cast.push(cast);
        }
    }

    const createTvShowDetails = (name, imageUrl, showId, seasonsList, castList, details) => {
        return new TVShowDetails(name, imageUrl, showId, seasonsList, castList, details);
    }
    const adaptTvShowDetails = (name, imageUrl, showId, seasonsList, castList, details) => {
        return createTvShowDetails(name, imageUrl, showId, seasonsList, castList, details);
    }
   

    class Cast {
        constructor(name) {
            this.name = name;

        }
    }
    const createCast = (name) => {
        return new Cast(name);
    }

    const adaptCasts = (allCasts) => {
        const castObjects = allCasts.map(cast => {
            return createCast(cast.person.name);
        });
        return castObjects;
    }

    class Season {
        constructor(startDate, endDate) {
            this.start = startDate;
            this.end = endDate;
        }
    }

    const createSeason = (start, end) => {
        return new Season(start, end);
    }

    const adaptSeason = (allSeasons) => {
        const seasonObjects = allSeasons.map(season => {
            return createSeason(season.premiereDate, season.endDate);
        });
        return seasonObjects;
    }

    return {
        adaptTvShows,
        adaptTvShowDetails,
        adaptCasts,
        adaptSeason
    }
})()