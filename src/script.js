const movieNameRef = document.getElementById("move-name")
const searchBtn = document.getElementById("search-btn")
const result = document.getElementById("result")


const getMovie = () => {
    const movieName = movieNameRef.ariaValueMax;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;
    if(movieName.length <= 0){
        result.innerHTML = `<h3 class = "msg">Please Enter A Movie Name</h3>`       
    }
    else{
        fetch (url).then((res)=> 
            res.json()).then((data) =>{
               if(data.Response == "True"){
                    result.innerHTML = `
                    <div class = "info">
                        <img src = ${data.Poster} class = "poster">
                        <div>
                            <h2>${data.Title}</h2>
                            <div class = "rating">
                                <img src = "star-icon.svg">
                                <h4></h4>
                            </div>
                        </div></div>
                        `
               }     
        })
    }
}