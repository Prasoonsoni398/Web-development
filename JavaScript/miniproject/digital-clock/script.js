function updateClock() {
  let now = new Date();

  let hours = String(now.getHours()).padStart(2, '0');
  let minutes = String(now.getMinutes()).padStart(2, '0');
  let seconds = String(now.getSeconds()).padStart(2, '0');

  let time = `${hours}:${minutes}:${seconds}`;

  let date = now.toDateString();

  document.getElementById("time").innerText = time;
  document.getElementById("date").innerText = date;
}

setInterval(updateClock, 1000);
updateClock();