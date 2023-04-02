let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 8000); // Change image every 4 seconds
}

function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}
console.log('Width:  ' +  getWidth() );

// When we click an image in the gallery, run galleryToggly()
//const galleryImages = document.querySelectorAll('.galleryImage');

// 
//function galleryToggle() {
//  let individualGallery = document.//getElementsByClassName("selectedImage");
//  
//  //let galleryImage = document.//getElementsByClassName("galleryImage");
//
//  individualGallery.classList.remove("hidden");
//}

// Get all the images in the gallery
const galleryImages = document.querySelectorAll('.galleryImage');
console.log(galleryImages);

// Add an event listener to each image
galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    // Hide all image sections
    document.querySelectorAll('.selectedImage').forEach(section => {
      section.style.display = 'none';
    });

    let slideshow = document.querySelector(".slideshow");
    slideshow.classList.add("hidden");

    // Show the clicked image's section
    document.querySelector(`#${image.dataset.section}`).style.display = 'flex';
  });
});

// Add an event listener to the document to hide all image sections when clicked outside of them
document.addEventListener('click', () => {
  document.querySelectorAll('.image-section').forEach(section => {
    section.style.display = 'none';
  }); 
});