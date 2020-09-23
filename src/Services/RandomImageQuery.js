function getRandomImage(shopItemId, keyword) {
    // Google Search expression:
    //var keyword = "nike hoodie";

    var image_src;

    $(document).ready(function() {

        console.log("RandomImageQuery: loading images for the search expression " + keyword);

        $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {
                tags: keyword,
                tagmode: "any",
                format: "json"
            },
            function(data) {
                var rnd = Math.floor(Math.random() * data.items.length);

                image_src = data.items[rnd]['media']['m'].replace("_m", "_b");

                $("#" + shopItemId).css('background-image', "url('" + image_src + "')");

            });

    });
    return image_src;
}