// Highlights the current page in the sticky navbar
(() => {
  const links = document.querySelectorAll("#floatingNavbar .nav-link");

  const fileFrom = (href) => {
    try {
      const u = new URL(href, location.origin);
      let file = u.pathname.split("/").pop().toLowerCase();
      if (!file || file === "/") file = "index.html";
      return file;
    } catch { return ""; }
  };

  const current = (() => {
    let file = location.pathname.split("/").pop().toLowerCase();
    if (!file || file === "/") file = "index.html";
    return file;
  })();

  links.forEach(a => {
    const target = fileFrom(a.getAttribute("href"));
    const isHome =
      (current === "index.html" && (target === "index.html" || target === "home.html"));
    if (target === current || isHome) {
      a.classList.add("active");
      a.setAttribute("aria-current", "page");
    } else {
      a.classList.remove("active");
      a.removeAttribute("aria-current");
    }
  });
})();
