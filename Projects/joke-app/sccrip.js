async function GetNewJokes() {
  const API_URL = "https://official-joke-api.appspot.com/jokes/random";

  const response = await fetch(API_URL);
  //   console.log(response);

  const data = await response.json();
  //   console.log(data);

  document.getElementById("setup").innerText = data.joke || data.setup;
  document.getElementById("delivery").innerText = data.punchline || "";
}
