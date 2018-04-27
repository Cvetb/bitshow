let UIModule = (() => {

    const displayMainPage = (shows) => {
        shows.forEach(show => {
            const showName = show.name;
            const showImage = show.url;
            const showId = show.id;

            const element = `
            <div class="card">
                <div class="card-body" id= "${showId}">
                    <img src="${showImage}" alt="show"><br>
                    <a href="show-info.html" class="card-link">${showName}</a></div>
                </div>
            </div>`
            $("#main").append(element);
        })
    }

    const displaySingleShow = (show) => {
        const showName = show.name;
        const showImage = show.imageUrl;
        const showId = show.id;
        const showDetails = show.details;
        const castList = show.cast;
        const seasons = show.seasons;


        const element = `
            <div class="col-lg-12">
                <h1 class="text-center col-lg-12">${showName}</h1>
                <div class="row">
                <div class="col-lg-6">
                <img src= "${showImage}">
                </div>
                <div class="col-lg-6">
                <h4>Seasons (${seasons.length})</h4>
                <ul id="seasonList"> </ul>
                <h4>Cast</h4>
                <ul id="castList">
                </ul> 
                </div>
                </div>
                </div>
            <div id="details">
                    <h4>Description</h4>
                    <p>${showDetails}</p>
    
            </div>`

        $("#singleShow").append(element);

        seasons.forEach(season => {
            let premierDate = season.start;
            let endDate = season.end;
            let seasonList = `
                <li>
                    <p>${premierDate} - ${endDate}</p>  
                </li>`

            $("#seasonList").append(seasonList);


        });


        castList.forEach(cast => {
            let castName = cast.name;

            let castList = `
                <li>
                    <p>${castName}</p>          
                </li>`

            $("#castList").append(castList);

        });
    }



    return {
        displayMainPage,
        displaySingleShow
    }
})();