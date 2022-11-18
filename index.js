const card_KimleyHorn = document.getElementById('experience-KimleyHorn');
const hiddenDiv_KimleyHorn = document.getElementById('hidden-div-KimleyHorn');
const resume = document.getElementById('resume');

// Show hidden DIV on hover
card_KimleyHorn.addEventListener('mouseover', function handleMouseOver() {
  hiddenDiv_KimleyHorn.style.display = 'inline-block';
  resume.style.display = 'none';

});

//  Hide DIV on mouse out
card_KimleyHorn.addEventListener('mouseout', function handleMouseOut() {
  hiddenDiv_KimleyHorn.style.display = 'none';
  resume.style.display = 'inline-block';
});

//--------------------------------------------------------------------------

const card_CUProjectTeams = document.getElementById('experience-CUProjectTeams');
const hiddenDiv_CUProjectTeams = document.getElementById('hidden-div-CUProjectTeams');

// Show hidden DIV on hover
card_CUProjectTeams.addEventListener('mouseover', function handleMouseOver() {
  hiddenDiv_CUProjectTeams.style.display = 'inline-block';
  resume.style.display = 'none';
});

//  Hide DIV on mouse out
card_CUProjectTeams.addEventListener('mouseout', function handleMouseOut() {
  hiddenDiv_CUProjectTeams.style.display = 'none';
  resume.style.display = 'inline-block';
});

//--------------------------------------------------------------------------

const card_ClarkConstruction = document.getElementById('experience-ClarkConstruction');
const hiddenDiv_ClarkConstruction = document.getElementById('hidden-div-ClarkConstruction');

// Show hidden DIV on hover
card_ClarkConstruction.addEventListener('mouseover', function handleMouseOver() {
  hiddenDiv_ClarkConstruction.style.display = 'inline-block';
  resume.style.display = 'none';
});

//  Hide DIV on mouse out
card_ClarkConstruction.addEventListener('mouseout', function handleMouseOut() {
  hiddenDiv_ClarkConstruction.style.display = 'none';
  resume.style.display = 'inline-block';
});

//--------------------------------------------------------------------------

const card_SteelBridge = document.getElementById('experience-SteelBridge');
const hiddenDiv_SteelBridge = document.getElementById('hidden-div-SteelBridge');

// Show hidden DIV on hover
card_SteelBridge.addEventListener('mouseover', function handleMouseOver() {
  hiddenDiv_SteelBridge.style.display = 'inline-block';
  resume.style.display = 'none';
});

//  Hide DIV on mouse out
card_SteelBridge.addEventListener('mouseout', function handleMouseOut() {
  hiddenDiv_SteelBridge.style.display = 'none';
  resume.style.display = 'inline-block';
});

//--------------------------------------------------------------------------

const card_Versed = document.getElementById('experience-Versed');
const hiddenDiv_Versed = document.getElementById('hidden-div-Versed');

// Show hidden DIV on hover
card_Versed.addEventListener('mouseover', function handleMouseOver() {
  hiddenDiv_Versed.style.display = 'inline-block';
  resume.style.display = 'none';
});

//  Hide DIV on mouse out
card_Versed.addEventListener('mouseout', function handleMouseOut() {
  hiddenDiv_Versed.style.display = 'none';
  resume.style.display = 'inline-block';
});


//--------------------------------------------------------------------------

const card_NYPL = document.getElementById('experience-NYPL');
const hiddenDiv_NYPL = document.getElementById('hidden-div-NYPL');

// Show hidden DIV on hover
card_NYPL.addEventListener('mouseover', function handleMouseOver() {
  hiddenDiv_NYPL.style.display = 'inline-block';
  resume.style.display = 'none';
});

//  Hide DIV on mouse out
card_NYPL.addEventListener('mouseout', function handleMouseOut() {
  hiddenDiv_NYPL.style.display = 'none';
  resume.style.display = 'inline-block';
});

//--------------------------------------------------------------------------
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
