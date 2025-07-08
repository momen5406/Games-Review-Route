import { Ui } from "./UI.js";
import { Details } from "./details.js";
// Home Section

export class Games {
  constructor() {
    this.getGames("mmorpg");

    document.querySelectorAll(".navbar-nav a").forEach((link) => {
      link.addEventListener("click", (event) => {
        document.querySelector(".navbar-nav .active").classList.remove("active");
        event.target.classList.add("active");
        this.getGames(event.target.dataset.category);
      })
    })

    this.ui = new Ui();
  }

  async getGames(category) {
    const loader = document.querySelector("#loader");
    loader.classList.remove("d-none");
    const gamesApiUrl = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;

    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'fd5f95eb42msh298066e4d2b11d9p15f76ajsncb42158f914f',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };


    
    const gamesApi = await fetch(gamesApiUrl, options);
    const gamesData = await gamesApi.json();

    this.ui.displayData(gamesData);
    this.startDetails();
    loader.classList.add("d-none");
  }

  startDetails() {
    document.querySelectorAll("#game").forEach((game) => {
      game.addEventListener("click", () => {
        const id = game.dataset.id;
        console.log(id);
        this.showDetails(id);
      })
    })
  }

  showDetails(gameID) {
    const gameDetails = new Details(gameID);
    document.querySelector("#detailsSection").classList.remove("d-none");
    document.querySelector("main").classList.add("d-none");
  }
}