import 'fullpage.js/dist/jquery.fullpage.js';
import 'fullpage.js/vendors/scrolloverflow.js';
import 'jquery-slimscroll/jquery.slimscroll.min.js';
import 'iscroll/build/iscroll.js';
export default {
  init() {
    // JavaScript to be fired on all pages
    $('#homepage').fullpage({
      anchors: ['intro','web', 'mobile', 'design', 'seo', 'contact'],
      navigation: true,
      navigationPosition: 'left',
      css3: true,
      easing: 'easeInOutCubic',
      easingcss3: 'ease',
      scrollOverflow:true,
    });
    $('.down-arrow').on('click',function(){
      $.fn.fullpage.moveSectionDown();
    });
     $('#contact-wrapper').slimScroll({
        height: '400px',
    });
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
