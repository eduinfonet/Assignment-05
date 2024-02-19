function handleSeat(event) {
  // seat sell count
  const increasrSeat = document.getElementById("increase-seat");
  const increasrSeatText = increasrSeat.innerText;
  const currentSeat = parseInt(increasrSeatText);
  const newSeat = currentSeat + 1;
  increasrSeat.innerText = newSeat;
  //console.log(newSeat);
  //seat left
  const seatLeft = document.getElementById("seat-left");
  const seatLeftText = seatLeft.innerText;
  const leftSeat = parseInt(seatLeftText);
  const newLeftSeat = leftSeat - 1;
  seatLeft.innerText = newLeftSeat;
  //console.log(newLeftSeat);

  // Get the container div
  var seatColor = document.getElementById("seat-color");

  // Get all elements within the container
  var elements = seatColor.querySelectorAll("p");

  // Apply the class to each element
  elements.forEach(function (element) {
    element.classList.add("bg-green-500");
  });
}
