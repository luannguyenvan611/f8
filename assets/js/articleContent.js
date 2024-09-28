// Create Product
function createItemList(cartItem, indexItem) {
  if (!cartItem) return null;

  const divItem = document.createElement("li");

  if (cartItem.listSub.length < 1) {
    divItem.classList.add("article-nav__item");
  } else {
    divItem.classList.add("accordion-item", "article-nav__item");
  }

  // Find template
  const templateItem =
    cartItem.listSub.length < 1
      ? `<div class="article-nav__cover"><a href="#${cartItem.idTitle}" class="article-nav__link special">
      ${cartItem.titleContent}
      </a></div>`
      : `
    <h2
      class="accordion-header article-nav__header"
      id="headingOne${indexItem}"
    >
      <button
        class="accordion-button article-nav__btn"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne${indexItem}"
        aria-expanded="true"
        aria-controls="collapseOne${indexItem}"
      ></button>
      <a href="#${cartItem.idTitle}" class="article-nav__link"
        >${cartItem.titleContent}</a>
    </h2>
    <div
          id="collapseOne${indexItem}"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne${indexItem}"
          data-bs-parent="#accordionArticle"
        >
          <div class="accordion-body">
            <div class="article-nav__sub">
            ${cartItem.listSub
              .map((itemSub) => {
                return `<div class="article-nav__line"><a href="#${itemSub.idSub}" class="article-nav__detail">
                     ${itemSub.titleContent}
                    </a></div>`;
              })
              .join("")}
            </div>
          </div>
        </div>`;

  divItem.innerHTML = templateItem;

  return divItem;
}

// Render List of localStorage
function readerCartList(cartList) {
  if (!Array.isArray(cartList) || cartList.length === 0) return null;

  const addProductList = document.querySelector(".article-nav__list");
  if (!addProductList) return;

  // Render List Item
  cartList.forEach((itemCart, index) => {
    const cartItemElement = createItemList(itemCart, index);
    if (cartItemElement !== null) addProductList.append(cartItemElement);
  });
}

(() => {
  const parentContent = document.querySelector(
    ".article-details__content"
  ).children;

  const listArticle = [];

  // Duyệt qua danh sách các phần tử
  for (var i = 0; i < parentContent.length; i++) {
    var element = parentContent[i];

    // Kiểm tra xem phần tử hiện tại có phải là phần tử h2 không
    if (element.tagName === "H2") {
      const currentInfoH2 = {
        titleContent: element.textContent,
        idTitle: `titleContent${i}`,
        listSub: [],
      };
      listArticle.push(currentInfoH2);
      console.log("🚀 ~ element:", element);
      element.setAttribute("id", `titleContent${i}`);
    }

    // Kiểm tra xem phần tử hiện tại có phải là phần tử h3
    if (element.tagName === "H3" && listArticle[listArticle.length - 1]) {
      listArticle[listArticle.length - 1] = {
        ...listArticle[listArticle.length - 1],
        listSub: [
          ...listArticle[listArticle.length - 1].listSub,
          { titleContent: element.textContent, idSub: `titleSub${i}` },
        ],
      };
      element.setAttribute("id", `titleSub${i}`);
    }
  }

  readerCartList(listArticle);

  document.addEventListener("DOMContentLoaded", function () {
    const anchorLinks = document.querySelectorAll("a");

    anchorLinks.forEach(function (anchorLink) {
      anchorLink.addEventListener("click", function (event) {
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          event.preventDefault(); // Ngăn chặn hành động mặc định khi click vào thẻ a

          const offset = 150; // Điều chỉnh offset ở đây (50 là một số ví dụ)
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset -  offset;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      });
    });
  });
})();
