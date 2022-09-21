let url = "https://api.chucknorris.io/jokes/random";
let joke = document.querySelector("#joke");
let btn = document.querySelector("#jokeBtn");

const getRandomJokes = () => {
  fetch(url)
    .then((response) => {
      //   console.log(response);
      return response.json();
    })
    .then((data) => {
      joke.textContent = data.value;
    });
};

getRandomJokes();

btn.addEventListener("click", () => {
  getRandomJokes();
});
