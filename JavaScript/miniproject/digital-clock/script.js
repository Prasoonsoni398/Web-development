function updateClock() {
  let now = new Date();

  let hours = String(now.getHours())
  let minutes = String(now.getMinutes())
  let seconds = String(now.getSeconds())

  let time = `${hours}:${minutes}:${seconds}`;

  let date = now.toDateString();

  document.getElementById("time").innerText = time;
  document.getElementById("date").innerText = date;
}

setInterval(updateClock);
updateClock();