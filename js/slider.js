let items = document.querySelectorAll('.event-slider .list .item');
    let thumbnails = document.querySelectorAll('.thumbnail .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');

    let totalItems = items.length;
    let currentItem = 0; // Start from the first image

    // Function to show the current slider
    function showSlider() {
        items.forEach((item, index) => {
            if (index === currentItem) {
                item.classList.add('active');
                thumbnails[index].classList.add('active');
            } else {
                item.classList.remove('active');
                thumbnails[index].classList.remove('active');
            }
        });
    }

    // Event listener for next button
    next.addEventListener('click', function() {
        currentItem = (currentItem + 1) % totalItems;
        showSlider();
    });

    // Event listener for previous button
    prev.addEventListener('click', function() {
        currentItem = (currentItem - 1 + totalItems) % totalItems;
        showSlider();
    });

    // Automatic slide functionality
    let autoSlide = setInterval(function() {
        currentItem = (currentItem + 1) % totalItems;
        showSlider();
    }, 5000);

    // Stop automatic slide on button click
    [next, prev].forEach(button => {
        button.addEventListener('click', function() {
            clearInterval(autoSlide);
            autoSlide = setInterval(function() {
                currentItem = (currentItem + 1) % totalItems;
                showSlider();
            }, 5000);
        });
    });

    // Show the initial slider
    showSlider();

   
  
  // <!-- upcoming events end  -->