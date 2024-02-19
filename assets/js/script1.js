const allSeats = document.getElementsByClassName("seat-plan");
//console.log(allSeats);
let count = 550;
let seatQuality = "Economy";
for (const seat of allSeats) {
  seat.addEventListener("click", function (e) {
    const seatNumber = e.target.parentNode.childNodes[1].innerText;

    // create tag using js

    const selectContainer = document.getElementById("pricePlace");
    const li = document.createElement("h1");

    const seatLocation = document.createElement("p");
    seatLocation.innerText = seatNumber;

    const economy = document.createElement("p");
    economy.innerText = seatQuality;

    const price = document.createElement("p");
    price.innerText = count;

    li.appendChild(seatLocation);
    li.appendChild(economy);
    li.appendChild(price);

    selectContainer.appendChild(li);
  });

  function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
  }
}
