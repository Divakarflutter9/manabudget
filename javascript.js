// JSON data for products
const productsData = {
  newDeals: [
    
    { title: "Reagular Brand Slippers ",oldprice:899, price: 299, discount: "70%", img: "images/day2 shoes1.jpg", link: "https://ajiio.co/iCaD1K" },
    { title: "Green checks shirt ",oldprice:599, price: 247, discount: "60%", img: "images/day2 shirt1.jpg", link: "https://myntr.in/e40fF8" },
    { title: "Highlander Brand shirt ",oldprice:899, price: 243, discount: "50%", img: "images/day2 shirt2.jpg", link: "https://ajiio.co/xfQE49" },
    { title: "Urbano Brand shirt ",oldprice:899, price: 250, discount: "20%", img: "images/day2 shirt3.jpg", link: "https://ajiio.co/9P6dge" },
    { title: "Highlander Brand shirt ",oldprice:899, price: 300, discount: "70%", img: "images/day2 shirt4.jpg", link: "https://fkrt.co/2VJGmr" },
    { title: "Ajio Brand shirt ",oldprice:899, price: 249, discount: "90%", img: "images/day2 shirt5.jpg", link: "https://fkrt.co/sUtVnY" },
    { title: "Roadstar Brand Shirt ",oldprice:899, price: 499, discount: "73%", img: "images/day2 shirt6.jpg", link: "https://fkrt.co/014hIO" },
    { title: "White checks shirt ",oldprice:899, price: 359, discount: "70%", img: "images/day2 shirt7.jpg", link: "https://fkrt.co/83kbaP" },
    { title: "White shirt ",oldprice:899, price: 229, discount: "70%", img: "images/day2 shirt8.jpg", link: "https://fkrt.co/B2mSvs" },
    { title: "Indian garage brand  ",oldprice:899, price: 244, discount: "55%", img: "images/day2 shirt9.jpg", link: "https://fkrt.co/2jASNB" },
    
    { title: "Indian garage brand pant  ",oldprice:1199, price: 569, discount: "70%", img: "images/day2 pant1.jpg", link: "https://ajiio.co/0Ruop1" },
    { title: "Myntra brand pant ",oldprice:1099, price: 539, discount: "60%", img: "images/day2 pant2.jpg", link: "https://myntr.in/qP8dju" },
    { title: "Myntra brand pant ",oldprice:999, price: 299, discount: "40%", img: "images/day2 pant3.jpg", link: "https://fkrt.co/zHomZX" },
    { title: "branded pant  ",oldprice:2199, price: 248, discount: "90%", img: "images/day2 pant4.jpg", link: "https://fkrt.co/aDhYKi" },
   
  ],
  dailyDeals:[
    
    { title: "White checks shirt ",oldprice:899, price: 359, discount: "70%", img: "images/shirt1.jpg", link: "https://ajiio.co/Jt3Nob" },
    { title: "Green checks shirt ",oldprice:899, price: 499, discount: "70%", img: "images/shirt3.jpg", link: "https://myntr.in/SHGxpL" },
    { title: "Highlander Brand shirt ",oldprice:899, price: 499, discount: "70%", img: "images/shirt4.jpg", link: "https://myntr.in/wNZe8t" },
    { title: "Urbano Brand shirt ",oldprice:899, price: 359, discount: "70%", img: "images/shirt5.jpg", link: "https://ajiio.co/pBmkzz" },
    { title: "Highlander Brand shirt ",oldprice:899, price: 98, discount: "70%", img: "images/shirt6.jpg", link: "https://myntr.in/dQ6bpx" },
    { title: "Ajio Brand shirt ",oldprice:899, price: 555, discount: "70%", img: "images/shirt7.jpg", link: "https://ajiio.co/jVgpqB" },
    { title: "Roadstar Brand Shirt ",oldprice:899, price: 499, discount: "70%", img: "images/shirt8.jpg", link: "https://myntr.in/kZVd6L" },
    { title: "White checks shirt ",oldprice:899, price: 679, discount: "70%", img: "images/shirt9.jpg", link: "https://myntr.in/MiSmaT" },
    { title: "White shirt ",oldprice:899, price: 359, discount: "70%", img: "images/shirt10.jpg", link: "https://myntr.in/mzy4We" },
    { title: "Indian garage brand  ",oldprice:899, price: 559, discount: "70%", img: "images/shirt11.jpg", link: "https://myntr.in/J7xAbQ" },
    
    { title: "Indian garage brand pant  ",oldprice:1199, price: 649, discount: "70%", img: "images/pant1.jpg", link: "https://myntr.in/YT5VvD" },
    { title: "Myntra brand pant ",oldprice:1199, price: 559, discount: "70%", img: "images/pant2.jpg", link: "https://myntr.in/kEun0M" },
    { title: "Myntra brand pant ",oldprice:1199, price: 459, discount: "70%", img: "images/pant3.jpg", link: "https://myntr.in/3RY7RL" },
    { title: "branded pant  ",oldprice:1199, price: 559, discount: "70%", img: "images/pant4.jpg", link: "https://ajiio.co/CErQk2" },
    { title: "branded pant ",oldprice:1199, price: 559, discount: "70%", img: "images/pant5.jpg", link: "https://myntr.in/Ga1WB1" },
    { title: "branded pant  ",oldprice:1199, price: 679, discount: "70%", img: "images/pant6.jpg", link: "https://myntr.in/zutpgH" },
    { title: "branded pant ",oldprice:1199, price: 369, discount: "70%", img: "images/pant7.jpg", link: "https://myntr.in/M6hfQI" },
    { title: "branded pant ",oldprice:1199, price: 649, discount: "70%", img: "images/pant8.jpg", link: "https://myntr.in/w30yQW" },
    { title: "branded pant  ",oldprice:1199, price: 649, discount: "70%", img: "images/pant9.jpg", link: "https://myntr.in/ZXYnIy" },
    { title: "branded pant ",oldprice:1199, price: 369, discount: "70%", img: "images/pant10.jpg", link: "https://myntr.in/iDyFmf" },

    { title: "branded Shoes  ",oldprice:1999, price: 689, discount: "70%", img: "images/shoes1.jpg", link: "https://myntr.in/yzP9CT" },
    { title: "branded Shoes  ",oldprice:1999, price: 217, discount: "70%", img: "images/shoes2.jpg", link: "https://msho.in/82048u" },
    { title: "branded Shoes  ",oldprice:1999, price: 549, discount: "70%", img: "images/shoes3.jpg", link: "hhttps://ajiio.co/OdKRz8" },
    { title: "branded Shoes  ",oldprice:1999, price: 426, discount: "70%", img: "images/shoes4.jpg", link: "https://ajiio.co/qGa0Y8" },
    { title: "branded Shoes  ",oldprice:1999, price: 689, discount: "70%", img: "images/shoes5.jpg", link: "https://ajiio.co/4RmjMx" },
    { title: "branded Shoes  ",oldprice:1999, price: 629, discount: "70%", img: "images/shoes6.jpg", link: "https://myntr.in/YAGxzQ" },
    // { title: "wMen T-Shirt",oldprice:1, price: 199, discount: "90%", img: "images/pro sh 2.jpg", link: "" },
    
  ],
  electrodeals:[
    // { title: "wMen T-Shirt", oldprice:4, price: 199, discount: "90%", img: "images/product e 1.jpg", link: "" },
  ],
  comboDeals: [
    // {
    //   title: "Combo Pack",
    //   items: [
    //     { title: "eMen T-Shirt",oldprice:2, price: 199, discount: "90%", img: "images/pro sh 5.jpg", link: "" },
    //     { title: "eMen T-Shirt",oldprice:2, price: 199, discount: "90%", img: "images/pro sh 5.jpg", link: "" },
    //     { title: "eMen T-Shirt",oldprice:2, price: 199, discount: "90%", img: "images/pro sh 5.jpg", link: "" },
    //     { title: "eMen T-Shirt",oldprice:2, price: 199, discount: "90%", img: "images/pro sh 5.jpg", link: "" },
    //   ],
    // },
    // {
    //   title: "Combo Pack",
    //   items: [
    //     { title: "eMen T-Shirt", price: 199, discount: "90%", img: "images/pro sh 5.jpg", link: "" },
    //     { title: "eMen T-Shirt", price: 199, discount: "90%", img: "images/pro sh 5.jpg", link: "" },
    //     { title: "eMen T-Shirt", price: 199, discount: "90%", img: "images/pro sh 5.jpg", link: "" },
    //     { title: "eMen T-Shirt", price: 199, discount: "90%", img: "images/pro sh 5.jpg", link: "" },
    //   ],
    // },
    // {
    //   title: "Combo Pack",
    //   items: [
    //     { title: "eMen T-Shirt", price: 199, discount: "90%", img: "images/pro sh 5.jpg", link: "" },
    //     { title: "eMen T-Shirt", price: 199, discount: "90%", img: "images/pro sh 5.jpg", link: "" },
    //     { title: "eMen T-Shirt", price: 199, discount: "90%", img: "images/pro sh 5.jpg", link: "" },
    //     { title: "eMen T-Shirt", price: 199, discount: "90%", img: "images/pro sh 5.jpg", link: "" },
    //   ],
    // },

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
                  <div class="card-body text-light">
                      <h5 class="card-title">${deal.title}</h5>
                      <p class="card-text d-inline">
    <strong>Price:</strong>
    <span><strike>${deal.oldprice}</strike></span>
    <span>${deal.price}</span>
</p>

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
                  <div class="card-body text-light">
                      <h5 class="card-title">${deal.title}</h5>
<p class="card-text d-inline">
    <strong>Price:</strong>
    <span><strike>${deal.oldprice}</strike></span>
    <span>${deal.price}</span>
</p>
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
                  <div class="card-body text-light">
                      <h5 class="card-title">${deal.title}</h5>
<p class="card-text d-inline">
    <strong>Price:</strong>
    <span><strike>${deal.oldprice}</strike></span>
    <span>${deal.price}</span>
</p>
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
                  <div class="card-body text-light">
                      <h5 class="card-title">${item.title}</h5>
<p class="card-text d-inline">
    <strong>Price:</strong>
    <span><strike>${item.oldprice}</strike></span>
    <span>${item.price}</span>
</p>
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
