(function () {
  console.log("heyyyy");

  document.body.classList.add("blue");

  const inputEl = document.getElementById("search");

  inputEl.addEventListener("input", (event) => {
    console.log("event.target.value", event.target.value);
    fetch(
      `https://api.github.com/search/users?q=${
        event.target.value
      }&per_page=${10}`
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  });
})();
