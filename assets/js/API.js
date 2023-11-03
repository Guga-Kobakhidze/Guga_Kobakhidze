// For API data

// Create Cards for APIData

const getAPIData = (userId, title, body) => {
  // Create div for apiCards
  const apiCard = document.createElement("div");
  apiCard.classList.add("api_card");

  // Create h1 for userId
  const apiId = document.createElement("h1");
  apiId.textContent = userId;

  // Create h2 for title
  const apiTitle = document.createElement("h2");
  apiTitle.textContent = title;

  // Create paragraph for body
  const apiBody = document.createElement("p");
  apiBody.classList.add("paragraph");
  apiBody.textContent = body;

  // append all in one div
  apiCard.append(apiId, apiTitle, apiBody);

  return apiCard;
};

// Fetch the data
const APIData = fetch("https://jsonplaceholder.typicode.com/posts");

APIData.then((apiData) => apiData.json())
  .then((datas) => {
    // Get the main container for cards
    const apiContent = document.querySelector(".api_content");

    const cardsPerPage = 18;
    let start = 0;

    const forLoop = () => {
      for (let i = start; i < start + cardsPerPage && i < datas.length; i++) {
        const cardElement = getAPIData(
          datas[i].userId,
          datas[i].title,
          datas[i].body
        );
        apiContent.appendChild(cardElement);
      }
    };

    forLoop();

    const nextCards = () => {
      apiContent.innerHTML = "";
      start += cardsPerPage;
      if (start >= datas.length) {
        start = datas.length - 1;
      }
      forLoop();
    };

    const prevCards = () => {
      apiContent.innerHTML = "";
      start -= cardsPerPage;
      if (start < 0) {
        start = 0;
      }
      forLoop();
    };

    const nextButton = document.querySelector(".next_button");
    nextButton.addEventListener("click", nextCards);

    const prevButton = document.querySelector(".prev_button");
    prevButton.addEventListener("click", prevCards);
  })
  .catch((error) => console.error(error));
