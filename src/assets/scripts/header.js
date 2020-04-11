//Importar Jquery
import $ from 'jquery'

$(window).scroll(function () {
    if ($("#menu").offset().top > 430) {
        $("#header").addClass("header_animation");
        $("#header").addClass("transition");
        $("#menu").addClass("navbar-light");
        $("#menu").removeClass("navbar-dark");
    } else {
        $("#menu").addClass("navbar-dark");
        $("#header").addClass("transition");
        $("#menu").removeClass("navbar-light");
        $("#header").removeClass("header_animation");
    }
});