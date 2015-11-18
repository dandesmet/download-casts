addLinks();

var timeout = null;
document.addEventListener("DOMSubtreeModified", function() {
    if (timeout) {
        clearTimeout(timeout);
    }
    timeout = setTimeout(addLinks, 100);
}, false);

function addLinks() {
    // don't add the links if they're already present; prevents an infinite loop of 
    // DOM modification via the even handler above
    if (!$('a[download-links]').length) {
        $(".episode_row").each( function(index) {
            
            // find the episode canvas, extract the episode JSON and find the url
            var episode = $.parseJSON($(this).find("canvas[episode]").attr("episode"));
            var url = episode.url;

            var episode_title = $(this).find('div.episode_title');

            var dl_html = '<a href="' + url + '" download style="position: absolute; left: 55%;" download-links>Download</a>'

            $(episode_title).append(dl_html)
        });
    }
}