document.getElementById("load").addEventListener("click", async () => {
  const output = document.getElementById("output");
  output.textContent = "Завантаження...";
  try {
    output.style.display = "block";
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await res.json();
    output.textContent = JSON.stringify(data, null, 2);
  } catch (e) {
    output.textContent = "Помилка завантаження: " + e.message;
  }
});
