const swap = new Swup()

const navElement = document.querySelector(".nav");
const firstContent = document.querySelector(".content");

function appearWhenScroll() {
	if( firstContent.offsetTop <= (window.scrollY + navElement.offsetHeight) && appearWhenScroll.visibility){
		navElement.classList.add("hide-nav");
		appearWhenScroll.visibility = false;
	}
	else if( firstContent.offsetTop >= window.scrollY || window.scrollY < navElement.offsetHeight && !appearWhenScroll.visibility){
		navElement.classList.remove("hide-nav");
		appearWhenScroll.visibility = true;
	}
}
appearWhenScroll.visibility = true;

function throttle(fn, wait) {
  let time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
}

window.addEventListener("scroll", throttle(appearWhenScroll, 50));