const toggleBtn = document.getElementById('modeToggle');
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      toggleBtn.textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
    });

    function showSection(id) {
  const sections = document.querySelectorAll('.section');
  const links = document.querySelectorAll('.sidebar a');

  sections.forEach(sec => {
    if (sec.id === id) {
      sec.style.display = "block";
      setTimeout(() => sec.classList.add("active"), 10);
    } else {
      sec.classList.remove("active");
      setTimeout(() => sec.style.display = "none", 500);
    }
  });

  // Highlight active link
  links.forEach(link => {
    if (link.getAttribute("href") === "#" + id) {
      link.classList.add("active-link");
    } else {
      link.classList.remove("active-link");
    }
  });

  // Update URL hash for navigation
  window.location.hash = id;
}
