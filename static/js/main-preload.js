// Aseguramos que el script se ejecute antes de que la página se renderice.
document.addEventListener("DOMContentLoaded", function () {
  const userPreference = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Si hay una preferencia guardada, usarla.
  if (userPreference) {
    document.body.classList.toggle("dark-theme", userPreference === "dark");
  } else {
    // Si no hay preferencia guardada, aplicar el tema según la preferencia del sistema.
    document.body.classList.toggle("dark-theme", prefersDark);
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
