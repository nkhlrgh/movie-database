const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=43fbb684b7592b8d42aa72c4aff9dcd5&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=43fbb684b7592b8d42aa72c4aff9dcd5&query=";
const divRow = document.getElementById('movieWrapper');
const form = document.getElementById('form');
const search = document.getElementById('search');

returnMovies(APILINK);

//Display discover movie list
function returnMovies(url) {
    fetch(url).then(response => response.json())
    .then((data) => {
        data.results.forEach(movie => {

            const divColumn = document.createElement('div');
            divColumn.setAttribute('class', 'col-lg-3');

            const divCard = document.createElement('div');
            divCard.setAttribute('class', 'card text-bg-dark h-100');

            const img = document.createElement('img');
            img.setAttribute('class', 'card-img-top')
            //Set image src
            img.src = IMG_PATH + movie.poster_path;

            const divCardBody = document.createElement('div');
            divCardBody.setAttribute('class', 'card-body text-center');

            const cardTitle = document.createElement('h5');
            cardTitle.setAttribute('class', 'card-title');
            //Set movie title
            cardTitle.innerHTML = `${movie.title}`;

            divCardBody.appendChild(cardTitle);
            divCard.appendChild(img);
            divCard.appendChild(divCardBody);
            divColumn.appendChild(divCard);
            divRow.appendChild(divColumn);
        })
    })
}

//Display searched movie
form.addEventListener('submit', (e) => {
    e.preventDefault();
    divRow.innerHTML = "";

    const searchItem = search.value;

    if(searchItem) {
        returnMovies(SEARCHAPI + searchItem);
        search.value = "";
    }
})