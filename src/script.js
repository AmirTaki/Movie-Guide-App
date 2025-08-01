const movieNameRef = document.getElementById("move-name")
const searchBtn = document.getElementById("search-btn")
const result = document.getElementById("result")


const getMovie = () => {
    const movieName = movieNameRef.ariaValueMax;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;
}