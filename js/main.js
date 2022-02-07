/* -------------------------------------------------------------------
 * Template Name         : Langona - Business Agency HTML Template
 * Theme Author Name     : Yucel Yilmaz
 * Created Date          : 28 April 2020
 * Version               : 1.0
------------------------------------------------------------------- */
/* -------------------------------------------------------------------
   All Functions                               
   ------------------------ /
 * 01.Preloader
 * 02.Wow Js
 * 03.Navbar
 * 04.Magnific Popup
 * 05.Isotopğe Gallery
 * 06.CounterUp
 * 07.Owl Carousel
 * 08.Pricing Table
 * 09.Background Image
 * 10.Skills Progress
 * 11.Contact Form
 * 12.Ripples Effect
------------------------------------------------------------------- */

$( document ).ready( function() {
    // All Functions
    langonaPreloader();
    langonaNavbar();
    langonaWowJs();
    langonaScrollIt();
    langonaMagnificPopup();
    langonaIsotopeGallery();
    langonaCounterUp();
    langonaOwlCarousel();
    langonaPricingTable();
    langonaBgImgPath();
    langonaSkillsProgress();
    langonaContactForm();
    langonaRipplesEffect();
});

/* -------------------------------------------------------------------
 * 01.Preloader
------------------------------------------------------------------- */
function langonaPreloader() {
    "use-strict";

    // Variables
    let preloaderWrap = $( '#preloader-wrap' );
    let loaderInner = preloaderWrap.find( '.preloader-inner' );

   $( window ).ready(function(){
       loaderInner.fadeOut(); 
       preloaderWrap.delay(350).fadeOut( 'slow' );
   });   
}

/* -------------------------------------------------------------------
 * 02.Wow Js
------------------------------------------------------------------- */
function langonaWowJs() {
    "use-strict";

    new WOW().init();
}

/* -------------------------------------------------------------------
 * 03.ScrollIt
------------------------------------------------------------------- */
function langonaScrollIt() {
    "use-strict";

    $.scrollIt({
        upKey: 38,             // key code to navigate to the next section
        downKey: 40,           // key code to navigate to the previous section
        easing: 'linear',      // the easing function for animation
        scrollTime: 600,       // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null,    // function(pageIndex) that is called when page is changed
        topOffset: 0           // offste (in px) for fixed top navigation
    });
}

/* -------------------------------------------------------------------
 * 03.Navbar
------------------------------------------------------------------- */
function langonaNavbar() {
    "use-strict";

    // Variables
    let header          = $( '.header' );
    let logoTransparent = $( '.logo-transparent' );
    let scrollTopBtn    = $( '.scroll-top-btn' );
    let logoNormal      = $( '.logo-normal' );
    let windowWidth     = $( window ).innerWidth();
    let scrollTop       = $( window ).scrollTop();
    let $dropdown       = $( '.dropdown' );
    let $dropdownToggle = $( '.dropdown-toggle' );
    let $dropdownMenu   = $('.dropdown-menu');
    let showClass       = 'show';

    // When Window On Scroll
    $( window ).on( 'scroll', function(){
        let scrollTop = $( this ).scrollTop();

        if( scrollTop > 85 ) {
            logoTransparent.hide();
            logoNormal.show();
            header.addClass( 'header-shrink' );
            scrollTopBtn.addClass( 'active' );
        }else {
            logoTransparent.show();
            logoNormal.hide();
            header.removeClass( 'header-shrink' );
            scrollTopBtn.removeClass( 'active' );
        }
    });

    // The same process is done without page scroll to prevent errors.
    if( scrollTop > 85 ) {
        logoTransparent.hide();
        logoNormal.show();
        header.addClass( 'header-shrink' );
        scrollTopBtn.addClass( 'active' );
    }else {
        logoTransparent.show();
        logoNormal.hide();
        header.removeClass( 'header-shrink' );
        scrollTopBtn.removeClass( 'active' );
    }

    // Window On Resize Hover Dropdown
    $( window ).on( 'resize', function() {
        let windowWidth  = $( this ).innerWidth();

        if ( windowWidth > 991 ) {
            $dropdown.hover(
                function() {
                    let hasShowClass  =  $( this ).hasClass(showClass);
                    if( hasShowClass!==true ){
                        $( this ).addClass(showClass);
                        $( this ).find($dropdownToggle).attr( 'aria-expanded', 'true' );
                        $( this ).find($dropdownMenu).addClass(showClass);
                    }
                },
                function() {
                    $( this ).removeClass(showClass);
                    $( this ).find($dropdownToggle).attr("aria-expanded", "false");
                    $( this ).find($dropdownMenu).removeClass(showClass);
                }
            );
        }else {
            $dropdown.off( 'mouseenter mouseleave' );
            header.find( '.main-menu' ).collapse( 'hide' );
        }
    });
    // The same process is done without page scroll to prevent errors.
    if ( windowWidth > 991 ) {
        $dropdown.hover(
            function() {
                const $this = $( this );

                var hasShowClass  = $this.hasClass(showClass);

                if( hasShowClass!==true ){
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr( 'aria-expanded', 'true');
                    $this.find($dropdownMenu).addClass(showClass);
                }
            },
            function() {
                const $this = $( this );
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", 'false');
                $this.find($dropdownMenu).removeClass(showClass);
            }
        );
    }else {
        $dropdown.off( 'mouseenter mouseleave' );
    }
}

/* ------------------------------------------------------------------- */
/* 04.Magnific Popup
/* ------------------------------------------------------------------- */
function langonaMagnificPopup() {

    "use-strict";

    // Variables
    let videoPopup = $( '.popup-youtube' );

    // Magnific Popup Video Iframe
    videoPopup.magnificPopup({
        disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
    });
}

/* ------------------------------------------------------------------- */
/* 05.Isotope Gallery
/* ------------------------------------------------------------------- */
function langonaIsotopeGallery() {
    "use-strict";

    // Variables 
    let portfolioFilterBtn     = $( '.portfolio-filter > a' );
    let portfolioGalleryWrap   = $( '.portfolio-gallery' );

    // Porfolio Filtering Click Events
    portfolioFilterBtn.on( 'click', function() {
        portfolioFilterBtn.removeClass( 'current' );
        $( this ).addClass( 'current' );
    });

    portfolioGalleryWrap.imagesLoaded( function() {
        let grid = $( '.portfolio-gallery' ).isotope({
            itemSelector: '.glry-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.glry-item',
            }
        });

        // filter items on button click
        portfolioFilterBtn.on( 'click', function() {
            let filterValue = $( this ).attr( 'data-gallery-filter' );
            grid.isotope({
                filter: filterValue
            });
            portfolioFilterBtn.removeClass( 'current' );
            $( this ).addClass( 'current' );
        });
    });
}
/* ------------------------------------------------------------------- */
/* 06.CounterUp
/* ------------------------------------------------------------------- */

function langonaCounterUp() {
    "use-strict";

    // Variables
    let counterItem = $( '.counter' );

    counterItem.counterUp({
        delay: 10,
        time: 1000
    });
}

/* ------------------------------------------------------------------- */
/* 07.Owl Carousel
/* ------------------------------------------------------------------- */
function langonaOwlCarousel() {
    "use-strict";

    // Variables
    let clientsSlider       = $( '.our-clients-slider' );
    let latestBlogSlider    = $( '.latest-blog-slider' );
    let sidebarBanner       = $( '.sidebar-banner-slider' );
    let portfolioSlider     = $( '.portfolio-single-slider' );
    let latestProjectSlider = $( '.latest-project-slider' );
    let heroSlider          = $( '.hero-slider' );

    let srcLoad = setInterval(() => {
        $( '.clients-img' ).find( '#clientActiveImg' ).attr( 'src', clientsSlider.find( '.active .clients-item' ).attr( 'data-big-image-path' ));
    }, 100);

    // Clients Slider
    clientsSlider.owlCarousel({
        loop:false,
        margin:30,
        nav:true,
        dots: false,
        navText: [ "<span class='fa fa-arrow-left'></span>","<span class='fa fa-arrow-right'></span>" ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    // Latest Blog Slider
    latestBlogSlider.owlCarousel({
        loop:false,
        margin:30,
        nav:true,
        dots: false,
        navText: [ "<span class='fa fa-arrow-left'></span>","<span class='fa fa-arrow-right'></span>" ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            768: {
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    // Blog Banner
    sidebarBanner.owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items: 1
            }
        }
    });

    // Portfolio Single Slider
    portfolioSlider.owlCarousel({
        loop: false,
        margin:10,
        nav:true,
        dots: false,
        autoplay:true,
        autoplayTimeout:3000,
        smartSpeed: 700,
        autoplayHoverPause:true,
        navText: [ "<span class='fa fa-arrow-left'></span>","<span class='fa fa-arrow-right'></span>" ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items: 1
            }
        }
    });

    // Latest Project
    latestProjectSlider.owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items: 1
            }
        }
    });

    heroSlider.owlCarousel({
        loop: true,
        margin:0,
        nav:true,
        dots: true,
        autoplay:true,
        autoplayTimeout:3000,
        smartSpeed: 600,
        autoplayHoverPause:true,
        navText: [ "<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'><i>" ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items: 1
            }
        }
    });
}

/* ------------------------------------------------------------------- */
/* 08.Pricing Table
/* ------------------------------------------------------------------- */
function langonaPricingTable(){
    "use-scrict";

    // Variables
    let priceTabLink       = $( '.price-toggle-wrap > a' );
    let priceTabContent    = $( '.pricing-tab-toggle-content' );

    priceTabLink.on( 'click', function(event){
        priceTabLink.removeClass( 'active' );
        $( this ).addClass( 'active' );
        priceTabContent.removeClass( 'active' );
        priceTabContent.eq( $( this ).index() ).addClass( 'active animated fadeInUp' );
        event.preventDefault();
    });
}

/* ------------------------------------------------------------------- */
/* 09.Background Image
/* ------------------------------------------------------------------- */
function langonaBgImgPath(){
    "use-scrict";

    // Variables
    let dataBgItem         = $( '*[data-bg-image-path]' );

    dataBgItem.each( function() {
        let imgPath        = $( this ).attr( 'data-bg-image-path' );
        $( this).css( 'background-image', 'url(' + imgPath + ')' );
    });
}

/* ------------------------------------------------------------------- */
/* 10.Skills Progress
/* ------------------------------------------------------------------- */
function langonaSkillsProgress(){
    // Variables
    let skillsItem         = $( '.skills-progress-item' );

    skillsItem.each( function() {
        let percentValue   = $( this ).attr( 'data-percent' );
        $( this).find( '.progress-value span' ).css( 'width', percentValue + '%');
    });
}

/* ------------------------------------------------------------------- */
/* 11.Contact Form
/* ------------------------------------------------------------------- */
function langonaContactForm(){
    "use-scrict";

    //  Validate Input Variables
    let formControl     = $( '.contact-form-control' );
    let contactForm     = $( '#contactForm' );

    // Added AutoComplete Attribute Turned Off
    formControl.attr( 'autocomplete', 'off' );

    // Form On Submit
    contactForm.on("submit", function(event) {
        //  Variables 
        var name            = $("#contactName").val().trim(),
            email           = $("#contactEmail").val().trim(),
            subject         = $("#contactSubject").val().trim(),
            phone           = $('#contactPhone').val().trim(),
            message         = $("#contactMessage").val().trim(),
            selectedNull    = $('#contactSubject').find("option").eq(0).val(),
            validatePhone   = $('#contactPhone').portjobPhoneValidate(),
            validateEmail   = $('#contactEmail').portjobEmailValidate();

        // Check empty fields
        if( name==='' || email==='' || subject==='' || phone == '' || message==='' ){
            if( $('div.empty-form').css("display") == "none" ){
                $('div.empty-form').stop().slideDown(500).delay(5000).slideUp(500);
            }else {
                return false;
            }
        } else if ( !validateEmail===true ) {
            if( $('div.email-invalid').css("display") == "none" ){
                $('div.email-invalid').stop().slideDown(500).delay(5000).slideUp(500);
            }else {
                return false;
            }
        } else if ( !validatePhone===true ) {
            if( $('div.phone-invalid').css("display") == "none" ){
                $('div.phone-invalid').stop().slideDown(500).delay(5000).slideUp(500);
            }else {
                return false;
            }
        } else if (subject == selectedNull) {
            if( $('div.empty-select').css("display") == "none" ){
                $('div.empty-select').stop().slideDown().delay(5000).slideUp();
            }else {
                return false;
            }
        } else {
            // Once the information entered is verified, the mail form is sent. 
            $(this).find(':submit').append('<span id="btn-loader" class="fas fa-spinner fa-pulse ml-3"></span>');
            $(this).find(':submit').attr('disabled','true');
            $.ajax({
                url: "phpmailer/send_mail.php?mail=request",
                data: {
                    contact_name:name,
                    contact_email:email,
                    contact_subject:subject,
                    contact_phone: phone,
                    contact_message:message
                },
                type: "POST",
                success: function(response) {
                    contactForm[0].reset();
                    $(".select-selected").html(selectedNull);
                    contactForm.find(':submit').removeAttr('disabled');
                    $(".success-form").html(response).slideDown(500).delay(5000).slideUp(500);  
                    contactForm.find(':submit').find("span#btn-loader").fadeOut();
                }
            });
        }
        event.preventDefault();
    });
}

/* ------------------------------------------------------------------- */
/* 12.Ripples Effect
/* ------------------------------------------------------------------- */ 
function langonaRipplesEffect() {
    "use-strict";
    
    $( '#hero-riples-banner' ).ripples({
        resolution: 500,
        dropRadius: 20,
        perturbance: 0.04
    });
}