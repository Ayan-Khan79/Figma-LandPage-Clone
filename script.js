document.addEventListener('DOMContentLoaded', function() {
    // Video Functionality
    const video = document.getElementById('promo-video');
    const playIcon = document.getElementById('play-icon');
    if (video.paused) {
      playIcon.style.display = 'block';
    }
  
    // Click event for video and play button
    function toggleVideo() {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  
    // Add event listeners
    video.addEventListener('click', toggleVideo);
    playIcon.addEventListener('click', (e) => {
      e.stopPropagation();
      video.play();
    });
  
    // Show play button when video ends
    video.addEventListener('pause', () => {
      playIcon.style.display = 'block';
    });
    video.addEventListener('play', () => {
      playIcon.style.display = 'none';
    });
  
    // Custom Testimonial Slider Implementation - No jQuery
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.testimonial-dots .dot');
    let currentSlide = 0;
    let slideInterval;
  
    // Function to show a specific slide
    function showSlide(index) {
      // Hide all slides
      for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
      }
  
      // Remove active class from all dots
      for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
      }
  
      // Show the selected slide and activate corresponding dot
      slides[index].classList.add('active');
      dots[index].classList.add('active');
  
      // Update current slide index
      currentSlide = index;
    }
  
    // Function to move to the next slide
    function nextSlide() {
      let next = currentSlide + 1;
      if (next >= slides.length) {
        next = 0;
      }
      showSlide(next);
    }
  
    // Start automatic sliding
    function startSlideShow() {
      // Clear any existing interval first
      if (slideInterval) {
        clearInterval(slideInterval);
      }
      slideInterval = setInterval(nextSlide, 5000);
    }
  
    // Pause slideshow on mouse hover
    const sliderContainer = document.querySelector('.testimonial-slider');
    if (sliderContainer) {
      sliderContainer.addEventListener('mouseenter', function() {
        clearInterval(slideInterval);
      });
  
      // Resume slideshow when mouse leaves
      sliderContainer.addEventListener('mouseleave', function() {
        startSlideShow();
      });
    }
  
    // Add click event to dots
    for (let i = 0; i < dots.length; i++) {
      dots[i].addEventListener('click', function() {
        clearInterval(slideInterval);
        showSlide(i);
        startSlideShow();
      });
    }
  
    // Initialize the slideshow
    showSlide(0);
    startSlideShow();
  
    // Contact Form and Modal Functionality
    const contactForm = document.getElementById('contact-form');
    const successModal = document.getElementById('success-modal');
    const closeModal = document.querySelector('.close-modal');
  
    // Form submission
    if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
  
        // Show success modal
        successModal.style.display = 'block';
  
        // Prevent body scrolling
        document.body.classList.add('body-no-scroll');
  
        // Reset form
        contactForm.reset();
      });
    }
  
    // Close modal on X click
    if (closeModal) {
      closeModal.addEventListener('click', function() {
        successModal.style.display = 'none';
        document.body.classList.remove('body-no-scroll');
      });
    }
  
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === successModal) {
        successModal.style.display = 'none';
        document.body.classList.remove('body-no-scroll');
      }
    });
  
    // Subscribe Form
    const subscribeForm = document.querySelector('.subscribe-form');
  
    if (subscribeForm) {
      subscribeForm.addEventListener('submit', function(event) {
        event.preventDefault();
  
        // Show success modal
        successModal.style.display = 'block';
  
        // Prevent body scrolling
        document.body.classList.add('body-no-scroll');
  
        // Reset form
        subscribeForm.reset();
      });
    }
  
    // Keyboard accessibility for modal
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && successModal.style.display === 'block') {
        successModal.style.display = 'none';
        document.body.classList.remove('body-no-scroll');
      }
    });
  
    // Hamburger Menu
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
  
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  
    // Scroll Event for Active Link Highlighting
    document.addEventListener('scroll', function() {
      const sections = document.querySelectorAll('section');
      const links = document.querySelectorAll('.nav-links a');
  
      let current = '';
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
  
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id');
        }
      });
  
      links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
          link.classList.add('active');
        }
      });
    });
  });
  