async function fetchGreeting() {
  const response = await fetch("http://localhost:9000/", {
    method: "POST",
    body: JSON.stringify({
      query: "query {greeting}",
    }),
    headers: {
      "Content-type": "application/json",
    },
  });

  const body = await response.json();
  return body.data.greeting;
}

fetchGreeting().then((greeting) => {
  document.getElementById("greeting").textContent = greeting;
});
