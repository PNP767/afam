
const password = document.getElementById("password");
const toggle = document.getElementById("togglePassword");
toggle.addEventListener("click", function () {
  const type = password.type === "password" ? "text" : "password";
  password.type = type;
});
