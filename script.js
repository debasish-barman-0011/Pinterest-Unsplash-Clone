// API key for accessing contents from the original site
const accessKey = "qZ31D6MpZd2aSa0A5Ej07EhyQom1hdt4-rmYB53h7Ws";
// variable defining for accessing HTML form
const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");
// Innitially blank, store the searched keyword by user.
let inputData = "";
// default page number.. will be increased when user click Show more+
let page = 1;
// asyncronus JavaScript function
async function searchImages() {
    //fetch user input
    inputData = inputEl.value;
    // dynamic url to fetch data from the origial site using API key
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url); //method to fetch based on the query
    const data = await response.json(); //data converted into json format data

    const results = data.results; // json to image data into results variable
    if (page === 1) {
        searchResults.innerHTML = ""; //result will be shown in a single page
    }
    // push all the data into results by arrow => function
    results.map((result) => {
        const imageWrapper = document.createElement('div'); //div element creation
        imageWrapper.classList.add("search-result"); // will push the 
        const image = document.createElement('img'); //img element creation
        image.src = result.urls.small; // src data added
        image.alt = result.alt_description; // alt data added
        const imageLink = document.createElement('a'); // a element creation
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;
        // append data into newly created elements
        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper);

    });
    page++
    if (page > 1) {
        showMore.style.display = "block"; // for page >1 the show more  button will be visible.
    }
}
//event listner for input (submit)
formEl.addEventListener("submit", (event) => {
    event.preventDefault()
    page = 1; //page initialization
    searchImages(); // fn() call
});
// again an event listner (click)
showMore.addEventListener("click", () => {
    searchImages();
});