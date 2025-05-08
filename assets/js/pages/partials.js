document.addEventListener("DOMContentLoaded", () => {
   
    fetch('partials/header.html')
      .then(res => res.text())
      .then(data => {
        document.getElementById("header").innerHTML = data;
      })
      .catch(err => console.error("Failed to load header:", err));
  

    fetch('partials/footer.html')
      .then(res => res.text())
      .then(data => {
        document.getElementById("footer").innerHTML = data;
      }) 
      .catch(err => console.error("Failed to load footer:", err));  
  });