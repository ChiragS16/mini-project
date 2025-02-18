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
  
  
  
    //  ==========================
   //next previous BUTTON for years
   
   //============================ 
  
  
   const yearDisplay = document.getElementById("year-display");
   const prevYear = document.getElementById("prev-year");
   const nextYear = document.getElementById("next-year");
   
   let currentYear = 2023;
   yearDisplay.textContent = currentYear;
   const minYear = 2011;
   const maxYear = 2023;
   let intervalId;
  
   const images = {
    
    2011: ['img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2011 Galna Killa/1.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2011 Galna Killa/2.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2011 Galna Killa/3.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2011 Galna Killa/4.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2011 Galna Killa/5.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2011 Galna Killa/6.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2011 Galna Killa/7.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2011 Galna Killa/8.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2011 Galna Killa/9.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2011 Galna Killa/10.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2011 Galna Killa/11.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2011 Galna Killa/13.JPG'],


    2012: ['img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2012 Vishal gad Pavankhind/1.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2012 Vishal gad Pavankhind/2.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2012 Vishal gad Pavankhind/3.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2012 Vishal gad Pavankhind/4.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2012 Vishal gad Pavankhind/5.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2012 Vishal gad Pavankhind/6.JPG','img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2012 Vishal gad Pavankhind/38.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2012 Vishal gad Pavankhind/32.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2012 Vishal gad Pavankhind/9.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2012 Vishal gad Pavankhind/41.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2012 Vishal gad Pavankhind/11.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2012 Vishal gad Pavankhind/24.JPG','img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2012 Vishal gad Pavankhind/36.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2012 Vishal gad Pavankhind/14.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2012 Vishal gad Pavankhind/31.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2012 Vishal gad Pavankhind/16.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2012 Vishal gad Pavankhind/17.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2012 Vishal gad Pavankhind/18.JPG','img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2012 Vishal gad Pavankhind/30.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2012 Vishal gad Pavankhind/20.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2012 Vishal gad Pavankhind/vertical 1.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2012 Vishal gad Pavankhind/vertical 2.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2012 Vishal gad Pavankhind/vertical 3.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2012 Vishal gad Pavankhind/vertical 4.JPG'],


    2013: ['img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2013 Loha Gad/1.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2013 Loha Gad/2.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2013 Loha Gad/3.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2013 Loha Gad/9.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2013 Loha Gad/12.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2013 Loha Gad/14.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2013 Loha Gad/15.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2013 Loha Gad/17.JPG','img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2013 Loha Gad/18.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2013 Loha Gad/19.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2013 Loha Gad/20.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2013 Loha Gad/21.JPG','img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2013 Loha Gad/22.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2013 Loha Gad/23.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2013 Loha Gad/24.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2013 Loha Gad/25.JPG','img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2013 Loha Gad/26.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2013 Loha Gad/28.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2013 Loha Gad/29.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2013 Loha Gad/30.JPG'],


    2014: ['img/EVENTS DETAIL/Gad Darshan/shivjayanti 2014 Mahipal Gad/1.JPG', 'img/EVENTS DETAIL/Gad Darshan/shivjayanti 2014 Mahipal Gad/2.JPG', 'img/EVENTS DETAIL/Gad Darshan/MAHILA GADDARSHAN 2014 Samangad/6.JPG', 'img/EVENTS DETAIL/Gad Darshan/shivjayanti 2014 Mahipal Gad/4.JPG', 'img/EVENTS DETAIL/Gad Darshan/shivjayanti 2014 Mahipal Gad/5.JPG', 'img/EVENTS DETAIL/Gad Darshan/shivjayanti 2014 Mahipal Gad/6.JPG','img/EVENTS DETAIL/Gad Darshan/shivjayanti 2014 Mahipal Gad/7.JPG', 'img/EVENTS DETAIL/Gad Darshan/MAHILA GADDARSHAN 2014 Samangad/2.JPG', 'img/EVENTS DETAIL/Gad Darshan/shivjayanti 2014 Mahipal Gad/9.JPG', 'img/EVENTS DETAIL/Gad Darshan/shivjayanti 2014 Mahipal Gad/10.JPG', 'img/EVENTS DETAIL/Gad Darshan/shivjayanti 2014 Mahipal Gad/11.JPG', 'img/EVENTS DETAIL/Gad Darshan/shivjayanti 2014 Mahipal Gad/12.JPG','img/EVENTS DETAIL/Gad Darshan/shivjayanti 2014 Mahipal Gad/13.JPG', 'img/EVENTS DETAIL/Gad Darshan/shivjayanti 2014 Mahipal Gad/14.JPG', 'img/EVENTS DETAIL/Gad Darshan/shivjayanti 2014 Mahipal Gad/15.JPG', 'img/EVENTS DETAIL/Gad Darshan/shivjayanti 2014 Mahipal Gad/16.JPG', 'img/EVENTS DETAIL/Gad Darshan/shivjayanti 2014 Mahipal Gad/17.JPG', 'img/EVENTS DETAIL/Gad Darshan/shivjayanti 2014 Mahipal Gad/18.JPG','img/EVENTS DETAIL/Gad Darshan/shivjayanti 2014 Mahipal Gad/19.JPG', 'img/EVENTS DETAIL/Gad Darshan/MAHILA GADDARSHAN 2014 Samangad/4.JPG'],
    //2015 mahila gadd darshan pictures 


    2015: [],
    //
    
    
    2016: ['img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2016 Rohida Killa/1.jpg', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2016 Rohida Killa/2.jpg', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2016 Rohida Killa/3.jpg', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2016 Rohida Killa/4.jpg', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2016 Rohida Killa/5.jpg', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2016 Rohida Killa/6.jpg','img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2016 Rohida Killa/7.jpg', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2016 Rohida Killa/8.jpg', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2016 Rohida Killa/9.jpg', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2016 Rohida Killa/10.jpg', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2016 Rohida Killa/11.jpg', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2016 Rohida Killa/12.jpg','img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2016 Rohida Killa/13.jpg', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2016 Rohida Killa/14.jpg', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2016 Rohida Killa/15.jpg', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2016 Rohida Killa/16.jpg', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2016 Rohida Killa/vertical 1.jpg', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2016 Rohida Killa/vertical 2.jpg','img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2016 Rohida Killa/vertical 3.jpg', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2016 Rohida Killa/vertical 4.jpg'],
    
    
    2017: ['img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2017 Rasal Gad, Pratap gad/1.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2017 Rasal Gad, Pratap gad/2.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2017 Rasal Gad, Pratap gad/3.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2017 Rasal Gad, Pratap gad/4.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2017 Rasal Gad, Pratap gad/5.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2017 Rasal Gad, Pratap gad/6.JPG','img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2017 Rasal Gad, Pratap gad/7.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2017 Rasal Gad, Pratap gad/8.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2017 Rasal Gad, Pratap gad/9.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2017 Rasal Gad, Pratap gad/10.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2017 Rasal Gad, Pratap gad/11.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2017 Rasal Gad, Pratap gad/12.JPG','img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2017 Rasal Gad, Pratap gad/13.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2017 Rasal Gad, Pratap gad/14.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2017 Rasal Gad, Pratap gad/15.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2017 Rasal Gad, Pratap gad/16.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2017 Rasal Gad, Pratap gad/17.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2017 Rasal Gad, Pratap gad/18.JPG','img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2017 Rasal Gad, Pratap gad/19.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2017 Rasal Gad, Pratap gad/20.JPG'],
    
    
    
    2018: ['img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2018 Kile Tunge/1.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2018 Kile Tunge/2.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2018 Kile Tunge/3.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2018 Kile Tunge/4.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2018 Kile Tunge/5.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2018 Kile Tunge/6.JPG','img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2018 Kile Tunge/7.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2018 Kile Tunge/8.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2018 Kile Tunge/9.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2018 Kile Tunge/10.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2018 Kile Tunge/11.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2018 Kile Tunge/12.JPG','img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2018 Kile Tunge/13.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2018 Kile Tunge/14.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2018 Kile Tunge/15.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2018 Kile Tunge/16.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2018 Kile Tunge/vertical 1.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2018 Kile Tunge/vertical 2.JPG','img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2018 Kile Tunge/vertical 3.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2018 Kile Tunge/vertical 4.JPG'], 
   
   
   
    2019: ['img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2019 Jinji/1.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2019 Jinji/2.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2019 Jinji/3.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2019 Jinji/4.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2019 Jinji/5.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2019 Jinji/6.JPG','img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2019 Jinji/7.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2019 Jinji/8.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2019 Jinji/9.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2019 Jinji/10.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2019 Jinji/11.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2019 Jinji/12.JPG','img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2019 Jinji/13.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2019 Jinji/14.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2019 Jinji/15.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2019 Jinji/16.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2019 Jinji/vertical 1.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2019 Jinji/vertical 2.JPG','img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2019 Jinji/vertical 3.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2019 Jinji/vertical 4.JPG'], 
    //lockdown no 2020 and 2021
    2020: ['img/EVENTS DETAIL/covid/1.jpg', 'img/EVENTS DETAIL/covid/2.jpg', 'img/EVENTS DETAIL/covid/3.jpg', 'img/EVENTS DETAIL/covid/4.jpg'],
    2021: ['img/EVENTS DETAIL/covid/1.jpg', 'img/EVENTS DETAIL/covid/2.jpg', 'img/EVENTS DETAIL/covid/3.jpg', 'img/EVENTS DETAIL/covid/4.jpg'],
    
    2022: ['img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2022 Delhi,Agra,Amrutsar/1.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2022 Delhi,Agra,Amrutsar/2.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2022 Delhi,Agra,Amrutsar/3.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2022 Delhi,Agra,Amrutsar/4.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2022 Delhi,Agra,Amrutsar/5.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2022 Delhi,Agra,Amrutsar/6.JPG','img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2022 Delhi,Agra,Amrutsar/7.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2022 Delhi,Agra,Amrutsar/8.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2022 Delhi,Agra,Amrutsar/9.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2022 Delhi,Agra,Amrutsar/10.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2022 Delhi,Agra,Amrutsar/11.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2022 Delhi,Agra,Amrutsar/12.JPG','img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2022 Delhi,Agra,Amrutsar/13.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2022 Delhi,Agra,Amrutsar/14.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2022 Delhi,Agra,Amrutsar/15.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2022 Delhi,Agra,Amrutsar/16.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2022 Delhi,Agra,Amrutsar/17.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2022 Delhi,Agra,Amrutsar/18.JPG','img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2022 Delhi,Agra,Amrutsar/19.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2022 Delhi,Agra,Amrutsar/20.JPG'],
    
    
    2023: ['img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2023 Trupati, Hyedrabad/1.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2023 Trupati, Hyedrabad/2.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2023 Trupati, Hyedrabad/3.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2023 Trupati, Hyedrabad/4.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2023 Trupati, Hyedrabad/5.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2023 Trupati, Hyedrabad/6.JPG','img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2023 Trupati, Hyedrabad/7.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2023 Trupati, Hyedrabad/8.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2023 Trupati, Hyedrabad/9.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2023 Trupati, Hyedrabad/10.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2023 Trupati, Hyedrabad/11.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2023 Trupati, Hyedrabad/12.JPG','img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2023 Trupati, Hyedrabad/13.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2023 Trupati, Hyedrabad/14.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2023 Trupati, Hyedrabad/15.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2023 Trupati, Hyedrabad/16.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2023 Trupati, Hyedrabad/17.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2023 Trupati, Hyedrabad/18.JPG','img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2023 Trupati, Hyedrabad/19.JPG', 'img/EVENTS DETAIL/Gad Darshan/Shivjayanti 2023 Trupati, Hyedrabad/20.JPG'],
    
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
  for(let y = 2023 ; y>=2011; y--){
  
    const option = document.createElement("option");
    option.value = y;
    option.textContent = y.toString();
    select.appendChild(option);
  }
  
  