const timerInput=document.querySelector(".timer_inputs");
const btns=document.querySelector(".btns");
let hrs;
let mins;
let secs;
let timerId;
let timeLeftInSecs=0;
timerInput.addEventListener("input",handleInput);
btns.addEventListener("click",handleClick);

function handleInput(e){
    // console.log(e.target);
    const inputEle=e.target;
    const inputType=inputEle.getAttribute("id");
    if(inputEle.value<0) {
        alert("Please add a positive number")
        inputEle.value="00";
    }
    //set first 2 input values in input boxes
    // console.log("input value -> ",e.target.value);
    switch(inputType){
        case "hr":
            hrs=inputEle.value.slice(0,2)
            inputEle.value=hrs;
            break;
        case "min":
            mins=inputEle.value.slice(0,2)
            inputEle.value=mins;
            break;
        case "sec":
            secs=inputEle.value.slice(0,2)
            inputEle.value=secs;
            break;
    }
    // let num=inputEle.value.slice(0,2)  
    // console.log("usinf first 2 value -> ",num);//1234
}

function handleClick(e){
    let btnType=e.target.getAttribute("id")
    switch(btnType){
        case "start":
            handleStart()
            break;
        case "pause":
            handlePause()
            break;
        case "continue":
            handleContinue()
            break;
        case "reset":
            handleReset()
            break;
    }
}

function handleStart(){
    //total time in secs
    // console.log(typeof (hrs*3600+mins*60));
    // console.log(hrs,mins,secs);
    // console.log(hrs*3600+mins*60+secs); //we might get NaN in some cases
    totalTimeInSecs=(hrs?hrs*3600:0)+(mins?mins*60:0)+(secs?secs*1:0);
    console.log(totalTimeInSecs);
    startTimer(totalTimeInSecs)
}

function startTimer(totalTimeInSecs){
    if(totalTimeInSecs===0) return;
    display(totalTimeInSecs)
    timerId=setInterval(()=>{
        //start deducting 1 each sec
        timeLeftInSecs=--totalTimeInSecs;
        //display the value in input 
        display(timeLeftInSecs);
        if(timeLeftInSecs==0) {
            alert("timer completed")
            clearInterval(timerId)
        }

    },1000)
    return timerId;
}

function display(totalTimeInSecs){
    let hrs=parseInt(totalTimeInSecs/3600); //5410->1810
    totalTimeInSecs=totalTimeInSecs%3600;
    let mins=parseInt(totalTimeInSecs/60) //->30
    let secs=totalTimeInSecs%60 //10
    console.log(hrs,mins,secs);
    Array.from(timerInput.children).forEach(ele=>{
        let eleType=ele.getAttribute("id");
        if(eleType=="hr")ele.value=hrs>9?hrs:"0"+hrs;
        else if(eleType=="min") ele.value=mins>9?mins:"0"+mins;
        else if(eleType=="sec") ele.value=secs>9?secs:"0"+secs
    })
}

function handlePause(){
    clearInterval(timerId);
}

function handleContinue(){
    timerId=startTimer(timeLeftInSecs)
}

function handleReset(){
    clearInterval(timerId);
    Array.from(timerInput.children).forEach((ele)=>{
        ele.value="00"
    })
    timeLeftInSecs=0;
}
