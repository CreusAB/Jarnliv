$( document ).ready(function() {
  'use strict';

  /* Ange att innehållet har laddats */
  $( "body" ).addClass( "loaded" );
});

$(function(){
  /* Mjuk laddning av sidor */
  var options = {
    debug: true,
    prefetch: true,
    prefetchOn: 'mouseover touchstart',
    cacheLength: 4,
    onStart: {
      duration: 0, // Duration of our animation
      render: function ($container) {
        // Add your CSS animation reversing class
        $container.addClass( 'is-exiting' );

        // Restart your animation
        smoothState.restartCSSAnimations();
      }
    },
    onReady: {
      duration: 0,
      render: function ($container, $newContent) {
        // Remove your CSS animation reversing class
        $container.removeClass('is-exiting');

        // Inject the new content
        $container.html($newContent);
      }
    }
  },
  smoothState = $('#main').smoothState(options).data('smoothState');
});
