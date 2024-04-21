const addBtn=document.querySelector(".add-btn");
const modal=document.querySelector(".modal-cont");
const textAreaEle=modal.children[0];
const modalPriorityColorCont=modal.children[1];
let ticketColor="green";
const mainCont=document.querySelector(".main-cont");
let uid = new ShortUniqueId({ length: 5 });
const removeBtn=document.querySelector(".remove-btn");
let isDeleteActive=false;
const colorArray=["pink","blue","green","purple"];
const toolBoxPriorityCont=document.querySelector(".toolbox-priority-cont");
const allTickets=localStorage.getItem("localTickets")| [];
//fetch datat from ls , show these tickets on UI

function populateUI(){
parse all tickets 
createTicket()
}




addBtn.addEventListener("click",handleClick);
function handleClick(){
    //show modaL
    modal.style.display="flex";
}
removeBtn.addEventListener("click",handleDelete);
function handleDelete(){
    console.log(isDeleteActive);
    if(isDeleteActive==false) removeBtn.style.color="red";
    else removeBtn.style.color="black";

    isDeleteActive=!isDeleteActive;
    console.log(isDeleteActive);

}

modalPriorityColorCont.addEventListener("click",function(e){
    // console.log(e.target);
    //we want event only on priority color boxes
    if(e.target==e.currentTarget) return;
    //remove active class from all 4 colors 
    const allPriorityColors=Array.from(modalPriorityColorCont.children);
    allPriorityColors.forEach(colorEle=>{
        colorEle.classList.remove("active");
    })

    //add active class to the selected color
    e.target.classList.add("active");
    ticketColor=e.target.classList[1];
    // console.log(ticketColor);
})


//modal and ticket creation
modal.addEventListener("keypress",function(e){
    // console.log(e.key);
    if(e.key!="Enter"){
        return
    }
    let content=textAreaEle.value;
    createTicket(content,ticketColor)
    modal.style.display="none";
    textAreaEle.value="";
    //remove active class
    const allPriorityColors=Array.from(modalPriorityColorCont.children);
    allPriorityColors.forEach(colorEle=>{
        colorEle.classList.remove("active");
    })
    allPriorityColors[2].classList.add("active");
})


function createTicket(content, ticketColor){
    let tid=uid.rnd();
    const ticketCont=document.createElement("div");
    // ticketCont.setAttribute("class","ticket-cont");
    ticketCont.classList.add("ticket-cont");
    ticketCont.innerHTML=`            <div class="ticket-color ${ticketColor}"></div>
    <div class="ticket-id">#${tid}</div>
    <div class="ticket-area">${content}</div>
    <div class="lock-unlock">
    <i class="fa-solid fa-lock"></i></div>`;
    mainCont.appendChild(ticketCont);
    //we need to atatch event listeners on the ticket 
    changeTicketPriority(ticketCont)
    deleteListeners(ticketCont)
    addLockUnlock(ticketCont)

    let ticketObj={
        ticketColor,tid,content,
    }
    allTickets.push(ticketObj);
    updateLocalStorage()
    
}


function deleteListeners(ticketCont){
    ticketCont.addEventListener("click",function(e){
        if(isDeleteActive){
            ticketCont.remove();
        }
    })
}

function addLockUnlock(ticketCont){
    const lockUnlockEle=ticketCont.children[3];
    const ticketArea=ticketCont.children[2];
    lockUnlockEle.addEventListener("click",function(e){
        let isLocked=lockUnlockEle.children[0].classList.contains("fa-lock");
        console.log(isLocked);
        if(isLocked){
            //unlock
            lockUnlockEle.children[0].classList.remove("fa-lock");
            lockUnlockEle.children[0].classList.add("fa-lock-open");
            ticketArea.setAttribute("contenteditable",true)

            //make textArea editable
        }
        else{

            //lock
            lockUnlockEle.children[0].classList.remove("fa-lock-open");
            lockUnlockEle.children[0].classList.add("fa-lock");
            //make textArea non-editable
            ticketArea.setAttribute("contenteditable",false)
        }
    })
}

function changeTicketPriority(ticketCont){
    const ticketColorEle=ticketCont.children[0];
    //next color should be added
    ticketColorEle.addEventListener("click",()=>{
            // 1. get current color, find its position in array 
            let currentColor=ticketColorEle.classList[1];
            let currentColorIdx=colorArray.indexOf(currentColor);
            // 2. increment pos by one , take care of overflow
            let newColorIdx=(currentColorIdx+1)%colorArray.length;
            console.log(newColorIdx);
            let newColor=colorArray[newColorIdx];
            // 3. set color 
            ticketColorEle.classList.remove(currentColor);
            ticketColorEle.classList.add(newColor);
    })
}

toolBoxPriorityCont.addEventListener("click",function(e){
    if(e.target==e.currentTarget) return;
    let currentColor=e.target.classList[1];
    // console.log(currentColor);
    // display ticket which have ticket-color as currentColor/
})

toolBoxPriorityCont.addEventListener("dblclick",function(e){
    if(e.target==e.currentTarget) return;
    // display all tickets
})

function updateLocalStorage(){
    localStorage.setItem("localTickets",JSON.stringify(allTickets))
}





















//optimized way to remove and add active class
// let currentTicketColorEle=<div class="priority-color green "></div>;
// e.target=<div class="priority-color purple"></div>

// currentTicketColorEle.classList.remove("active");
// e.target.classList.add("active");

// currentTicketColorEle=e.target;
