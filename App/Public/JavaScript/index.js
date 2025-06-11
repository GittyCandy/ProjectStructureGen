const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu_bar');
const closeBtn = document.querySelector('#close_btn');
const themeToggler = document.querySelector('.theme-toggler');
const sidebarLinks = document.querySelectorAll('.sidebar a'); // Select all sidebar links

menuBtn.addEventListener('click', () => {
  sideMenu.style.display = "block";
});

closeBtn.addEventListener('click', () => {
  sideMenu.style.display = "none";
});

const themeInput = document.getElementById('input');
themeInput.addEventListener('change', () => {
  document.body.classList.toggle('dark-theme-variables', themeInput.checked);
});

// Sidebar active link toggling
sidebarLinks.forEach(link => {
  link.addEventListener('click', () => {
    sidebarLinks.forEach(link => link.classList.remove('active'));
    link.classList.add('active');
  });

  // Optional: animate icon on hover
  link.addEventListener("mouseenter", () => {
    const icon = link.querySelector(".icon");
    if (icon) {
      icon.setAttribute("trigger", "in");
    }
  });
});
