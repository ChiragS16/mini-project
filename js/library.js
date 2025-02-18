jQuery(document).ready(function( $ ) {

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  // Header fixed on scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Real view height for mobile devices
  if (window.matchMedia("(max-width: 767px)").matches) {
    $('#intro').css({ height: $(window).height() });
  }

  // Initiate the wowjs animation library
  new WOW().init();

  // Initialize Venobox
  $('.venobox').venobox({
    bgcolor: '',
    overlayColor: 'rgba(6, 12, 34, 0.85)',
    closeBackground: '',
    closeColor: '#fff'
  });

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });




// fixed to top button fixed nav button top right 
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function(e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }


















  // Smooth scroll for the menu and links with .scrollto classes
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if( ! $('#header').hasClass('header-fixed') ) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Gallery carousel (uses the Owl Carousel library)
  $(".gallery-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    center:true,
    responsive: { 0: { items: 1 }, 768: { items: 3 }, 992: { items: 4 }, 1200: {items: 5}
    }
  });

 
// Slider js
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change slide every 2 seconds (2000 milliseconds)
}

// <!-- slider end  -->


// <!-- upcoming events changed for mobile view  -->
const upcomingEvents = [
  {
    img:"img/EVENTS/shivjayanti.jpg",
    title:"Shiv Jayanti",
    date:"Date:19/02/2024",
    desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet quod repellat accusamus? Sapiente alias atque, laboriosam odio perspiciatis cumque rerum. Dicta obcaecati maxime repellat dolorem quas quam at quo quasi.",
  },
  {
    img:"img/EVENTS/tree plantation and conservation.jpg",
    title:"Tree Plantation and conservation",
    date:"Date:12/07/2024",
    desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet quod repellat accusamus? Sapiente alias atque, laboriosam odio perspiciatis cumque rerum. Dicta obcaecati maxime repellat dolorem quas quam at quo quasi.",
  },
  {
    img:"img/EVENTS/gaddarshan.jpg",
    title:"Gaddarshan",
    date:"Date:09/09/2024",
    desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet quod repellat accusamus? Sapiente alias atque, laboriosam odio perspiciatis cumque rerum. Dicta obcaecati maxime repellat dolorem quas quam at quo quasi.",
  },
]

let slideCount = 0
const eventImage = document.getElementsByClassName('upcoming_events_image')[0]
const eventTitle = document.getElementsByClassName('event_title')[0]
const eventDate = document.getElementsByClassName('event_date')[0]
const eventDesc = document.getElementsByClassName('event_desc')[0]

const dispEvents = () => {
    eventImage.src = upcomingEvents[slideCount].img;
    eventTitle.textContent = upcomingEvents[slideCount].title;
    eventDate.textContent = upcomingEvents[slideCount].date;
    eventDesc.textContent = upcomingEvents[slideCount].desc
    
    slideCount++;
    if (slideCount === upcomingEvents.length) {
      slideCount = 0;
    }
    setTimeout(dispEvents, 2000);
 }

dispEvents()
// /////////// old code dont remove gives error
var slideIndex1 = 0;
showSlides1();

function showSlides1() {
    var i;
    var slides1 = document.getElementsByClassName("up_s");
    for (i = 0; i < slides1.length; i++) {
        slides1[i].style.display = "none";
    }
    slideIndex1++;
    if (slideIndex1 > slides1.length) {
        slideIndex1 = 1;
    }
    slides1[slideIndex1 - 1].style.display = "flex";
    setTimeout(showSlides1, 2000); // Change slide every 2 seconds
}
});

// <!-- upcoming events end  -->



 




// const images = [
//   { url: 'img/EVENTS DETAIL/tree/WhatsApp Image 2024-02-18 at 13.19.41_615b84d2.jpg', description: 'Image 1' },
//   { url: 'img/EVENTS DETAIL/tree/WhatsApp Image 2024-02-18 at 13.19.42_3b0e74a7.jpg', description: 'Image 2' },
//   { url: 'img/EVENTS DETAIL/tree/WhatsApp Image 2024-02-18 at 13.19.42_f1fec71f.jpg', description: 'Image 3' },

// ];


// function appendImages(images) {
//   const imgRender = document.getElementById('imgRender');
//   images.forEach(image => {
//     const img = document.createElement('img');
//     img.src = image.url;
//     img.alt = image.description;
//     imgRender.appendChild(img);
//   });
// }


// appendImages(images);
//  insert future years here in same format


console.log(images);

// div in which the image should be render
const imageRender = document.getElementById('imgRender');

const dispImages = (year) => {
  console.log(year);
  const currentYearImages = images[year];
  console.log(currentYearImages);
  imageRender.innerHTML = '';
  currentYearImages.forEach((imageSrc) => {
      // template for images 
      let imageDiv = `
      <div class="col-lg-3 col-md-4">
      <div class="venue-gallery">
        <a href="${imageSrc}" class="venobox" data-gall="venue-gallery">
          <img src="${imageSrc}" alt="" class="img-fluid">
        </a>
      </div>
    </div>`
    
      imageRender?.insertAdjacentHTML("beforeend", imageDiv)
      
  })
}
 
dispImages(2023)

 prevYear.addEventListener("mousedown", () => {
   intervalId = setInterval(() => {
     currentYear--;
     if (currentYear < minYear) {
       currentYear = minYear;
       clearInterval(intervalId);
     }
     yearDisplay.textContent = currentYear;
     dispImages(currentYear)
   }, 100);
 });
 
 prevYear.addEventListener("mouseup", () => {
   clearInterval(intervalId);
 });
 
 prevYear.addEventListener("mouseleave", () => {
   clearInterval(intervalId);
 });
 
 prevYear.addEventListener("click", () => {
   currentYear--;
   if (currentYear < minYear) {
     currentYear = minYear;
   }
   yearDisplay.textContent = currentYear;
   dispImages(currentYear)
 });
 
 nextYear.addEventListener("mousedown", () => {
   intervalId = setInterval(() => {
     currentYear++;
     if (currentYear > maxYear) {
       currentYear = maxYear;
       clearInterval(intervalId);
     }
     yearDisplay.textContent = currentYear;
     dispImages(currentYear)
   }, 100);
 });
 
 nextYear.addEventListener("mouseup", () => {
   clearInterval(intervalId);
 });
 
 nextYear.addEventListener("mouseleave", () => {
   clearInterval(intervalId);
 });
 
 nextYear.addEventListener("click", () => {
   currentYear++;
   if (currentYear > maxYear) {
     currentYear = maxYear;
   }
   yearDisplay.textContent = currentYear;
   dispImages(currentYear);

  });






// //  next prev dropdown linked to all years pics
const handleChange =(year) => {
  dispImages(year)
}
// DROPDOWN YEAR CHANGES
const select = document.getElementById("drop-down");
// to create options for dropdown menu for years  
for(let y = 2018 ; y<=2023; y++){

  const option = document.createElement("option");
  option.value = y;
  option.textContent = y.toString();
  select.appendChild(option);
}












