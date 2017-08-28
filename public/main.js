$(document).ready(function () {
    var scroll_start = $(this).scrollTop();
    var startchange = $('#startchange');
    var offset = startchange.offset();

    var changeNav = function (pos, offsetTop) {
        if (pos > offsetTop) {
            $(".navbar-main").css('background-color', '#3e3838');
        } else {
            $('.navbar-main').css('background-color', 'transparent');
        }
    }

    changeNav(scroll_start, offset.top - 50);

    $(document).scroll(function () {
        scroll_start = $(this).scrollTop();
        changeNav(scroll_start, offset.top - 50);
    });


    var $langDropDown = $("#langDropDown");

    $(".drop-item-1").click(function () {
        var $img = $("<img/>").attr({ "src": "images/us.svg", "width": "20" });
        $langDropDown.children().remove();
        $langDropDown.append($img);
    });

    $(".drop-item-2").click(function () {
        var $img = $("<img/>").attr({ "src": "images/br.svg", "width": "20" });
        $langDropDown.children().remove();
        $langDropDown.append($img);
    });


    var options = {
        strings: ["Make your moment"],
        typeSpeed: 100
    }

    var typed = new Typed("#main-text", options);
});