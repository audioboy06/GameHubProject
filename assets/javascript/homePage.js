 $("#submitButton").on("click", function (event) {
     event.preventDefault();
     console.log("sumbit click");
     var userSearch = $("#gameSearch").val().trim();


    //  var queryURL = "http://www.giantbomb.com/api/search/?api_key=" + apiKey + "&format=json&query=“" + userSearch + "”&resources=game"

    var queryURL = "http://www.giantbomb.com/api/search";
     var apiKey = "9463b220fe738622ae71ff6197a6b58d9911c4fa";
     $.ajax({
        url: queryURL,
        dataType: "jsonp",
        jsonp: 'json_callback',
        data: {
            api_key: apiKey,
            query: 'mass effect',
            format: 'jsonp',
            field_list: 'name'
        
        }
    }).done(function (response) {
    //         //  var image = image.response;

    //         //  var description = description.response;

    //         //  var developer = developer.response;

             console.log(response);
         })
        })
