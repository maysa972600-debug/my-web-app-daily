document.getElementById("startBtn").addEventListener("click", function() {
    alert("Welcome to Daily Flow! Let's organize your day 🌸");
});

let selectedType = "";

function selectType(button, type) {
  document.querySelectorAll(".type-btn").forEach(btn => btn.classList.remove("active"));
  button.classList.add("active");
  selectedType = type;
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then(() => console.log("Service Worker Registered"))
      .catch((err) => console.log("SW error", err));
  });
}

