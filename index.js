function validateEmail(email) {
  if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
    const error = new Error("Email inválido");
    error.input = "email";
    throw error;
  }
}

function validatePassword(password) {
  if (
    password.length < 8 ||
    !password.match(/[a-z]/) ||
    !password.match(/[A-Z]/) ||
    !password.match(/\d/) ||
    !password.match(/[^a-zA-Z\s0-9]/)
  ) {
    const error = new Error("Senha inválida");
    error.input = "password";
    throw error;
  }
}

function resetFormStyles(Inputs) {
  Object.entries(Inputs).forEach(([key, value]) => {
    value.classList.remove("success", "error"),
      (document.querySelector(`#${key}-error`).textContent = "");
  });
}

const userInputs = {
  name: document.querySelector("#name"),
  email: document.querySelector("#email"),
  password: document.querySelector("#password"),
};

const form = document.querySelector("form");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  resetFormStyles(userInputs);
  try {
    userInputs.name.classList.add("success");
    validateEmail(userInputs.email.value);
    userInputs.email.classList.add("success");
    validatePassword(userInputs.password.value);
    userInputs.password.classList.add("success");
  } catch (error) {
    userInputs[error.input].classList.add("error");
    document.querySelector(`#${error.input}-error`).textContent = error.message;
  }
});
