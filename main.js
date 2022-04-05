$(document).ready(function(){
    const slider = $("#slider").owlCarousel({
        center: true,
        items:1,
        loop:true,
        touchDrag:true,
       
      responsive:{
        0:{
          items:1
        },
        320:{
          items:1
        }
      }
    });
  });
  