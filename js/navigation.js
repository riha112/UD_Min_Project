var navbar = document.getElementById("MainNavigation");
var popup = document.getElementById("PopupMsg");
var sections = [
    document.getElementById("Home"),
    document.getElementById("AboutUs"),
    document.getElementById("Services"),
    document.getElementById("ContactUs")
];
var $navs;
var sticky = 120;

function StickyNavBar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

var lastActiveEl = -1;
function UpdateActiveMenuItem(){
    var activeEl;
    for(activeEl = sections.length - 1; activeEl >= 0; activeEl--){
        if(
            window.pageYOffset + 200 >= sections[activeEl].offsetTop ||
            (window.innerHeight + window.scrollY) >= document.body.offsetHeight
        )
            break;
    }

    activeEl++;
    if(activeEl == 0)
        activeEl = 1;

    if(activeEl == lastActiveEl)
        return;
    lastActiveEl = activeEl;

    $navs.removeClass("is-active");
    $("#MainNavigation li:nth-child("+ activeEl +") a").addClass("is-active");
}

$(document).ready(function(){
    $navs = $("#MainNavigation a");

    UpdateActiveMenuItem();
    StickyNavBar();
    
    window.onscroll = function() {
        StickyNavBar();
        UpdateActiveMenuItem();
    };

    $(".feature").click(function(){
        $(popup).addClass("is-active");
    });

    $(".popup-close").click(function(){
        $(popup).removeClass("is-active");
    });

    $("[js-scroll-to]").click(function() {
        $element = $($(this).attr("js-scroll-to"));
        $([document.documentElement, document.body]).animate({
            scrollTop: $element.offset().top - 60
        }, 200);
    });
});

