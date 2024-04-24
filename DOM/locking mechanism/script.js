// WARNING: DO NOT EDIT THE BELOW CODE OR DATA

// DUMMY DATA FOR THE COLORS

let ticketsArr = [
    {
        ticketTask: "This is task 1 (lightgreen)",
        ticketColor: "lightgreen",
        ticketID: "dGSUFjfiq",
    },
    {
        ticketTask: "This is task 2 (black)",
        ticketColor: "black",
        ticketID: "ay8dQS0o1",
    },
    {
        ticketTask: "This is task 3 (lightblue)",
        ticketColor: "lightblue",
        ticketID: "fOqBFgQtx",
    },
    {
        ticketTask: "This is task 4 (lightpink)",
        ticketColor: "lightpink",
        ticketID: "fOqBFgQtx",
    },
];

// CALLING createTicket() function for each value in ticketsArr
ticketsArr.forEach(function (ticket) {
    createTicket(ticket.ticketTask, ticket.ticketColor, ticket.ticketID);
});
let ticketsElements = document.querySelectorAll('.ticket-cont');
// ADDING TICKET TO DOM
function createTicket(ticketTask, ticketColor, ticketID) {
    let id = ticketID || shortid();
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class", "ticket-cont");

    ticketCont.innerHTML = `<div class="ticket-color ${ticketColor}"></div>
         <div class="ticket-id">${id}</div>
         <div class="task-area">${ticketTask}</div>
         <div class="ticket-lock">
         <button>Locked</button>
        </div>`;

    let mainCont = document.querySelector(".main-cont");
    mainCont.append(ticketCont);

    if (!ticketID) {
        ticketsArr.push({ ticketTask, ticketColor, ticketID: id });
        localStorage.setItem("tickets", JSON.stringify(ticketsArr));
    }
}
const lockOpen = "Unlocked";
const lockClose = "Locked";
ticketsElements.forEach(ticket => {
    const ticketLockIcon = ticket.querySelector(".ticket-lock>button");
    let taskArea = ticket.querySelector('.task-area');

    ticketLockIcon.addEventListener('click', (e) => {
        console.log(e)
        if (ticketLockIcon.textContent === lockClose) {
            ticketLockIcon.textContent = lockOpen;
            e.target.previousSibling.contentEditable = true;
            taskArea.contentEditable = true;
        } else {
            ticketLockIcon.textContent = lockClose;
            taskArea.contentEditable = false;
        }
    })
})

