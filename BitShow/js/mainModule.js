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


        let seasons = "";
        let casts = "";
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

    };
    $(document).on("keydown", "#search", function (event) {
        if (event.key === "Enter") {
            $(".row").text('');
            searchShows();
            $("#search").val('');
            $("#searchList").remove();
        }
    });
    $("#search").keyup(function () {
        const enteredText = $("#search").val();

        var request = $.ajax({
            url: "https://api.tvmaze.com/search/shows?q=" + enteredText
        });

        request.done(function (result) {
            $("#searchList").text('');

            for (let i = 0; i <= 10; i++) {
                if (result[i] !== undefined) {
                    let searchListItem = $("<li>");
                    searchListItem.append(result[i].show.name);
                    searchListItem.attr("id", result[i].show.id);

                    $("#searchList").append(searchListItem);
                }
            }

            $("li").on("click", function () {
                const usedLink = $(this).attr("id");
                localStorage.setItem("id", usedLink);
                window.location.href = "show-info.html";
            });
        });
    });

    return {
        init,
        returnShowDetails
    }
})(UIModule, dataModule);