console.log("Your index.js file has loaded!");

$(document).ready(function () {
    $(".hamburger-lines").click(function () {
        $("#hamburger-1").toggleClass("is-active");
        if ($("#hamburger-1").hasClass("is-active")) {
            $("ul.menu-items").css("display", "flex");
            console.log("Eat me!");
        }
        else {
            $("ul.menu-items").css("display", "none");
            console.log("Don't eat me!");
        }

    });

    window.addEventListener('resize', function (event)  { console.log("Big Sandwich");
        if ($(window).width() > 1226) {
            $("ul.menu-items").css("display", "flex");
            $("#hamburger-1").removeClass("is-active");
        }
    }, true);
    
    window.addEventListener('resize', function (event)  { console.log("Big Sandwich");
        if ($(window).width() < 1226) {
            $("ul.menu-items").css("display", "none");
        }
    }, true);
});
