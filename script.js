const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
  "message one",
  "message two",
  "message three",
  "message four",
];

const colors = ["red", "green", "blue", "orange"];

button.addEventListener("click", () => createNotification());

function createNotification() {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.style.color = colors[Math.floor(Math.random() * messages.length)];
  notif.innerText = messages[Math.floor(Math.random() * messages.length)];
  toasts.appendChild(notif);
  setTimeout(() => {
    toasts.removeChild(notif);
  }, 3000);
}
