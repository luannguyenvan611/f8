function handleLoadMore() {
  const btnMoreShow = document.querySelector(".height-zoom");
  const btnMoreHide = document.querySelector(".height-small");
  const heightLoad = document.querySelector(".load-more");
  const isCheckBtn = document.querySelector(".load-btn");

  if (!heightLoad || !btnMoreHide || !btnMoreShow) return null;

  if (heightLoad.offsetHeight < 144) {
    isCheckBtn.style.display = "none";
  }

  btnMoreShow.addEventListener("click", () => {
    const parentMore = btnMoreShow.closest(".load-btn");

    parentMore.previousElementSibling.classList.remove("load-more");
    parentMore.classList.add("active");
  });

  btnMoreHide.addEventListener("click", () => {
    const parentMore = btnMoreHide.closest(".load-btn");

    parentMore.previousElementSibling.classList.add("load-more");
    parentMore.classList.remove("active");
  });
}

(() => {
  handleLoadMore();
})();
