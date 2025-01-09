// JSON data for products
const productsData = {
  newDeals: [
    { title: "Men T-Shirt", price: 199, discount: "90%", img: "images/product sh 1.jpg", link: "" },
    { title: "Men T-Shirt", price: 199, discount: "90%", img: "images/product p 1.jpg", link: "" },
    { title: "Men T-Shirt", price: 199, discount: "90%", img: "images/product s 2.jpg", link: "" },
    // { title: "Men T-Shirt", price: 199, discount: "90%", img: "images/product p 2.jpg", link: "" },
    // { title: "Men T-Shirt", price: 199, discount: "90%", img: "images/product s 3.jpg", link: "" },
    // { title: "Men T-Shirt", price: 199, discount: "90%", img: "images/pro sh 5.jpg", link: "" },
    // { title: "wMen T-Shirt", price: 199, discount: "90%", img: "images/pro sh 2.jpg", link: "" },
    // { title: "eMen T-Shirt", price: 199, discount: "90%", img: "images/pro sh 5.jpg", link: "" },
    // { title: "Men T-Shirt", price: 199, discount: "90%", img: "images/product s 4.jpg", link: "" },
  ],
  dailyDeals:[
    { title: "wMen T-Shirt", price: 199, discount: "90%", img: "images/pro sh 2.jpg", link: "" },
    { title: "eMen T-Shirt", price: 199, discount: "90%", img: "images/pro sh 5.jpg", link: "" },
    { title: "Men T-Shirt", price: 199, discount: "90%", img: "images/product p 2.jpg", link: "" },
    // { title: "Men T-Shirt", price: 199, discount: "90%", img: "images/product s 3.jpg", link: "" },
    // { title: "tMen T-Shirt", price: 199, discount: "90%", img: "images/pro sh 6.jpg", link: "" },
    // { title: "kMen T-Shirt", price: 199, discount: "90%", img: "images/pro sh 7.jpg", link: "" },
    // { title: "Men T-Shirt", price: 199, discount: "90%", img: "images/pro sh 8.jpg", link: "" },
  ],
  electrodeals:[
    { title: "wMen T-Shirt", price: 199, discount: "90%", img: "images/product e 1.jpg", link: "" },
  ],
  comboDeals: [
    {
      title: "Combo Pack",
      items: [
        { title: "eMen T-Shirt", price: 199, discount: "90%", img: "images/pro sh 5.jpg", link: "" },
        { title: "eMen T-Shirt", price: 199, discount: "90%", img: "images/pro sh 5.jpg", link: "" },
        { title: "eMen T-Shirt", price: 199, discount: "90%", img: "images/pro sh 5.jpg", link: "" },
        { title: "eMen T-Shirt", price: 199, discount: "90%", img: "images/pro sh 5.jpg", link: "" },
      ],
    },
    {
      title: "Combo Pack",
      items: [
        { title: "eMen T-Shirt", price: 199, discount: "90%", img: "images/pro sh 5.jpg", link: "" },
        { title: "eMen T-Shirt", price: 199, discount: "90%", img: "images/pro sh 5.jpg", link: "" },
        { title: "eMen T-Shirt", price: 199, discount: "90%", img: "images/pro sh 5.jpg", link: "" },
        { title: "eMen T-Shirt", price: 199, discount: "90%", img: "images/pro sh 5.jpg", link: "" },
      ],
    },
    {
      title: "Combo Pack",
      items: [
        { title: "eMen T-Shirt", price: 199, discount: "90%", img: "images/pro sh 5.jpg", link: "" },
        { title: "eMen T-Shirt", price: 199, discount: "90%", img: "images/pro sh 5.jpg", link: "" },
        { title: "eMen T-Shirt", price: 199, discount: "90%", img: "images/pro sh 5.jpg", link: "" },
        { title: "eMen T-Shirt", price: 199, discount: "90%", img: "images/pro sh 5.jpg", link: "" },
      ],
    },

  //   {
  //     title: "Combo Pack",
  //     items: [
  //       { title: "Item 1", price: 50, img: "https://via.placeholder.com/150", link: "" },
  //       { title: "Item 2", price: 50, img: "https://via.placeholder.com/150", link: "" },
  //       { title: "Item 3", price: 50, img: "https://via.placeholder.com/150", link: "" },
  //       { title: "Item 4", price: 50, img: "https://via.placeholder.com/150", link: "" },
  //     ],
  //   },
  //   {
  //     title: "Combo Pack",
  //     items: [
  //       { title: "Item 1", price: 50, img: "https://via.placeholder.com/150", link: "" },
  //       { title: "Item 2", price: 50, img: "https://via.placeholder.com/150", link: "" },
  //       { title: "Item 3", price: 50, img: "https://via.placeholder.com/150", link: "" },
  //       { title: "Item 4", price: 50, img: "https://via.placeholder.com/150", link: "" },
  //     ],
  //   },
  ],
};

// Function to generate new deals section
function renderNewDeals() {
  const container = document.getElementById("new-deals-container");
  productsData.newDeals.forEach((deal) => {
      const dealHTML = `
          <div class="col">
              <div class="card deal-card ncard">
                  <img src="${deal.img}" class="card-img-top img-fluid" alt="${deal.title}">
                  <div class="card-body">
                      <h5 class="card-title">${deal.title}</h5>
                      <p class="card-text"><strong>Price:</strong> ${deal.price}</p>
                      <p class="card-text text-success">${deal.discount}</p>
                      <a href="${deal.link}" class="btn nbutton" target="_blank">View Deal<i class="bi bi-cart"></i></a>
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
        <div class="col">
              <div class="card deal-card ncard">
                  <img src="${deal.img}" class="card-img-top img-fluid" alt="${deal.title}">
                  <div class="card-body">
                      <h5 class="card-title">${deal.title}</h5>
                      <p class="card-text"><strong>Price:</strong> ${deal.price}</p>
                      <p class="card-text text-success">${deal.discount}</p>
                      <a href="${deal.link}" class="btn nbutton" target="_blank">View Deal<i class="bi bi-cart"></i></a>
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
        <div class="col">
              <div class="card deal-card ncard">
                  <img src="${deal.img}" class="card-img-top img-fluid" alt="${deal.title}">
                  <div class="card-body">
                      <h5 class="card-title">${deal.title}</h5>
                      <p class="card-text"><strong>Price:</strong> ${deal.price}</p>
                      <p class="card-text text-success">${deal.discount}</p>
                      <a href="${deal.link}" class="btn nbutton" target="_blank">View Deal<i class="bi bi-cart"></i></a>
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

let currentlyPlaying = null; // Store reference to the currently playing video

  // Functionality for each video
  document.querySelectorAll('.reel-container').forEach((container) => {
    const video = container.querySelector('.reel-video');
    const button = container.querySelector('.view-deal-btn');
    const pauseBtn = container.querySelector('.pause-btn');
    const caption = container.querySelector('.caption');

    video.addEventListener('click', () => {
      // Pause currently playing video if any
      if (currentlyPlaying && currentlyPlaying !== video) {
        currentlyPlaying.pause();
        const currentButton = currentlyPlaying.closest('.reel-container').querySelector('.view-deal-btn');
        currentButton.style.display = 'none';
        const currentPauseBtn = currentlyPlaying.closest('.reel-container').querySelector('.pause-btn');
        currentPauseBtn.style.display = 'none';
        const currentCaption = currentlyPlaying.closest('.reel-container').querySelector('.caption');
        currentCaption.style.display = 'block'; // Show caption when video is paused
      }

      // Play the clicked video and unmute
      video.muted = false;
      video.play();
      currentlyPlaying = video; // Update the reference of the currently playing video

      // Hide the caption, display the "View Deal" button and pause button
      caption.style.display = 'none';
      button.style.display = 'block';
      pauseBtn.style.display = 'block';
    });

    // Pause button functionality
    pauseBtn.addEventListener('click', () => {
      video.pause(); // Pause the video
      button.style.display = 'none'; // Hide the View Deal button
      pauseBtn.style.display = 'none'; // Hide the pause button
      caption.style.display = 'block'; // Show the caption again
    });

    // Handle button click (View Deal)
    button.addEventListener('click', () => {
      window.open('https://www.example.com', '_blank'); // Replace with your deal link
    });
  });


// Function to generate combo deals section
function renderComboDeals() {
  const container = document.getElementById("combo-deals-container");

  productsData.comboDeals.forEach((combo, index) => {
    // Generate HTML for the 2 mini-cards inside each container (2 per row)
    const cardsHTML = combo.items
      .map(
        (item) => `
          <div class="col">
              <div class="card deal-card ncard">
                  <img src="${item.img}" class="card-img-top img-fluid" alt="${item.title}">
                  <div class="card-body">
                      <h5 class="card-title">${item.title}</h5>
                      <p class="card-text"><strong>Price:</strong> ${item.price}</p>
                      <p class="card-text text-success">${item.discount}</p>
                      <a href="${item.link}" class="btn nbutton" target="_blank">View Deal<i class="bi bi-cart"></i></a>
                  </div>
              </div>
          </div>`
      )
      .join(''); // Join the individual cards into a single string

    // Create a single container for 2 cards per row
    const comboHTML = `
      <div class="col-lg-4  mb-4 mcombo">
          <div class="container p-3 deal-card-combo">
              <h5 class="text-center mb-3"><strong>${combo.title}</strong></h5>
              <div class="row row-cols-lg-2 row-cols-2">
                  ${cardsHTML}
              </div>
          </div>
      </div>`;

    container.innerHTML += comboHTML;
  });
}

// Call render functions to populate the sections
renderNewDeals();
renderComboDeals();
