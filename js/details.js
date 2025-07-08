import { Ui } from "./UI.js";

export class Details {
  constructor (id) {
    this.ui = new Ui();

    document.querySelector("#exitDetails").addEventListener("click", () => {
      document.querySelector("#detailsSection").classList.add("d-none");
      document.querySelector("main").classList.remove("d-none");
    })

    this.getDetails(id);
  }

  async getDetails(gameID) {
    const loader = document.querySelector("#loader");
    loader.classList.remove("d-none");

    const gameApiUrl = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameID}`;

    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'fd5f95eb42msh298066e4d2b11d9p15f76ajsncb42158f914f',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    
    const gameApi = await fetch(gameApiUrl, options);
    const gameData = await gameApi.json();
    

    this.ui.displayDetails(gameData);
    loader.classList.add("d-none");
    document.querySelector("#detailsContent").classList.remove("d-none");

  }
}