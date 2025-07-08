// Start Nav
const nav = document.querySelector("nav");
nav.style.top = -(nav.offsetHeight / 2) + "px";
// End Nav


export class Ui {
  displayData(data) {
    const gamesRow = document.querySelector("#row");

    let content = '';
    for ( let i = 0; i < data.length; i++ ) {
      content += `
        <div class="game col-sm-6 col-md-4 col-lg-3 d-flex">
          <div id="game" data-id="${data[i].id}" class="inner rounded d-flex flex-column w-100">
            <div class="p-3">
              <img class="w-100 rounded-top" src="${data[i].thumbnail}" alt="Game">
            </div>
            <div class="details px-3 d-flex align-items-center justify-content-between">
              <h6>${data[i].title}</h6>
              <span class="badge text-bg-primary">Free</span>
            </div>
            <div class="pb-2 px-3 description text-break">
              ${data[i].short_description}
            </div>
            <div class="category mt-auto py-2 px-3 d-flex align-items-center justify-content-between">
              <span class="badge text-bg-secondary">${data[i].genre}</span>
              <span class="badge text-bg-secondary">${data[i].platform}</span>
            </div>
          </div>
        </div>
      `
    }
    gamesRow.innerHTML = content;
  }

  displayDetails(game) {
    const content = `
        <div class="row">
          <div class="col-md-4">
            <img class="w-100" src="${game.thumbnail}" alt="">
          </div>
          <div class="col-md-8 mt-md-0 mt-4 pb-5">
            <h5 class="mb-3">Title: ${game.title}</h5>
            <h6>Category: <span class="badge text-bg-primary">${game.genre}</span></h6>
            <h6>Platform: <span class="badge text-bg-primary">${game.platform}</span></h6>
            <h6>Status: <span class="badge text-bg-primary">${game.status}</span></h6>
            <p class="my-3">
              ${game.description}
            </p>
            <a target="_blank" href="${game.game_url}" class="btn btn-outline-warning text-white">Show Game</a>
          </div>
        </div>
    `;
    document.querySelector("#detailsContent").innerHTML = content;
  }
} 
