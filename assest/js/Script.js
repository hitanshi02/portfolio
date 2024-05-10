$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $(".Navbar_section").addClass("active");
    }
    else {
        $(".Navbar_section").removeClass("active");
    }
});


var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos) {
        document.getElementById("Top").style.top = "0";
    } else {
        document.getElementById("Top").style.top = "-200px";
    }
    prevScrollpos = currentScrollpos;
};


// open mobile menu
$('.js-toggle-menu').click(function (e) {
    e.preventDefault();
    $('.Navbar_Contant').slideToggle('slow');
    $('.white_layers').toggleClass('d-none');
    $('body').toggleClass('overflow-hidden');
    $(this).toggleClass('open');

});