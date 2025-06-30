const images = document.querySelectorAll(".carousel img");
let currentIndex = 0;

function showImage(index) {
  images.forEach((img) => img.classList.remove("active"));
  images[index].classList.add("active");
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

async function getJoke() {
  const jokeElement = document.getElementById("joke");
  jokeElement.textContent = "Loading...";
  try {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
    const data = await response.json();
    jokeElement.textContent = data.joke || "No joke found.";
  } catch (error) {
    jokeElement.textContent = "Error fetching joke.";
  }
}
