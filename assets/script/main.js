const nextIcon = '<img src="assets/img/right-arrow.svg" alt="right" class="img-arrow">';
const prevIcon = '<img src="assets/img/left-arrow.svg" alt="left" class="img-arrow">';

$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 15,
    dots: false,
    nav: true,
    navText: [
        prevIcon,
        nextIcon
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

// $(document).ready(function(){
//     $('.navbar-toggler').click(function(){{
//         // console.log('halo ini bis aloh')
//         // $('button.one').addClass('clicked');  
//         $('.navbar-toggler').toggleClass('clicked');
//     }})

//     // $('button.two').on('click',function () {
//     //     $('button.two').removeClass('.navbar-toggler-icon');
//     // });
// })

// // ADD / REMOVE CLASS ON CLICK
// // navigation element variables
var $button = document.querySelector(".navbar-toggler");

// on click event
$button.addEventListener('click', function () {	    
    if($button.classList.contains("clicked")){
	    // if has 'selected' class remove class
	    $button.classList.remove("navbar-toggler-icon hamburger"); 
	} else {
		// otherwise add 'selected' class
		$button.classList.add("clicked"); 
	}	
});
