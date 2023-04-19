jQuery(document).ready(function($) {
    let hamburger = $(".hamburger");
    hamburger.on("click", function(e) {
        hamburger.toggleClass("is-active");
    });
});