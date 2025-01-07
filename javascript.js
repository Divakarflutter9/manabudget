// JSON data for products
const productsData = {
  newDeals: [
    { title: "Men T-Shirt", price: 199, discount: "90%", img: "https://via.placeholder.com/150", link: "" },
    { title: "Men T-Shirt", price: 199, discount: "90%", img: "https://via.placeholder.com/150", link: "" },
    { title: "Men T-Shirt", price: 199, discount: "90%", img: "https://via.placeholder.com/150", link: "" },
    { title: "Men T-Shirt", price: 199, discount: "90%", img: "https://via.placeholder.com/150", link: "" },
    { title: "Men T-Shirt", price: 199, discount: "90%", img: "https://via.placeholder.com/150", link: "" },
    { title: "Men T-Shirt", price: 199, discount: "90%", img: "https://via.placeholder.com/150", link: "" },
    { title: "Men T-Shirt", price: 199, discount: "90%", img: "https://via.placeholder.com/150", link: "" },
    { title: "Men T-Shirt", price: 199, discount: "90%", img: "https://via.placeholder.com/150", link: "" },
    { title: "Men T-Shirt", price: 199, discount: "90%", img: "https://via.placeholder.com/150", link: "" },
    { title: "Men T-Shirt", price: 199, discount: "90%", img: "https://via.placeholder.com/150", link: "" },
  ],
  dailyDeals:[
    { title: "wMen T-Shirt", price: 199, discount: "90%", img: "https://via.placeholder.com/150", link: "" },
    { title: "eMen T-Shirt", price: 199, discount: "90%", img: "https://via.placeholder.com/150", link: "" },
    { title: "tMen T-Shirt", price: 199, discount: "90%", img: "https://via.placeholder.com/150", link: "" },
    { title: "kMen T-Shirt", price: 199, discount: "90%", img: "https://via.placeholder.com/150", link: "" },
    { title: "Men T-Shirt", price: 199, discount: "90%", img: "https://via.placeholder.com/150", link: "" },
    { title: "Men T-Shirt", price: 199, discount: "90%", img: "https://via.placeholder.com/150", link: "" },
    { title: "Men T-Shirt", price: 199, discount: "90%", img: "https://via.placeholder.com/150", link: "" },
    { title: "Men T-Shirt", price: 199, discount: "90%", img: "https://via.placeholder.com/150", link: "" },
    { title: "Men T-Shirt", price: 199, discount: "90%", img: "https://via.placeholder.com/150", link: "" },
    { title: "Men T-Shirt", price: 199, discount: "90%", img: "https://via.placeholder.com/150", link: "" },
  ],
  comboDeals: [
    {
        title: "Combo Deal 1",
        items: [
            { img: "https://via.placeholder.com/150", title: "Item 1", price: "$10", link: "#" },
            { img: "https://via.placeholder.com/150", title: "Item 2", price: "$20", link: "#" },
            { img: "https://via.placeholder.com/150", title: "Item 3", price: "$30", link: "#" },
            { img: "https://via.placeholder.com/150", title: "Item 4", price: "$40", link: "#" },
        ],
    },
    {
        title: "Combo Deal 2",
        items: [
            { img: "https://via.placeholder.com/150", title: "Item A", price: "$15", link: "#" },
            { img: "https://via.placeholder.com/150", title: "Item B", price: "$25", link: "#" },
            { img: "https://via.placeholder.com/150", title: "Item C", price: "$35", link: "#" },
            { img: "https://via.placeholder.com/150", title: "Item D", price: "$45", link: "#" },
        ],
    },
    {
        title: "Combo Deal 3",
        items: [
            { img: "https://via.placeholder.com/150", title: "Product X", price: "$12", link: "#" },
            { img: "https://via.placeholder.com/150", title: "Product Y", price: "$22", link: "#" },
            { img: "https://via.placeholder.com/150", title: "Product Z", price: "$32", link: "#" },
            { img: "https://via.placeholder.com/150", title: "Product W", price: "$42", link: "#" },
        ],
    },
],
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

  productsData.comboDeals.forEach((combo) => {
      const itemsHTML = combo.items
          .map(
              (item) => `
                  <div class="col-6 mb-3">
                      <div class="card">
                          <img src="${item.img}" alt="${item.title}" class="card-img-top">
                          <div class="card-body">
                              <h6 class="card-title">${item.title}</h6>
                              <p class="card-text">Price: ${item.price}</p>
                              <a href="${item.link}" class="btn btn-primary btn-sm" target="_blank">View Deal</a>
                          </div>
                      </div>
                  </div>`
          )
          .join("");

      const comboHTML = `
          <div class="col-12 col-md-4">
              <div class="card p-3 mb-4">
                  <h5 class="text-center">${combo.title}</h5>
                  <div class="row">${itemsHTML}</div>
              </div>
          </div>`;

      container.innerHTML += comboHTML;
  });
}

renderComboDeals();


// Call render functions to populate the sections
renderNewDeals();
