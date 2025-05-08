document.addEventListener("DOMContentLoaded", () => {
    const headerPlaceholder = document.getElementById("header-placeholder");
    
    if (headerPlaceholder) {
      const headerContainer = document.createElement("div");
      headerContainer.className = "header-container";
      
      fetch("partials/header.html")
        .then(res => res.text())
        .then(html => {
          headerContainer.innerHTML += html;
          
          fetch("partials/navi.html")
            .then(res => res.text())
            .then(navHtml => {
              headerContainer.innerHTML += navHtml;
              headerPlaceholder.replaceWith(headerContainer);
              
              const currentPage = location.pathname.split("/").pop();
              document.querySelectorAll(".nav-links a").forEach(link => {
                if (link.getAttribute("href").includes(currentPage)) {
                  link.classList.add("active");
                }
              });
            });
        });
    }
  });