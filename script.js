// Function to open media album when a card title is clicked
function openAlbum(cardType) {
  // Open the corresponding media album using Lightbox
  lightbox.option({
    'albumLabel': '', // Remove the "Image x of x" label
    'fadeDuration': 300, // Set fade in/out duration
    'wrapAround': true // Allow looping through images
  });
  // Trigger click event on the first image of the album
  document.getElementById(cardType + '-album-link').click();
}

// Function to open media album for hallucination
function openAlbumHallucination() {
  // Open the hallucination media album using Lightbox
  lightbox.option({
    'albumLabel': '', // Remove the "Image x of x" label
    'fadeDuration': 300, // Set fade in/out duration
    'wrapAround': true // Allow looping through images
  });
  // Trigger click event on the first image of the hallucination album
  document.getElementById('hallucination-album-link').click();
}

// Function to open media album for color blindness
function openAlbumColorBlindness() {
  // Open the color blindness media album using Lightbox
  lightbox.option({
    'albumLabel': '', // Remove the "Image x of x" label
    'fadeDuration': 300, // Set fade in/out duration
    'wrapAround': true // Allow looping through images
  });
  // Trigger click event on the first image of the color blindness album
  document.getElementById('color_blindness-album-link').click();
}

// Function to open media album for dyslexia
function openAlbumDyslexia() {
  // Open the dyslexia media album using Lightbox
  lightbox.option({
    'albumLabel': '', // Remove the "Image x of x" label
    'fadeDuration': 300, // Set fade in/out duration
    'wrapAround': true // Allow looping through images
  });
  // Trigger click event on the first image of the dyslexia album
  document.getElementById('dyslexia-album-link').click();
}