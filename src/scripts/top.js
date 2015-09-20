
    <!-- jQuery REVOLUTION Slider  -->

jQuery(document).ready(function() {
    jQuery('.banner').revolution({
        delay:9000,
        startwidth:1100,
        startheight:450,
        startWithSlide:0,

        fullScreenAlignForce:"off",
        autoHeight:"off",
        minHeight:"off",

        shuffle:"off",

        onHoverStop:"on",

        thumbWidth:100,
        thumbHeight:50,
        thumbAmount:3,

        hideThumbsOnMobile:"off",
        hideNavDelayOnMobile:1500,
        hideBulletsOnMobile:"off",
        hideArrowsOnMobile:"off",
        hideThumbsUnderResoluition:0,

        hideThumbs:0,
        hideTimerBar:"off",

        keyboardNavigation:"on",

        navigationType:"bullet",
        navigationArrows:"solo",
        navigationStyle:"preview1",

        navigationHAlign:"center",
        navigationVAlign:"bottom",
        navigationHOffset:0,
        navigationVOffset:30,

        soloArrowLeftHalign:"left",
        soloArrowLeftValign:"center",
        soloArrowLeftHOffset:20,
        soloArrowLeftVOffset:0,

        soloArrowRightHalign:"right",
        soloArrowRightValign:"center",
        soloArrowRightHOffset:20,
        soloArrowRightVOffset:0,


        touchenabled:"on",
        swipe_velocity:"0.7",
        swipe_max_touches:"1",
        swipe_min_touches:"1",
        drag_block_vertical:"false",

        parallax:"mouse",
        parallaxBgFreeze:"on",
        parallaxLevels:[10,7,4,3,2,5,4,3,2,1],
        parallaxDisableOnMobile:"off",

        stopAtSlide:-1,
        stopAfterLoops:-1,
        hideCaptionAtLimit:0,
        hideAllCaptionAtLilmit:0,
        hideSliderAtLimit:0,

        dottedOverlay:"none",

        spinned:"spinner4",

        fullWidth:"off",
        forceFullWidth:"off",
        fullScreen:"off",
        fullScreenOffsetContainer:"#topheader-to-offset",
        fullScreenOffset:"0px",

        panZoomDisableOnMobile:"off",

        simplifyAll:"off",

        shadow:0
    });

    /*jQuery("a[rel^='prettyPhoto']").prettyPhoto({
        theme: 'light_square',
        social_tools: false
    });*/
    // FitVids
    //jQuery(".responsive-video-wrapper").fitVids();
    // jflickrfeed
    /*jQuery('.flickr-photos-list').jflickrfeed({
        limit: 9,
        qstrings: {
            id: '71865026@N00'
        },
        itemTemplate: '<li><a href="{{image_b}}"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
    });*/
    // jQuery UItoTop
    //jQuery().UItoTop({ easingType: 'easeOutQuart' });
    // Skin Chooser
    jQuery(".color-skin").click(function () {
        var cls = this.id;
        jQuery(".color-skin").removeClass("active");
        jQuery(this).addClass("active");
        jQuery("#main-wrapper").removeClass();
        jQuery("#main-wrapper").addClass(cls);
    });

});

// jQuery CarouFredSel
var caroufredsel = function () {
    /*jQuery('#caroufredsel-portfolio-container').carouFredSel({
        responsive: true,
        scroll: 1,
        circular: false,
        infinite: false,
        items: {
            visible: {
                min: 1,
                max: 3
            }
        },
        prev: '#portfolio-prev',
        next: '#portfolio-next',
        auto: {
            play: false
        }
    });
    jQuery('#caroufredsel-clients-container').carouFredSel({
        responsive: true,
        scroll: 1,
        circular: false,
        infinite: false,
        items: {
            visible: {
                min: 1,
                max: 4
            }
        },
        prev: '#client-prev',
        next: '#client-next',
        auto: {
            play: false
        }
    });*/
};
jQuery(window).load(function () {
    caroufredsel();
});
jQuery(window).resize(function () {
    caroufredsel();
});/**
 * Created by ljp on 2015/7/2.
 */

