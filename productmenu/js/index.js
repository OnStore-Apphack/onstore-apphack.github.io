jQuery(function($) {

  $('.feedly-list-item > a').each(function(){
  
    $(this).on('click', function(){      
      
      
      /*$('.on').removeClass('on');*/
      
      if ( $(this).hasClass('on') ) {
      
        $(this).removeClass('on').addClass('off');
      
      } else {
      
        $(this).removeClass('off').addClass('on');
      
      } 
      
      return false;      
    
    });
  
  });
  
})