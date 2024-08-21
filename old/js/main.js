"use strict";
$(document).ready(function () {

//+++++++++++++++++++++++++++++++++++++++++++
//     bainner slider Jquery Code Start
//+++++++++++++++++++++++++++++++++++++++++++   
    $("#owl-demo").owlCarousel({
//        autoPlay: true,
        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        items: 1,
        navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        pagination: true
    });
//+++++++++++++++++++++++++++++++++++++++++++
//     Testimonail slider Jquery Code Start
//+++++++++++++++++++++++++++++++++++++++++++   
    $("#owl-testimonail").owlCarousel({
//        autoPlay: true,
        navigation: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        items: 1,
        navigationText: false,
        pagination: true
    });
//+++++++++++++++++++++++++++++++++++++++++++
//     our-clints-owl Jquery Code Start
//+++++++++++++++++++++++++++++++++++++++++++ 
    $("#our-clints-owl").owlCarousel({
        autoPlay: true,
        navigation: false,
        navigationText: false,
        pagination: false,
        items: 4,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3]
    });
//+++++++++++++++++++++++++++++++++++++++++++
//     Home3 Blog demo Jquery Code Start
//+++++++++++++++++++++++++++++++++++++++++++   
    $("#home3-blog-demo").owlCarousel({
        autoPlay: true,
        navigation: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        items: 1,
        navigationText: false,
        pagination: true
    });
    //+++++++++++++++++++++++++++++++++++++++++++
//     amazing-feature Jquery Code Start
//+++++++++++++++++++++++++++++++++++++++++++ 
    $("#amazing-feature").owlCarousel({
        autoPlay: true,
        navigation: false,
        navigationText: false,
        pagination: false,
        items: 3,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [991, 2],
        itemsmobail: [767, 1]

    });
    try {
        $('.counter').appear(function () {
            //+++++++++++++++++++++++++++++++++++++++++++
            //   countdown Time Jquer Code End
            //+++++++++++++++++++++++++++++++++++++++++++
            function animateValue(id, start, end, duration) {
                // assumes integer values for start and end

                var obj = document.getElementById(id);
                var range = end - start;
                // no timer shorter than 50ms (not really visible any way)
                var minTimer = 50;
                // calc step time to show all interediate values
                var stepTime = Math.abs(Math.floor(duration / range));

                // never go below minTimer
                stepTime = Math.max(stepTime, minTimer);

                // get current time and calculate desired end time
                var startTime = new Date().getTime();
                var endTime = startTime + duration;
                var timer;

                function run() {
                    var now = new Date().getTime();
                    var remaining = Math.max((endTime - now) / duration, 0);
                    var value = Math.round(end - (remaining * range));
                    obj.innerHTML = value;
                    if (value == end) {
                        clearInterval(timer);
                    }
                }
                timer = setInterval(run, stepTime);
                run();
            }
            animateValue("value", 0, 8, 1000);
            animateValue("value2", 0, 190, 1000);
            animateValue("value3", 0, 240, 1000);
            animateValue("value4", 0, 35, 1000);
        });
    } catch (err) {
    }
});