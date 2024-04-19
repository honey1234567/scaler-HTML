const containerEle = document.querySelector(".container");
const timerInput = document.querySelector("#increment");
containerEle.addEventListener('click', handleClick);
timerInput.addEventListener("input", handleInput);
let counterVal = document.querySelector(".number");
let timerId;
function handleInput(e) {
    //  console.log(e.target.value)
}

function handleClick(e) {
    //  console.log(e.target)
    let btnType = e.target.getAttribute("id")
    switch (btnType) {
        case "add":
            handleAdd()
            break;
        case "subtract":
            handleSubtract()
            break;
        case "reset":
            handleReset()
            break;
    }
}
function handleAdd() {
    if (timerInput.value == 0) return;

    let value = parseInt(counterVal.textContent)
    value += parseInt(timerInput.value)
    counterVal.textContent = value;
}
function handleSubtract() {
    if (timerInput.value == 0) return;

    let value = parseInt(counterVal.textContent)
    value -= parseInt(timerInput.value)
    counterVal.textContent = value;
}
function handleReset() {
    counterVal.textContent = "0"
}
