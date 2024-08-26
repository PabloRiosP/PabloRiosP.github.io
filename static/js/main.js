// Ajuste de la barra de navegación
document.getElementById("navbar-mobile-bars").onclick = () => {
  let element = document.getElementById("navbar");
  let style = window.getComputedStyle(element);
  let display = style.getPropertyValue("display");
  if (display == "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
};

// Corrección de posible error tras cambio de tamaño, en el que la barra desaparece.
window.addEventListener("resize", () => {
    let element = document.getElementById("navbar");
    if (window.innerWidth > 600) {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
});

// Manejo del tema claro y oscuro
document.getElementById("theme-btn").onclick = () => {
  const currentTheme = document.body.classList.toggle('dark-theme') ? 'dark' : 'light';
  document.getElementById("theme-icon").classList.toggle('fa-sun', currentTheme === 'dark');
  document.getElementById("theme-icon").classList.toggle('fa-moon', currentTheme === 'light');
  localStorage.setItem('theme', currentTheme);
}
