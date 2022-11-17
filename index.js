const card_KimleyHorn = document.getElementById('experience-KimleyHorn');
const hiddenDiv_KimleyHorn = document.getElementById('hidden-div-KimleyHorn');

// ✅ Show hidden DIV on hover
card_KimleyHorn.addEventListener('mouseover', function handleMouseOver() {
  hiddenDiv_KimleyHorn.style.display = 'inline-block';

  // 👇️ if you used visibility property to hide div
  // hiddenDiv.style.visibility = 'visible';
});

// ✅ (optionally) Hide DIV on mouse out
card_KimleyHorn.addEventListener('mouseout', function handleMouseOut() {
  hiddenDiv_KimleyHorn.style.display = 'none';

  // 👇️ if you used visibility property to hide div
  // hiddenDiv.style.visibility = 'hidden';
});
