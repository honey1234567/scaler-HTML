// WRITE SOLUTION HERE
const starContainer = document.getElementById("star-container");
const ratingCount = document.getElementById("count");
starContainer.addEventListener("click", handleClickRating);
starContainer.addEventListener("mouseover", handleHoverRating);
starContainer.addEventListener("mouseout", handleLeaveRating);
let starRating = 0;


function handleClickRating(e) {
    let clickedStarEle = e.target;
 
    starRating = clickedStarEle.getAttribute("data-index");
    fillColor(starRating)
    ratingCount.innerText = starRating
}

function fillColor(idx) {

    let allStars = starContainer.children;

    //1st way remove class from all the star ele
    for (let i = 0; i < 5; i++) {
        allStars[i]?.classList.remove("star-filled");
    }
    //2nd way 
    // for(let i=idx;i<5;i++){
    //     allStars[i]?.classList.remove("yellow");
    // }
    //add class to all the req star ele 
    for (let i = 0; i < idx; i++) {
        allStars[i].classList.add("star-filled");
    }
}

function handleHoverRating(e) {
  
    let starRating = e.target.getAttribute("data-index");
    fillColor(starRating);
}

function handleLeaveRating(e) {
    fillColor(starRating)
}
