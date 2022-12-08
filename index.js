const thumbnail_SteelBridge = document.getElementById('SteelBridge-proj');
const hiddenDesc_SteelBridge = document.getElementById('proj-info-SteelBridge');
const projDescPlaceholder = document.getElementById('proj-info-placeholder');
// const blank = document.getElementById('resume');

// Show hidden DIV on hover
thumbnail_SteelBridge.addEventListener('mouseover', function handleMouseOver() {
  hiddenDesc_SteelBridge.style.display = 'block';
  projDescPlaceholder.style.display = 'none';
  console.log("hello");
  // resume.style.display = 'none';

});

//  Hide DIV on mouse out
thumbnail_SteelBridge.addEventListener('mouseout', function handleMouseOut() {
  hiddenDesc_SteelBridge.style.display = 'none';
  projDescPlaceholder.style.display = 'block';
  // resume.style.display = 'inline-block';
});

//--------------------------------------------------------------------------

const thumbnail_subway = document.getElementById('subway-proj');
const hiddenDesc_subway = document.getElementById('proj-info-subway');
// const blank = document.getElementById('resume');

// Show hidden DIV on hover
thumbnail_subway.addEventListener('mouseover', function handleMouseOver() {
  hiddenDesc_subway.style.display = 'block';
  projDescPlaceholder.style.display = 'none';
  console.log("hello subway");
  // resume.style.display = 'none';

});

//  Hide DIV on mouse out
thumbnail_subway.addEventListener('mouseout', function handleMouseOut() {
  hiddenDesc_subway.style.display = 'none';
  projDescPlaceholder.style.display = 'block';
  // resume.style.display = 'inline-block';
});

//--------------------------------------------------------------------------

const thumbnail_concrete = document.getElementById('concrete-proj');
const hiddenDesc_concrete = document.getElementById('proj-info-concrete');
// const blank = document.getElementById('resume');

// Show hidden DIV on hover
thumbnail_concrete.addEventListener('mouseover', function handleMouseOver() {
  hiddenDesc_concrete.style.display = 'block';
  projDescPlaceholder.style.display = 'none';
  console.log("hello conc");
  // resume.style.display = 'none';

});

//  Hide DIV on mouse out
thumbnail_concrete.addEventListener('mouseout', function handleMouseOut() {
  hiddenDesc_concrete.style.display = 'none';
  projDescPlaceholder.style.display = 'block';
  // resume.style.display = 'inline-block';
});

//--------------------------------------------------------------------------

const thumbnail_dams = document.getElementById('dams-proj');
const hiddenDesc_dams = document.getElementById('proj-info-dams');
// const blank = document.getElementById('resume');

// Show hidden DIV on hover
thumbnail_dams.addEventListener('mouseover', function handleMouseOver() {
  hiddenDesc_dams.style.display = 'block';
  projDescPlaceholder.style.display = 'none';
  console.log("hello dam");
  // resume.style.display = 'none';

});

//  Hide DIV on mouse out
thumbnail_dams.addEventListener('mouseout', function handleMouseOut() {
  hiddenDesc_dams.style.display = 'none';
  projDescPlaceholder.style.display = 'block';
  // resume.style.display = 'inline-block';
});

//--------------------------------------------------------------------------


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
let slideIndex_Cornell = 1;
showCornellSlides(slideIndex_Cornell);

// Next/previous controls
function plusCornellSlides(n_cornell) {
  showCornellSlides(slideIndex_Cornell += n_cornell);
}

// Thumbnail image controls
function currentCornellSlide(n_cornell) {
  showCornellSlides(slideIndex_Cornell = n_cornell);
}

function showCornellSlides(n_cornell) {
  let i_cornell;
  let cornellslides = document.getElementsByClassName("myCornellSlides");
  let cornelldots = document.getElementsByClassName("cornelldot");
  if (n_cornell > cornellslides.length) {slideIndex_Cornell = 1}
  if (n_cornell < 1) {slideIndex_Cornell = cornellslides.length}
  for (i_cornell = 0; i_cornell < cornellslides.length; i_cornell++) {
    cornellslides[i_cornell].style.display = "none";
  }
  for (i_cornell = 0; i_cornell < cornelldots.length; i_cornell++) {
    cornelldots[i_cornell].className = cornelldots[i_cornell].className.replace(" active", "");
  }
  cornellslides[slideIndex_Cornell-1].style.display = "block";
  cornelldots[slideIndex_Cornell-1].className += " active";
}
//--------------------------------------------------------------------------
let slideIndex_Stuy = 1;
showStuySlides(slideIndex_Stuy);

// Next/previous controls
function plusStuySlides(n_stuy) {
  showStuySlides(slideIndex_Stuy += n_stuy);
}

// Thumbnail image controls
function currentStuySlide(n_stuy) {
  showStuySlides(slideIndex_Stuy = n_stuy);
}

function showStuySlides(n_stuy) {
  let i_stuy;
  let stuyslides = document.getElementsByClassName("myStuySlides");
  let stuydots = document.getElementsByClassName("stuydot");
  if (n_stuy > stuyslides.length) {slideIndex_Stuy = 1}
  if (n_stuy < 1) {slideIndex_Stuy = stuyslides.length}
  for (i_stuy = 0; i_stuy < stuyslides.length; i_stuy++) {
    stuyslides[i_stuy].style.display = "none";
  }
  for (i_stuy = 0; i_stuy < stuydots.length; i_stuy++) {
    stuydots[i_stuy].className = stuydots[i_stuy].className.replace(" active", "");
  }
  stuyslides[slideIndex_Stuy-1].style.display = "block";
  stuydots[slideIndex_Stuy-1].className += " active";
}

//--------------------------------------------------------------------------

// IMAGE ENLARGEMENT
