const form = document.querySelector("#form");
const createInputForm = (type, name) => {
  const div = document.createElement("div");
  const label = document.createElement("label");
  const input = document.createElement("input");

  label.setAttribute("for", name.toLowerCase());
  input.setAttribute("type", type.toLowerCase());
  input.setAttribute("id", name.toLowerCase());
  input.setAttribute("name", name.toLowerCase());

  for (let i = 0; i < name.length; i++) {
    const span = document.createElement("span");
    span.textContent = i === 0 ? name[i].toUpperCase() : name[i];
    label.appendChild(span);
  }
  div.appendChild(label);
  div.appendChild(input);
  form.insertBefore(div, form.children[1]);
};

createInputForm("text", "password");
createInputForm("email", "email");

const addWave = (inputName) => {
  const input = document.querySelector(`#${inputName}`);
  input.addEventListener("click", (e) => {
    const { childNodes } = input.previousSibling;
    let count = 0.1;

    childNodes.forEach((node) => {
      node.style.transition = `transform ${count}s ease`;
      node.classList.add("move");
      count += 0.17;
    });
  });
  return input;
};

addWave("email");
addWave("password");

document.addEventListener("click", (e) => {
  const email = addWave("email");
  const password = addWave("password");
  removeClassMove(e.target, email) || removeClassMove(e.target, password);
});

const removeClassMove = (target, input) => {
  const { childNodes } = input.previousSibling;
  if (target !== input) {
    childNodes.forEach((node) => {
      node.classList.contains("move") ? node.classList.remove("move") : null;
    });
  }
};
