const starContainer=document.getElementById("star-container");
const ratingCount=document.getElementById("count");
starContainer.addEventListener("click",handleClickRating);
starContainer.addEventListener("mouseover",handleHoverRating);
starContainer.addEventListener("mouseout",handleLeaveRating);
let starRating=0;


function handleClickRating(e){
    let clickedStarEle=e.target;
    console.log(clickedStarEle);
    starRating=clickedStarEle.getAttribute("idx");
    fillColor(starRating)
    ratingCount.innerText=starRating
}

function fillColor(idx){
    let allStars=starContainer.children;
    console.log(allStars);
    //1st way remove class from all the star ele
    for(let i=0;i<5;i++){
        allStars[i]?.classList.remove("yellow");
    }
//2nd way 
    // for(let i=idx;i<5;i++){
    //     allStars[i]?.classList.remove("yellow");
    // }
    //add class to all the req star ele 
    for(let i=0;i<idx;i++){
        allStars[i].classList.add("yellow");
    }
}

function handleHoverRating(e){
    let starRating=e.target.getAttribute("idx");
    fillColor(starRating);
}

function handleLeaveRating(e){
    fillColor(starRating)
}
