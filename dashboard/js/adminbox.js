(function($) {
    "use strict";
    // window scroll function

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    // scroll top click function   
     $(document).on("click", ".scrollup", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
        });

    // left  sidebar close function
    $(document).on("click", ".library-menu", function(e) {
        $(this).toggleClass("active");
        $('body').toggleClass('page-sidebar-closed');
        e.preventDefault();
    });

    // left sidebar togal 

    $(document).on("click", ".nav-link", function() {
        if ($(this).parent("li").hasClass('open')) {
            $(this).parent("li").removeClass('open');
        } else {
            $('.nav-item').removeClass('open');
            $(this).parents("li").addClass('open');
        }
        });

    $(document).on("click", ".menu-toggler.sidebar-toggler", function() {
        $rootScope.togIn = true;
        $('body').toggleClass('page-sidebar-closed');
    });

   // sidebar search click
     $(document).on("click", ".sidebar-search .submit, .sidebar-search .remove", function() {
           if ($('body').hasClass('page-sidebar-closed')) {
            $rootScope.togIn = false;
            $('.sidebar-search').toggleClass('open');
        }
    });

    

    // header expanded on click
    $(".search-form .input-group .form-control").focus(function() {
            $(".page-header.navbar .search-form.search-form-expanded").addClass("open");
        })
        .focusout(function() {
            $(".page-header.navbar .search-form.search-form-expanded").removeClass("open");
        });       

})(jQuery);

