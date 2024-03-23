// Function to open the modal and load media for a specific card type
function openAlbum(cardType) {
  openModal(cardType);
}

// Open the Modal for a specific card type
function openModal(cardType) {
  document.getElementById("myModal").style.display = "block";
  var images = getImages(cardType); // Retrieve images for the specific card type
  addImagesToModal(images);
  slideIndex = 1; // Reset slide index
  showSlides(slideIndex); // Show the first slide
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;

// Function to dynamically add images to the modal
function addImagesToModal(images) {
  var modalContent = document.getElementById("modal-content");
  modalContent.innerHTML = ""; // Clear existing content
  images.forEach(function(imageUrl) {
    var slide = document.createElement("div");
    slide.className = "mySlides";
    var img = document.createElement("img");
    img.src = imageUrl;
    img.style.width = "100%";
    slide.appendChild(img);
    modalContent.appendChild(slide);
  });
}

/// Function to get images for a specific card type
function getImages(cardType) {
  var images = [];
  // Define the maximum number of media files available for each card type
  var maxMedia = {
    hallucination: 5,
    color_blindness: 7,
    dyslexia: 6
  };

  // Generate image filenames based on the card type and the maximum number of media files
  for (var i = 1; i <= maxMedia[cardType]; i++) {
    images.push(`${cardType}_media${i}.jpg`);
  }

  return images;
}

// Function to show slides
function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  if (slides.length === 0) return; // No slides to show
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// Function to navigate to the previous or next slide within the modal
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}