// Question 2
// Make a call to the Rawg API.

// Go to https://rawg.io/apidocs.

// You'll be given an API Key you can add as a "key" parameter in your fetch request.

// KEY: 7e8ddb30448b419b91a00a3c34ff18ce

// Make a call to the following API endpoint.

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=7e8ddb30448b419b91a00a3c34ff18ce";
const proxy = "http://noroffcors.herokuapp.com/";

const fixCors = proxy + url;

const fixResults = document.querySelector(".result");

async function callApi() {
        try {
            const response = await fetch(fixCors);

            const results = await response.json();

            console.log(results);

        } catch (error) {

            console.log(error);

            fixResults.innerHTML = error
        
        }
}

callApi();


// Loop through the results and display the following properties in HTML, but only for the first eight results:
// name
// rating
// number of tags (not the tag details, just the amount of tags)
// The styling for this assignment is not important but loading indicator should be displayed while the API call is in progress.

function apiLoop(loop) {
    

    for (let i = 0; i < loop.length; i++) {

            console.log(loop[i].name);
    }
}

apiLoop(callApi)


// Be sure to handle any potential errors in the code.

// You can use either regular promise or async/await syntax to make the call.

// Be sure to arrange all file types appropriately, consult the repos from the lessons for examples.


