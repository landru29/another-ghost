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

    function dateLocale() {
        moment.locale("fr");

        $(".post-date").each(function (i, date) {
            var $date = $(date);

            $date.html(
                moment($date.attr("datetime"))
                    .format("LL")
            );
        });
    }

    function olderNewerPosts() {
        $("a.older-posts").each(
            function(index, node) {
                $(node).contents().first()[0].textContent="Anciens billets";
            }
        );
        $("a.newer-posts").each(
            function(index, node) {
                $(node).contents().last()[0].textContent="Nouveaux billets";
            }
        );
    }

    $(document).ready(function () {
        runMenu();
        dateLocale();
        olderNewerPosts();
    });

})();

