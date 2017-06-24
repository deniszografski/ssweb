import 'fullpage.js/dist/jquery.fullpage.js';
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
    });
    $('.down-arrow').on('click',function(){
      $.fn.fullpage.moveSectionDown();
    });
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
