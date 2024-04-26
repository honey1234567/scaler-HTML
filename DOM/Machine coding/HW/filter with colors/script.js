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

// ADDING TICKET TO DOM
function createTicket(ticketTask, ticketColor, ticketID) {
  let id = ticketID || shortid();
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");

  ticketCont.innerHTML = `<div class="ticket-color ${ticketColor}"></div>
       <div class="ticket-id">#${id}</div>
       <div class="task-area">${ticketTask}</div>
       <div class="ticket-lock">
         <i class="fa-solid fa-lock"></i>
      </div>`;

  let mainCont = document.querySelector(".main-cont");
  mainCont.append(ticketCont);

  if (!ticketID) {
    ticketsArr.push({ ticketTask, ticketColor, ticketID: id });
    localStorage.setItem("tickets", JSON.stringify(ticketsArr));
  }

  console.log(ticketsArr);
}
function renderTickets() {
    ticketsArr.forEach(function (ticket) {
        createTicket(ticket.ticketTask, ticket.ticketColor, ticket.ticketID);
    });
}
//upper part is in js  

const priorityRef = document.querySelector(".toolbox-priority-cont") ;
        const mainRef = document.querySelector(".main-cont") ;
        priorityRef.addEventListener("click" , (e) => {
            let color = e.target.classList[0] ;
            mainRef.innerHTML = ""
            renderTickets() ;
            [...mainRef.children].forEach((ticket) => {//mainRef is node list because there are children as tickets
                const ticket_color = ticket.querySelector(".ticket-color").classList[1] ;
                if(color != ticket_color) {
                    ticket.remove() ;
                }
            })
       
        })
       
        priorityRef.addEventListener("dblclick" , ()=> {
            mainRef.innerHTML = "" ;
            renderTickets() ;
        } )
       

