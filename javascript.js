// JSON data for products
const productsData = {
  newDeals: [
    { title: "Men T-Shirt", price: 199, discount: "90%", img: "images/product sh 1.jpg", link: "" },
    { title: "Men T-Shirt", price: 199, discount: "90%", img: "images/product p 1.jpg", link: "" },
    { title: "Men T-Shirt", price: 199, discount: "90%", img: "images/product s 2.jpg", link: "" },
    { title: "Men T-Shirt", price: 199, discount: "90%", img: "images/product p 2.jpg", link: "" },
    { title: "Men T-Shirt", price: 199, discount: "90%", img: "images/product s 3.jpg", link: "" },
    { title: "Men T-Shirt", price: 199, discount: "90%", img: "images/pro sh 5.jpg", link: "" },
    { title: "wMen T-Shirt", price: 199, discount: "90%", img: "images/pro sh 2.jpg", link: "" },
    { title: "eMen T-Shirt", price: 199, discount: "90%", img: "images/pro sh 5.jpg", link: "" },
    { title: "Men T-Shirt", price: 199, discount: "90%", img: "images/product s 4.jpg", link: "" },
  ],
  dailyDeals:[
    { title: "wMen T-Shirt", price: 199, discount: "90%", img: "images/pro sh 2.jpg", link: "" },
    { title: "eMen T-Shirt", price: 199, discount: "90%", img: "images/pro sh 5.jpg", link: "" },
    { title: "Men T-Shirt", price: 199, discount: "90%", img: "images/product p 2.jpg", link: "" },
    { title: "Men T-Shirt", price: 199, discount: "90%", img: "images/product s 3.jpg", link: "" },
    { title: "tMen T-Shirt", price: 199, discount: "90%", img: "images/pro sh 6.jpg", link: "" },
    { title: "kMen T-Shirt", price: 199, discount: "90%", img: "images/pro sh 7.jpg", link: "" },
    { title: "Men T-Shirt", price: 199, discount: "90%", img: "images/pro sh 8.jpg", link: "" },
  ],
  electrodeals:[
    { title: "wMen T-Shirt", price: 199, discount: "90%", img: "images/product e 1.jpg", link: "" },
  ],
  // comboDeals: [
  //   {
  //     title: "Combo Pack",
  //     price: 199,
  //     discount: "90%",
  //     mainImg: "https://via.placeholder.com/350",
  //     items: [
  //       { title: "Item 1", price: 50, img: "https://via.placeholder.com/150", link: "" },
  //       { title: "Item 2", price: 50, img: "https://via.placeholder.com/150", link: "" },
  //       { title: "Item 3", price: 50, img: "https://via.placeholder.com/150", link: "" },
  //       { title: "Item 4", price: 50, img: "https://via.placeholder.com/150", link: "" },
  //     ],
  //   },
  //   {
  //     title: "Combo Pack",
  //     price: 199,
  //     discount: "90%",
  //     mainImg: "https://via.placeholder.com/350",
  //     items: [
  //       { title: "Item 1", price: 50, img: "https://via.placeholder.com/150", link: "" },
  //       { title: "Item 2", price: 50, img: "https://via.placeholder.com/150", link: "" },
  //       { title: "Item 3", price: 50, img: "https://via.placeholder.com/150", link: "" },
  //       { title: "Item 4", price: 50, img: "https://via.placeholder.com/150", link: "" },
  //     ],
  //   },
  //   {
  //     title: "Combo Pack",
  //     price: 199,
  //     discount: "90%",
  //     mainImg: "https://via.placeholder.com/350",
  //     items: [
  //       { title: "Item 1", price: 50, img: "https://via.placeholder.com/150", link: "" },
  //       { title: "Item 2", price: 50, img: "https://via.placeholder.com/150", link: "" },
  //       { title: "Item 3", price: 50, img: "https://via.placeholder.com/150", link: "" },
  //       { title: "Item 4", price: 50, img: "https://via.placeholder.com/150", link: "" },
  //     ],
  //   },
  // ],
};

// Function to generate new deals section
function renderNewDeals() {
  const container = document.getElementById("new-deals-container");
  productsData.newDeals.forEach((deal) => {
    const dealHTML = `
      <div class="col-lg-2 col-md-4 col-sm-6">
        <div class="card deal-card">
          <img src="${deal.img}" class="card-img-top" alt="${deal.title}">
          <div class="card-body">
            <h5 class="card-title">${deal.title}</h5>
            <p class="card-text"><strong>Price:</strong> ${deal.price}</p>
            <p class="card-text text-success">${deal.discount}</p>
            <a href="${deal.link}" class="btn btn-primary" target="_blank">View Deal</a>
          </div>
        </div>
      </div>`;
    container.innerHTML += dealHTML;
  });
}

function renderelectroDeals() {
  const container = document.getElementById("electronics-container");
  productsData.electrodeals.forEach((deal) => {
    const dealHTML = `
      <div class="col-lg-2 col-md-4 col-sm-6">
        <div class="card deal-card">
          <img src="${deal.img}" class="card-img-top" alt="${deal.title}">
          <div class="card-body">
            <h5 class="card-title">${deal.title}</h5>
            <p class="card-text"><strong>Price:</strong> ${deal.price}</p>
            <p class="card-text text-success">${deal.discount}</p>
            <a href="${deal.link}" class="btn btn-primary" target="_blank">View Deal</a>
          </div>
        </div>
      </div>`;
    container.innerHTML += dealHTML;
  });
}

renderelectroDeals();

// Function to generate daily deals section
function renderDailyDeals() {
  const container = document.getElementById("daily-deals-container");
  productsData.dailyDeals.forEach((deal) => {
    const dealHTML = `
      <div class="col-lg-2 col-md-4 col-sm-6">
        <div class="card deal-card">
          <img src="${deal.img}" class="card-img-top" alt="${deal.title}">
          <div class="card-body">
            <h5 class="card-title">${deal.title}</h5>
            <p class="card-text"><strong>Price:</strong> ${deal.price}</p>
            <p class="card-text text-success">${deal.discount}</p>
            <a href="${deal.link}" class="btn btn-primary" target="_blank">View Deal</a>
          </div>
        </div>
      </div>`;
    container.innerHTML += dealHTML;
  });
}

// Ensure to call the function after defining it
document.addEventListener("DOMContentLoaded", () => {
  renderDailyDeals();
});


// Function to generate combo deals section
function renderComboDeals() {
  const container = document.getElementById("combo-deals-container");

  productsData.comboDeals.forEach((combo, index) => {
      const itemsHTML = combo.items
          .map(
              (item) => `
                  <div class="mini-card">
                      <img src="${item.img}" alt="${item.title}">
                      <p>${item.title}</p>
                      <p>Price: ${item.price}</p>
                      <a href="${item.link}" class="btn btn-primary" target="_blank">View Deal</a>
                  </div>`
          )
          .join("");

      const comboHTML = `
          <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card deal-card-combo" id="deal-card-${index}">
                  <img src="${combo.mainImg}" class="card-img-top" alt="${combo.title}">
                  <div class="card-body main-card">
                      <h5 class="card-title">${combo.title}</h5>
                      <p class="card-text"><strong>Price:</strong> ${combo.price}</p>
                      <p class="card-text text-success">${combo.discount} Off</p>
                  </div>
                  <div class="mini-cards-container" id="mini-cards-${index}">
                      ${itemsHTML}
                  </div>
              </div>
          </div>`;

      container.innerHTML += comboHTML;

      const mainCard = document.querySelector(`#deal-card-${index} .main-card`);
      const miniCardsContainer = document.querySelector(`#mini-cards-${index}`);

      mainCard.addEventListener("click", () => {
          miniCardsContainer.classList.toggle("active");
      });
  });
}



// Call render functions to populate the sections
renderNewDeals();
renderComboDeals();
