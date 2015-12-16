$(document).ready(
    $.get("https://api.foursquare.com/v2/venues/search" +
        "?client_id=" + "KS20SCZVDO1ZH2AGKHMJUEACQPFUFTJGM1JXFLY00YDELKDL" +
        "&client_secret=" + "B5JKAGMSIRL2LLGU1EG4JA5EM4TUD4ZZU200FFUIK3OVVARS" +
        "&v=20151209" +
        "&near=nyc" +
        "&query=pizza"),
        function(data) {
            // Callback code goes here. This gets executed after receiving data from the Foursquare API.
        });







