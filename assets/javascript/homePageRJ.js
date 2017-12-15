// JS file for index page

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB15SS_3UWcBqaTHJCJ4ExAGOAYviXc7zo",
    authDomain: "gamehubproject-b2851.firebaseapp.com",
    databaseURL: "https://gamehubproject-b2851.firebaseio.com",
    projectId: "gamehubproject-b2851",
    storageBucket: "",
    messagingSenderId: "529910784559"
  };
  firebase.initializeApp(config);

  var database = firebase.database();



  $("#submitButton").on("click", function(event) {
    console.log("sumbit click");
    event.preventDefault();

    userSearch = $("#gameSearch").val();

    var queryURL = "https://www.giantbomb.com/api/search/?api_key=9463b220fe738622ae71ff6197a6b58d9911c4fa&format=json&query=" + userSearch + "&resources=game";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
        console.log(response);
    });
  });