$(document).ready(function(){

    $(".slider").each(function(){
        var $slider = $(this);

        var isDone = true;
        var curr = 0;
        var $slides = $slider.find(".slide");
        
        var $nav_left = $slider.find(".slider-nav-left");
        var $nav_right = $slider.find(".slider-nav-right");

        $nav_left.click(function(){
            if(isDone === false)
                return;
            isDone = false;

            $slider.css("min-height", $slider.height() + "px");
            $($slides[curr]).fadeOut("fast", function(){
                curr--;
                if(curr < 0)
                    curr = $slides.length - 1;
                $($slides[curr]).fadeIn("fast", function(){
                    isDone = true;
                    //$slider.css("height","auto");
                });
            });
        });

        $nav_right.click(function(){
            if(isDone === false)
                return;
            isDone = false;

            $slider.css("min-height", $slider.height() + "px");
            $($slides[curr]).fadeOut("fast", function(){
                curr++;
                if(curr >= $slides.length)
                    curr = 0;
                $($slides[curr]).fadeIn("fast", function(){
                    isDone = true;
                   // $slider.css("height","auto");
                });
            });
        });
    });

})