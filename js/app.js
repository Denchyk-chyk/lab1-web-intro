function loadData(source, buttonName, outputName) {
  document.getElementById(buttonName).addEventListener("click", async () => {
    const output = document.getElementById(outputName);
    output.textContent = "Завантаження...";
    try {
      output.style.display = "block";
      const res = await fetch(source);
      const data = await res.json();
      output.textContent = JSON.stringify(data, null, 2);
    } catch (e) {
      output.textContent = "Помилка завантаження: " + e.message;
    }
  });
}

loadData("https://jsonplaceholder.typicode.com/users/1", "loadUser", "outputUser");
loadData("https://jsonplaceholder.typicode.com/posts/1", "loadPost", "outputPost");
loadData("https://jsonplaceholder.typicode.com/albums/1", "loadAlbum", "outputAlbum");

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        up.style.display = 'block';
    } else {
        up.style.display = 'none';
    }
});