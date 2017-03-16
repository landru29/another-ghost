(function () {

    function runMenu () {
        $("#menu>li>a").on("click", function(event) {
            var submenu = $(event.target).parent();
            if (submenu.hasClass("expand")) {
                submenu.removeClass("expand");
            } else {
                submenu.addClass("expand");
            }
        });
    }

    $(document).ready(function () {
        runMenu();
    });

})();

