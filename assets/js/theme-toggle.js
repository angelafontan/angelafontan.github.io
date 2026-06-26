(function () {
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;

  const body = document.body;

  // Load saved state
  const saved = localStorage.getItem("theme-toggle");

  if (saved === "on") {
    toggle.checked = true;
    body.classList.add("toggle-on");
  }

  toggle.addEventListener("change", function () {
    if (this.checked) {
      body.classList.add("toggle-on");
      localStorage.setItem("theme-toggle", "on");
    } else {
      body.classList.remove("toggle-on");
      localStorage.setItem("theme-toggle", "off");
    }
  });
})();
