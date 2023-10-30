const sections = document.querySelectorAll(".scroll-sections");
const scrollSpeed = 5;
let redirectionEnCours = false;
let lastScrollTop = window.scrollY;

// Options pour l'Intersection Observer
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.01,
};

// Créez un observer avec une fonction de rappel
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      redirectionEnCours = true;
      window.scrollTo({
        top: entry.target.offsetTop,
        behavior: "smooth",
      });
    } else {
      redirectionEnCours = false;
    }
  });
}, options);

// Ajoutez chaque section à l'observateur
sections.forEach((section) => {
  observer.observe(section);
});

window.addEventListener("scroll", () => {
  const currentScrollTop = window.scrollY;
  if (currentScrollTop > lastScrollTop) {
    // L'utilisateur fait défiler vers le bas
    lastScrollTop = currentScrollTop;
    if (redirectionEnCours) {
      window.scrollBy(0, scrollSpeed);
    }
  } else if (currentScrollTop < lastScrollTop) {
    // L'utilisateur fait défiler vers le haut
    lastScrollTop = currentScrollTop;
    if (redirectionEnCours) {
      window.scrollBy(0, -scrollSpeed);
    }
  }
});

// Function effect move 3d mockup
const svgElement1 = document.getElementById("3d-effect1");

// Sur un ordinateur de bureau, réagit au passage de la souris
svgElement1.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Calculez les rotations en fonction de la position de la souris
  const rotationX = (mouseY / window.innerHeight - 0.5) * 30;
  const rotationY = (mouseX / window.innerWidth - 0.5) * 30;

  // Appliquez les transformations CSS
  svgElement1.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
});

// Sur un appareil mobile, réagit au mouvement de l'appareil
if (window.DeviceMotionEvent) {
  window.addEventListener("devicemotion", (e) => {
    const accelerationX = e.accelerationIncludingGravity.x;
    const accelerationY = e.accelerationIncludingGravity.y;

    // Calculez les rotations en fonction de l'accélération de l'appareil
    const rotationX = (accelerationY / 9.81) * 30;
    const rotationY = (accelerationX / 9.81) * 30;

    // Appliquez les transformations CSS
    svgElement1.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
  });
}

const svgElement2 = document.getElementById("3d-effect2");

// Sur un ordinateur de bureau, réagit au passage de la souris
svgElement2.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Calculez les rotations en fonction de la position de la souris
  const rotationX = (mouseY / window.innerHeight - 0.5) * 30;
  const rotationY = (mouseX / window.innerWidth - 0.5) * 30;

  // Appliquez les transformations CSS
  svgElement2.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
});

// Sur un appareil mobile, réagit au mouvement de l'appareil
if (window.DeviceMotionEvent) {
  window.addEventListener("devicemotion", (e) => {
    const accelerationX = e.accelerationIncludingGravity.x;
    const accelerationY = e.accelerationIncludingGravity.y;

    // Calculez les rotations en fonction de l'accélération de l'appareil
    const rotationX = (accelerationY / 9.81) * 30;
    const rotationY = (accelerationX / 9.81) * 30;

    // Appliquez les transformations CSS
    svgElement2.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
  });
}