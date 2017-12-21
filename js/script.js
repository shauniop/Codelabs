/*<$(document).on('mouseover','p',function(e){
			e.preventDefault();
			$(this).hide();
});

$(document).on('mouseover','div',function(m){
	m.preventDefault();
	$(this).hide(10000);
});
*/

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}

// parallex
   $(document).ready(function(){
      $('.parallax').parallax();
    });


// parallex
/**************carousel**************/
    $(document).ready(function(e){
        $('.slideshow').slick({
            autoplay:true,  
        });
       
    });



/**************carousel*****************/ 

/*****************events**********************/ 
$(document).ready(function(e){

  $('.more').hide();

  $('#event1').mouseenter(function(){
          $('#bt1').show();
          // $('#bt1').fadeIn(2000);   
  });
    $('#event2').mouseenter(function(){
          $('#bt2').show();  
          // $('#bt2').fadeIn(); 
  });
    $('#event3').mouseenter(function(){
          $('#bt3').show();  
          // $('#bt3').fadeIn(); 
  });
     $('#event4').mouseenter(function(){
          $('#bt4').show();  
          // $('#bt4').fadeIn(); 
  });
 
  $('.event').mouseleave(function(){
    $('.more').fadeOut();
}); 


});


/*****************events**********************/

$(function(){

    $('.event').addClass('animated fadeIn');


})

$(document).ready(function(){
      $('.carousel.carousel-slider').carousel({fullWidth: true});
    });
autoplay()   
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}