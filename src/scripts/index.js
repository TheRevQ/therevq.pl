gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll('.section');

sections.forEach(section => {
  gsap.fromTo(section.children, {y: '+=100', opacity: 0}, {y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'easeInOut', scrollTrigger: {
  trigger: section,
  start: 'top 80%',
}});  
});

const contact = document.getElementById('contact');

const button = document.querySelector(".header__button");
button.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'auto'
    });
    const rect = contact.getBoundingClientRect();
    window.scrollTo({
        top: rect.top,
        behavior: 'smooth'
    });
})

document.querySelector("form").addEventListener("submit", handleSubmit);
const handleSubmit = (e) => {
  e.preventDefault()
  let myForm = document.getElementById('pizzaOrder');
  let formData = new FormData(myForm)
  fetch('/', {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  }).then(() => console.log('Form successfully submitted')).catch((error) =>
    alert(error))
}
