(function($){
  $(function(){

    $('.button-collapse').sideNav();

    var options = [
    // {selector: '.class', offset: 200, callback: customCallbackFunc } },
    // {selector: '.other-class', offset: 200, callback: function() {
    //   customCallbackFunc();
    // } },
    {selector: '#staggered-portfolio-list', offset: 500, callback: function(el) {
      Materialize.showStaggeredList($(el));
    } },
  ];
  Materialize.scrollFire(options);

  }); // end of document ready
})(jQuery); // end of jQuery name space
