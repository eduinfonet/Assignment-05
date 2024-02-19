const busTicket = document.querySelectorAll(".seat-plan");
//console.log(busTicket);

for (let i = 0; i < busTicket.length; i++) {
  const ticket = busTicket[i];

  ticket.addEventListener("click", function () {
    const seatNumber = document.getElementById("seat1");

    const selectContainer = document.getElementById("priceAndPlaceUl");

    const li = document.createElement("li");
    const p = document.createElement("p");
    const SeatClass = document.createElement("p");
  });
}
