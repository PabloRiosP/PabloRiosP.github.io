// Aseguramos que el script se ejecute antes de que la página se renderice.
document.addEventListener("DOMContentLoaded", function () {
  const userPreference = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const themeIcon = document.getElementById("theme-icon");

  function toggleTheme(isDark) {
    document.body.classList.toggle("dark-theme", isDark);
    themeIcon.classList.toggle("fa-sun", isDark);
    themeIcon.classList.toggle("fa-moon", !isDark);
  }

  if (userPreference) {
    toggleTheme(userPreference === "dark");
  } else {
    toggleTheme(prefersDark);
  }

  // Monitorizar cambios en la preferencia del sistema y actualizar en tiempo real.
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        // Solo si no hay preferencia guardada
        document.body.classList.toggle("dark-theme", e.matches);
      }
    });
});
