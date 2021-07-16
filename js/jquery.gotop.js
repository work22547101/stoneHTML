
(function($){
    'use strict';
    
    var defaults = {
        background : '#dabc84', // Background color
        color: '#fff', // Icon color
        rounded: true, // if true make the button rounded
        width: '45px',
        height: '45px',
        bottom : '25px', // Button bottom position
        right : '25px', // Button right position
        windowScrollShow: 400, // Window height after which show the button
        speed: 800,
        customHtml: '', // Set custom html for icon
        mobileOnly: false // Show button only on mobile device
    }
    
    // ----------------------------------
    
    $.fn.gotop = function( options ){
        
        var opts = $.extend(true, {}, defaults, options)
        ,   isMobile = $.fn.gotop.isMobile()
        ,   $el = this;
        

        return this.each(function(){
            // Hide the element
            $el.hide();

            // ----------------------------------

            // Make the button rounded
            if(opts.rounded == true) {
                $el.css('border-radius', '50%');
            }

            // ----------------------------------

            // CSS 
            $el.css({
                cursor: 'pointer',
                position: 'fixed',
                'align-items': 'center',
                'justify-content': 'center',
                background: opts.background,
                color: opts.color,
                width: opts.width,
                height: opts.height,
                bottom: opts.bottom, 
                right: opts.right
            });

            // ----------------------------------

            // Set default icon if customHtml option is empty
            if(opts.customHtml != '') {
                $el.append(opts.customHtml);            
            } else {
                $el.append('&uarr;');
            }

            // ----------------------------------
            
            // Back to top
            $el.click(function (e) {
              e.preventDefault();
              $('html, body').animate({scrollTop: 0}, opts.speed);
            });
            
            // ----------------------------------
            
            // Show the scroll to top button only on mobile devices
            if (opts.mobileOnly == true) {
                if(isMobile) {
                    $(window).scroll(function() {
                        $.fn.gotop.showButton($el, opts.windowScrollShow);
                    });                    
                } else {
                    return false;
                }
            }
            else
            {
                // Show the scroll to top button on all devices
                $(window).scroll(function() {
                    $.fn.gotop.showButton($el, opts.windowScrollShow);
                }); 
            }            
            
            // ----------------------------------
            
        });
    };
    
    // --------------------------------------------------------------------------
    
    $.fn.gotop.isMobile = function() { 
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); 
    }
    
    // --------------------------------------------------------------------------
    
    $.fn.gotop.showButton = function(element, windowScrollHeight) {
        
        if( $(window).scrollTop() > windowScrollHeight ) {
            element.fadeIn(400)
                .css('display', 'flex');
        } else {
            element.fadeOut(400);
        }
    }
    
    // --------------------------------------------------------------------------
    
}(jQuery));
