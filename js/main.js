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
    img:"img/up_e/u_aathava.jpg",
    title:"शिवरायांचा आठवावा साक्षेप",
    date:" गुरुवार दि. ६ जून २०२४ रोजी सायं. ठिक ४.३० ",
    desc:" अध्यक्ष : मा.श्री. रमेश भुमे \n अपर राज्यकर आयुक्त (जीएसटी-३),मुंबई. \n प्रमुख व्याख्याते : \n मा.प्रा. शिवाजी भोसले \n सुप्रसिध्द शिवव्याख्याते \n स्थळ: शासकीय उपाहारगृह, वस्तू व सेवा कर भवन, माझगांव, मुंबई ",
  },
  {
    img:"img/up_e/u_shiv.jpg",
    title:"शिवराज्याभिषेक दिन सोहळा",
    date:" दिनांक: ६ जून २०२४,गुरुवार",
    desc:"स्थळ: शिवजयंती उत्सव समिती कार्यालय, माझगाव",
  },
  {
    img:"img/up_e/u_tree.jpg",
    title:"वृक्षारोपण दिन",
    date:" दिनांक: २२ जून २०२४,शनिवार",
    desc:"वृषावरोपण म्हणजे वृष्टी पडवणारी वर्षा पाण्याची धारणा करणे व पाण्याची उपयोगिता वाढविणे. ह्या प्रक्रियेच्या माध्यमातून जमीनचे उत्तम परिपेक्ष्य साधता येते, ज्यामुळे उत्पादनात मोठी वाढ होते. वृषावरोपण आरोग्य, वातावरण संरक्षण, जलसंपदा आणि वनसंपदा सुरक्षित करण्यात महत्वाचं ठेवलं जातं",
  },
  {
    img:"img/about_us/gad.JPG",
    title:"महिला गडदर्शन दक्षिण दिग्विजय - १ ",
    date:" दिनांक:९ नोव्हेंबर २०२४ ते १५ नोव्हेंबर २०२४,शनिवार",
    desc:"(श्री शैलम आणि गोवळकोंडा किल्ला)",
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



  //  ==========================
 //next previous BUTTON for years
 
 //============================ 


 const yearDisplay = document.getElementById("year-display");
 const prevYear = document.getElementById("prev-year");
 const nextYear = document.getElementById("next-year");
 
 let currentYear = 1970;
 yearDisplay.textContent = currentYear;
 const minYear = 1970;
 const maxYear = 2024;
 let intervalId;

 const images = {
  1970: ['img/gallery/1.jpg', 'img/gallery/2.jpg', 'img/gallery/3.jpg', 'img/gallery/4.jpg', 'img/gallery/5.jpg', 'img/gallery/6.jpg'],
  1971: ['img/venue-gallery/1.jpg', 'img/venue-gallery/2.jpg', 'img/venue-gallery/3.jpg', 'img/venue-gallery/4.jpg', 'img/venue-gallery/5.jpg', 'img/venue-gallery/6.jpg'],
  1972: ['img/gallery/1.jpg', 'img/gallery/2.jpg', 'img/gallery/3.jpg', 'img/gallery/4.jpg', 'img/gallery/5.jpg', 'img/gallery/6.jpg'],
  1973: ['img/venue-gallery/1.jpg', 'img/venue-gallery/2.jpg', 'img/venue-gallery/3.jpg', 'img/venue-gallery/4.jpg', 'img/venue-gallery/5.jpg', 'img/venue-gallery/6.jpg'],
  1974: ['img/gallery/1.jpg', 'img/gallery/2.jpg', 'img/gallery/3.jpg', 'img/gallery/4.jpg', 'img/gallery/5.jpg', 'img/gallery/6.jpg'],
  1975: ['img/venue-gallery/1.jpg', 'img/venue-gallery/2.jpg', 'img/venue-gallery/3.jpg', 'img/venue-gallery/4.jpg', 'img/venue-gallery/5.jpg', 'img/venue-gallery/6.jpg'],
  1976: ['img/gallery/1.jpg', 'img/gallery/2.jpg', 'img/gallery/3.jpg', 'img/gallery/4.jpg', 'img/gallery/5.jpg', 'img/gallery/6.jpg'],
  1977: ['img/venue-gallery/1.jpg', 'img/venue-gallery/2.jpg', 'img/venue-gallery/3.jpg', 'img/venue-gallery/4.jpg', 'img/venue-gallery/5.jpg', 'img/venue-gallery/6.jpg'],
  1978: ['img/gallery/1.jpg', 'img/gallery/2.jpg', 'img/gallery/3.jpg', 'img/gallery/4.jpg', 'img/gallery/5.jpg', 'img/gallery/6.jpg'],
  1979: ['img/venue-gallery/1.jpg', 'img/venue-gallery/2.jpg', 'img/venue-gallery/3.jpg', 'img/venue-gallery/4.jpg', 'img/venue-gallery/5.jpg', 'img/venue-gallery/6.jpg'],
  1980: ['img/gallery/1.jpg', 'img/gallery/2.jpg', 'img/gallery/3.jpg', 'img/gallery/4.jpg', 'img/gallery/5.jpg', 'img/gallery/6.jpg'],
  1981: ['img/venue-gallery/1.jpg', 'img/venue-gallery/2.jpg', 'img/venue-gallery/3.jpg', 'img/venue-gallery/4.jpg', 'img/venue-gallery/5.jpg', 'img/venue-gallery/6.jpg'],
  1982: ['img/gallery/1.jpg', 'img/gallery/2.jpg', 'img/gallery/3.jpg', 'img/gallery/4.jpg', 'img/gallery/5.jpg', 'img/gallery/6.jpg'],
  1983: ['img/venue-gallery/1.jpg', 'img/venue-gallery/2.jpg', 'img/venue-gallery/3.jpg', 'img/venue-gallery/4.jpg', 'img/venue-gallery/5.jpg', 'img/venue-gallery/6.jpg'],
  1984: ['img/gallery/1.jpg', 'img/gallery/2.jpg', 'img/gallery/3.jpg', 'img/gallery/4.jpg', 'img/gallery/5.jpg', 'img/gallery/6.jpg'],
  1985: ['img/venue-gallery/1.jpg', 'img/venue-gallery/2.jpg', 'img/venue-gallery/3.jpg', 'img/venue-gallery/4.jpg', 'img/venue-gallery/5.jpg', 'img/venue-gallery/6.jpg'],
  1986: ['img/gallery/1.jpg', 'img/gallery/2.jpg', 'img/gallery/3.jpg', 'img/gallery/4.jpg', 'img/gallery/5.jpg', 'img/gallery/6.jpg'],
  1987: ['img/venue-gallery/1.jpg', 'img/venue-gallery/2.jpg', 'img/venue-gallery/3.jpg', 'img/venue-gallery/4.jpg', 'img/venue-gallery/5.jpg', 'img/venue-gallery/6.jpg'],
  1988: ['img/gallery/1.jpg', 'img/gallery/2.jpg', 'img/gallery/3.jpg', 'img/gallery/4.jpg', 'img/gallery/5.jpg', 'img/gallery/6.jpg'],
  1989: ['img/venue-gallery/1.jpg', 'img/venue-gallery/2.jpg', 'img/venue-gallery/3.jpg', 'img/venue-gallery/4.jpg', 'img/venue-gallery/5.jpg', 'img/venue-gallery/6.jpg'],
  1990: ['img/gallery/1.jpg', 'img/gallery/2.jpg', 'img/gallery/3.jpg', 'img/gallery/4.jpg', 'img/gallery/5.jpg', 'img/gallery/6.jpg'],
  1991: ['img/venue-gallery/1.jpg', 'img/venue-gallery/2.jpg', 'img/venue-gallery/3.jpg', 'img/venue-gallery/4.jpg', 'img/venue-gallery/5.jpg', 'img/venue-gallery/6.jpg'],
  1992: ['img/gallery/1.jpg', 'img/gallery/2.jpg', 'img/gallery/3.jpg', 'img/gallery/4.jpg', 'img/gallery/5.jpg', 'img/gallery/6.jpg'],
  1993: ['img/venue-gallery/1.jpg', 'img/venue-gallery/2.jpg', 'img/venue-gallery/3.jpg', 'img/venue-gallery/4.jpg', 'img/venue-gallery/5.jpg', 'img/venue-gallery/6.jpg'],
  1994: ['img/gallery/1.jpg', 'img/gallery/2.jpg', 'img/gallery/3.jpg', 'img/gallery/4.jpg', 'img/gallery/5.jpg', 'img/gallery/6.jpg'],
  1995: ['img/venue-gallery/1.jpg', 'img/venue-gallery/2.jpg', 'img/venue-gallery/3.jpg', 'img/venue-gallery/4.jpg', 'img/venue-gallery/5.jpg', 'img/venue-gallery/6.jpg'],
  1996: ['img/gallery/1.jpg', 'img/gallery/2.jpg', 'img/gallery/3.jpg', 'img/gallery/4.jpg', 'img/gallery/5.jpg', 'img/gallery/6.jpg'],
  1997: ['img/venue-gallery/1.jpg', 'img/venue-gallery/2.jpg', 'img/venue-gallery/3.jpg', 'img/venue-gallery/4.jpg', 'img/venue-gallery/5.jpg', 'img/venue-gallery/6.jpg'],
  1998: ['img/gallery/1.jpg', 'img/gallery/2.jpg', 'img/gallery/3.jpg', 'img/gallery/4.jpg', 'img/gallery/5.jpg', 'img/gallery/6.jpg'],
  1999: ['img/venue-gallery/1.jpg', 'img/venue-gallery/2.jpg', 'img/venue-gallery/3.jpg', 'img/venue-gallery/4.jpg', 'img/venue-gallery/5.jpg', 'img/venue-gallery/6.jpg'],
  2000: ['img/gallery/1.jpg', 'img/gallery/2.jpg', 'img/gallery/3.jpg', 'img/gallery/4.jpg', 'img/gallery/5.jpg', 'img/gallery/6.jpg'],
  2001: ['img/venue-gallery/1.jpg', 'img/venue-gallery/2.jpg', 'img/venue-gallery/3.jpg', 'img/venue-gallery/4.jpg', 'img/venue-gallery/5.jpg', 'img/venue-gallery/6.jpg'],
  2002: ['img/gallery/1.jpg', 'img/gallery/2.jpg', 'img/gallery/3.jpg', 'img/gallery/4.jpg', 'img/gallery/5.jpg', 'img/gallery/6.jpg'],
  2003: ['img/venue-gallery/1.jpg', 'img/venue-gallery/2.jpg', 'img/venue-gallery/3.jpg', 'img/venue-gallery/4.jpg', 'img/venue-gallery/5.jpg', 'img/venue-gallery/6.jpg'],
  2004: ['img/gallery/1.jpg', 'img/gallery/2.jpg', 'img/gallery/3.jpg', 'img/gallery/4.jpg', 'img/gallery/5.jpg', 'img/gallery/6.jpg'],
  2005: ['img/venue-gallery/1.jpg', 'img/venue-gallery/2.jpg', 'img/venue-gallery/3.jpg', 'img/venue-gallery/4.jpg', 'img/venue-gallery/5.jpg', 'img/venue-gallery/6.jpg'],
  2006: ['img/gallery/1.jpg', 'img/gallery/2.jpg', 'img/gallery/3.jpg', 'img/gallery/4.jpg', 'img/gallery/5.jpg', 'img/gallery/6.jpg'],
  2007: ['img/venue-gallery/1.jpg', 'img/venue-gallery/2.jpg', 'img/venue-gallery/3.jpg', 'img/venue-gallery/4.jpg', 'img/venue-gallery/5.jpg', 'img/venue-gallery/6.jpg'],
  2008: ['img/gallery/1.jpg', 'img/gallery/2.jpg', 'img/gallery/3.jpg', 'img/gallery/4.jpg', 'img/gallery/5.jpg', 'img/gallery/6.jpg'],
  2008: ['img/venue-gallery/1.jpg', 'img/venue-gallery/2.jpg', 'img/venue-gallery/3.jpg', 'img/venue-gallery/4.jpg', 'img/venue-gallery/5.jpg', 'img/venue-gallery/6.jpg'],
  2009: ['img/gallery/1.jpg', 'img/gallery/2.jpg', 'img/gallery/3.jpg', 'img/gallery/4.jpg', 'img/gallery/5.jpg', 'img/gallery/6.jpg'],
  2010: ['img/venue-gallery/1.jpg', 'img/venue-gallery/2.jpg', 'img/venue-gallery/3.jpg', 'img/venue-gallery/4.jpg', 'img/venue-gallery/5.jpg', 'img/venue-gallery/6.jpg'],
  2011: ['img/gallery/1.jpg', 'img/gallery/2.jpg', 'img/gallery/3.jpg', 'img/gallery/4.jpg', 'img/gallery/5.jpg', 'img/gallery/6.jpg'],
  2012: ['img/venue-gallery/1.jpg', 'img/venue-gallery/2.jpg', 'img/venue-gallery/3.jpg', 'img/venue-gallery/4.jpg', 'img/venue-gallery/5.jpg', 'img/venue-gallery/6.jpg'],
  2013: ['img/gallery/1.jpg', 'img/gallery/2.jpg', 'img/gallery/3.jpg', 'img/gallery/4.jpg', 'img/gallery/5.jpg', 'img/gallery/6.jpg'],
  2014: ['img/venue-gallery/1.jpg', 'img/venue-gallery/2.jpg', 'img/venue-gallery/3.jpg', 'img/venue-gallery/4.jpg', 'img/venue-gallery/5.jpg', 'img/venue-gallery/6.jpg'],
  2015: ['img/gallery/1.jpg', 'img/gallery/2.jpg', 'img/gallery/3.jpg', 'img/gallery/4.jpg', 'img/gallery/5.jpg', 'img/gallery/6.jpg'],
  2016: ['img/venue-gallery/1.jpg', 'img/venue-gallery/2.jpg', 'img/venue-gallery/3.jpg', 'img/venue-gallery/4.jpg', 'img/venue-gallery/5.jpg', 'img/venue-gallery/6.jpg'],
  2017: ['img/gallery/1.jpg', 'img/gallery/2.jpg', 'img/gallery/3.jpg', 'img/gallery/4.jpg', 'img/gallery/5.jpg', 'img/gallery/6.jpg'],
  2018: ['img/venue-gallery/1.jpg', 'img/venue-gallery/2.jpg', 'img/venue-gallery/3.jpg', 'img/venue-gallery/4.jpg', 'img/venue-gallery/5.jpg', 'img/venue-gallery/6.jpg'],
  2019: ['img/gallery/1.jpg', 'img/gallery/2.jpg', 'img/gallery/3.jpg', 'img/gallery/4.jpg', 'img/gallery/5.jpg', 'img/gallery/6.jpg'],
  2020: ['img/venue-gallery/1.jpg', 'img/venue-gallery/2.jpg', 'img/venue-gallery/3.jpg', 'img/venue-gallery/4.jpg', 'img/venue-gallery/5.jpg', 'img/venue-gallery/6.jpg'],
  2021: ['img/gallery/1.jpg', 'img/gallery/2.jpg', 'img/gallery/3.jpg', 'img/gallery/4.jpg', 'img/gallery/5.jpg', 'img/gallery/6.jpg'],
  2022: ['img/venue-gallery/1.jpg', 'img/venue-gallery/2.jpg', 'img/venue-gallery/3.jpg', 'img/venue-gallery/4.jpg', 'img/venue-gallery/5.jpg', 'img/venue-gallery/6.jpg'],
  2023: ['img/gallery/1.jpg', 'img/gallery/2.jpg', 'img/gallery/3.jpg', 'img/gallery/4.jpg', 'img/gallery/5.jpg', 'img/gallery/6.jpg'],
  2024: ['img/venue-gallery/1.jpg', 'img/venue-gallery/2.jpg', 'img/venue-gallery/3.jpg', 'img/venue-gallery/4.jpg', 'img/venue-gallery/5.jpg', 'img/venue-gallery/6.jpg'],
//  insert future years here in same format
}

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
 
dispImages(1970)

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
for(let y = 1970 ; y<=2024; y++){

  const option = document.createElement("option");
  option.value = y;
  option.textContent = y.toString();
  select.appendChild(option);
}

