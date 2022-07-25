const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const btn = document.querySelector("#formBtn");
const fName = document.querySelector("#fName");
const lName = document.querySelector("#lName");
const email = document.querySelector("#email");
const pass = document.querySelector("#pass");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  checkInput();
});

function checkInput() {
  const fNameVal = fName.value.trim();
  const lNameVal = lName.value.trim();
  const emailVal = email.value.trim();
  const passVal = pass.value.trim();

  if (fNameVal === "") {
    setErrorHardCode(fName, "First Name cannot be empty");
  } else {
    setSucces(fName);
  }
  if (lNameVal === "") {
    setErrorHardCode(lName, "Last Name cannot be empty");
  } else {
    setSucces(lName);
  }
  if (emailVal === "") {
    setError(email, "Email cannot be empty");
  } else if (!regex.test(emailVal)) {
    setError(email, "Please enter a valid email adress");
  } else {
    setSucces(email);
  }
  if (passVal === "") {
    setErrorHardCode(pass, "Password cannot be empty");
  } else {
    setSucces(pass);
  }
}

function setError(input, msg) {
  const parent = input.parentElement;
  const p = document.querySelector(".err");
  p.innerText = msg;
  parent.className = "input error";
}

function setSucces(input) {
  const parent = input.parentElement;
  parent.className = "input success";
}

function setErrorHardCode(input) {
  const parent = input.parentElement;
  parent.className = "input error";
}
