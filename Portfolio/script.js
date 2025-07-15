// Reveal sections on scroll
const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
  for (let item of reveals) {
    const top = item.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      item.classList.add('visible');
    }
  }
});

// Dark mode toggle
function toggleTheme() {
  document.body.classList.toggle('dark');
}

// Contact form handler
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  alert(`Thank you, ${form.name.value}! Your message was sent.`);
  form.reset();
}
