function openModal(id){
  var modal = document.getElementById(id);
  var body = document.body;

  // stopping body content from scrolling under the opened modal window
  body.style.overflow = "hidden"
  modal.style.display = "block";

  document.onkeydown = function(event){
  	if (event.keyCode == 27){
      modal.style.display = "none";
      body.style.overflow = "auto"
  	}
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      body.style.overflow = "auto"
    }
  }
}

function resizeHeaderOnScroll() {
  // makes header smaller when scrolled down
  const distanceY = window.pageYOffset || document.documentElement.scrollTop,
  shrinkOn = 50,
  headerEl = document.getElementById('headbar');

  if (distanceY > shrinkOn) {
    headerEl.classList.add("smaller");
  } else {
    headerEl.classList.remove("smaller");
  }
}

window.addEventListener('scroll', resizeHeaderOnScroll);
