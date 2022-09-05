$(document).ready(function () {
  $('.one-time').slick({
    dots: false,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    autoplaySpeed: 3000,
    arrows: false,
    adaptiveHeight: true
  });
});


$(document).ready(function () {
  $('.multiple-items').slick({
    infinite: true,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive:[
      {
          breakpoint: 880,
          settings:{
              slidesToShow: 2,
              slidesToScroll: 2,
          }
      },
      {
          breakpoint: 600,
          settings:{
              slidesToShow: 1,
              slidesToScroll: 1,
          }
      },

  ],
  });
});



$(document).ready(function () {

  $('.count').each(function () {
    var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 2000,
      step: function (func) {
        $(this).text(parseFloat(func).toFixed(size));
      }
    });
  });



});
// function startCount() {
//   $('.count').each(function () {
//     var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
//     $(this).prop('Counter', 0).animate({
//       Counter: $(this).text()
//     }, {
//       duration: 2000,
//       step: function (func) {
//         $(this).text(parseFloat(func).toFixed(size));
//       }
//     });
//   });

// }

// $(window).scroll(function () {
//   startCount();
// });

// startCount();


$(document).ready(function () {
  // $('.head-tab').click(function () {

  //   console.log('head tabclicked');

  //   $('.tabs').css('background-color', 'transparent');
  //   $('.tabs').css('color', 'white ');

  //   $(this).parent('.tabs').css('background-color', '#ffffff');
  //   $(this).parent('.tabs').css('color', 'black ');

  //   $('.head-tab img').css('transform', 'rotate(0deg)');
  //   $(this).find('img').css('transform', 'rotate(180deg)');
  //   $('.content').slideUp();
    
  //   $(this).siblings('.content').slideDown();

  // });

  $('.head-tab').click(function () {
    $('.tabs').removeClass('active');

    $(this).parent('.tabs').toggleClass('active');

  });



});

// ***********************hamburger**************
$(document).ready(function () {
    $('#burger_click').click(function () {
      $('.nav_hamburger').slideToggle();

      $(this).toggleClass('active');
      
      if ($("#burger_click" ).hasClass( "active" )) {
          $(this).find('i').removeClass('fa-bars');
          $(this).find('i').addClass('fa-times');
      }else{
          $(this).find('i').removeClass('fa-times');
          $(this).find('i').addClass('fa-bars');
      }
  });
})







$(document).ready(function(){
  var $grid = $('.card-section');
        
  $grid.isotope({
      itemSelector: '.items',
      layoutMode: 'fitRows',
      // filter: '.three',

      // filter: filterValue 
  });

  $('.links').on('click', 'a', function () {
      var filterValue = $(this).attr('data-filter');
      // console.log(filterValue);
      $grid.isotope({ 
          filter: filterValue 
      });
  });

});