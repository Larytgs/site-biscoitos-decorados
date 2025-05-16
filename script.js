const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

window.addEventListener("load", () => {
  const fill = document.querySelector(".progress-fill");
  const content = document.getElementById("content");
  const preloader = document.getElementById("preloader");

  let progress = 0;
  const interval = setInterval(() => {
    progress += 1;
    fill.style.width = progress + "%";

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        preloader.style.display = "none";
        content.style.display = "block";
      }, 300); // pequeno delay para suavidade
    }
  }, 15); // velocidade da animação
});
