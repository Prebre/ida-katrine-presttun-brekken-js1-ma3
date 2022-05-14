// Question 2
// Make a call to the Rawg API.
// KEY: 7e8ddb30448b419b91a00a3c34ff18ce
// Make a call to the following API endpoint.

// Loop through the results and display the following properties for the first eight results in HTML:
// name
// rating
// number of tags (not the tag details, just the amount of tags)

// Loading indicator should be displayed while the API call is in progress.
// Be sure to handle any potential errors in the code.
// Be sure to arrange all file types appropriately.

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=7e8ddb30448b419b91a00a3c34ff18ce";

const fixResults = document.querySelector(".result");

async function callApi() {

        try {

                const response = await fetch(url);
                const data = await response.json();
                const results = data.results;
                const gamesContainer = document.querySelector("#gamelist");
                gamesContainer.innerHTML = ""

                for(let i = 0; i < 8; i++) {

                        console.log(results[i].name);
                        console.log(results[i].rating);
                        console.log(results[i].tags.length);

                        gamesContainer.innerHTML += `<div class="game"><h2>${results[i].name}</h2><p class="rating"><strong>Rating:</strong> ${results[i].rating}</p><p class="tags"><strong>Number of tags:</strong> ${results[i].tags.length}</p></div>`

                        if(i === 7) {
                                break;
                        }
                }
                
        } catch (err) {

            console.log(err);

            fixResults.innerHTML = err.toString("Error: No value found");
        }
}

callApi();