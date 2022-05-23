let scrollHeader=document.querySelector("#bottom-scroll")


document.addEventListener('scroll', function(){
   
    if(window.scrollY>200){
        scrollHeader.style.position = "fixed"
        scrollHeader.style.marginTop="-50px"
        scrollHeader.style.boxShadow=" 0px 3px 8px rgba(0, 0, 0, 0.24)"
    }
   

    else{
        scrollHeader.style.position = "static"
        scrollHeader.style.marginTop="0px"
        scrollHeader.style.boxShadow=" none"
    }
    
})


var owl = $('#owl1');
owl.owlCarousel({
    items:2,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
    
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[2000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
});


$('#owl2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

$('#owl3').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:4
        }
    }
})

$('#owl4').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1.4
        }
    }
})

$('#owl5').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$('#owl6').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})


