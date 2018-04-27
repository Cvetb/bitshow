const mainModule = ((UIModule, dataModule) => {
    const init = () => {
        const request = $.ajax({
            url: 'http://api.tvmaze.com/shows',
            method: "GET"
        });

        request.done(response => {
            const shows = dataModule.adaptTvShows(response);

            UIModule.displayMainPage(shows);
        });
    }

    $('body').on('click', '.card-body', function () {

        var id = $(this).attr('id');


        localStorage.setItem('id', id);
        location.href = "show-info.html";

    });

    const returnShowDetails = () => {
        var id = localStorage.getItem('id');


        let seasons = null;
        let casts = null;
        const request2 = $.ajax({
            url: 'http://api.tvmaze.com/shows/' + id + '/seasons',
            method: "GET"
        });
        request2.done(response => {
            seasons = dataModule.adaptSeason(response);
            const request3 = $.ajax({
                url: 'http://api.tvmaze.com/shows/' + id + '/cast',
                method: "GET"
            });
            request3.done(response => {
                casts = dataModule.adaptCasts(response);
                const request = $.ajax({
                    url: 'http://api.tvmaze.com/shows/' + id,
                    method: "GET"
                });

                request.done(response => {
                    const show = dataModule.adaptTvShowDetails(response.name, response.image.original, id, seasons, casts, response.summary);


                    UIModule.displaySingleShow(show);


                });
                console.log(seasons);
            });





        });
        // }

        // $("body").on('change', '#search', function () {
        //     var searchInput = $(this).val();
        //     console.log(searchInput);123

        // const request = $.ajax({
        //     url: 'http://api.tvmaze.com/search/shows?q='+searchInput,
        //     method: "GET"
        // });

        // request.done(response => {
        //     const shows = dataModule.adaptTvShows(response);
        //     console.log(shows);    
        //     UIModule.displayMainPage(shows);
        // });

    };

    return {
        init,
        returnShowDetails
    }
})(UIModule, dataModule);