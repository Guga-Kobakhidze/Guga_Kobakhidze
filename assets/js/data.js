// For my data JSON

const getAllCards = (img, title, desc, icon, time) => {
  // create div
  const myCard = document.createElement("div");
  myCard.classList.add("myCard");

  // create image
  const myCardImg = document.createElement("img");
  myCardImg.setAttribute("src", img);

  // create h2
  const myCardTitle = document.createElement("h3");
  myCardTitle.innerHTML = title;

  // create paragraph
  const myCardDesc = document.createElement("p");
  myCardDesc.innerHTML = desc;

  // create div for icons and time paragraph (append them into one div)
  const iconDiv = document.createElement("div");
  const myCardIcon = document.createElement("span");
  myCardIcon.innerHTML = icon;
  const myCardTime = document.createElement("p");
  myCardTime.innerHTML = time;
  iconDiv.append(myCardIcon, myCardTime);
  iconDiv.classList.add("icon_div");

  // create div for description
  const myCardInfo = document.createElement("div");
  myCardInfo.classList.add("card_info");
  myCardInfo.append(myCardTitle, myCardDesc, iconDiv);

  // append everything
  myCard.append(myCardImg, myCardInfo);

  return myCard;
};

// Call JSON Data

async function getMyData() {
  try {
    const container = document.querySelector(".trending_cards");
    const rawCards = await fetch("./assets/datas/data.json");
    if (!rawCards.ok) {
      throw "Error!";
    }

    const cards = await rawCards.json();
    cards.forEach((card) => {
      const cardElement = getAllCards(
        card.image,
        card.title,
        card.description,
        card.icon,
        card.time
      );

      container.append(cardElement);
    });
  } catch (error) {
    error;
  }
}

getMyData();

// Slider for Trending cards

function slider() {
  // Select the buttons and cards
  const buttons = document.querySelectorAll(".arr-btn");
  const cards = document.querySelector(".trending_slider .trending_cards");
  let scrollStep = 400;

  window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
      return (scrollStep = 367);
    } else if (window.innerWidth >= 768 && window.innerWidth <= 1023) {
      return (scrollStep = 324);
    } else {
      return (scrollStep = 400);
    }
  });

  // Add click event listeners to the buttons
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Determine the scroll direction
      const direction = btn.id === "left" ? -1 : 1;
      const scroll = scrollStep * direction;

      // Scroll the card container smoothly
      cards.scrollBy({ left: scroll, behavior: "smooth" });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(slider, 100);
});
