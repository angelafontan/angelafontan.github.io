(function () {
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;

  const html = document.documentElement;

  const saved = localStorage.getItem("skin") || "dark";

  apply(saved);
  toggle.checked = saved === "dirt";

  toggle.addEventListener("change", function () {
    const theme = this.checked ? "dirt" : "dark";
    localStorage.setItem("skin", theme);
    apply(theme);
  });

  function apply(theme) {
    html.classList.remove("skin-dark", "skin-dirt");
    html.classList.add("skin-" + theme);
  }
})();
