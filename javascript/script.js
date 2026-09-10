
const signup = document.getElementById("signup");
const firstName = document.getElementById("firstName");
const middleName = document.getElementById("middleName");
const otherName = document.getElementById("otherName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const male = document.getElementById("male");
const female = document.getElementById("female");
const message = document.getElementById("message");
const middleMessage = document.getElementById("middleMessage");
const otherNameMessage = document.getElementById("otherNameMessage");
const emailMessage = document.getElementById("emailMessage");
const passwordMessge = document.getElementById("passwordMessge");
const passwordMessgeBar = document.getElementById("passwordMessgeBar");
const genderMessage = document.getElementById("genderMessage");
const checkbox = document.getElementById("checkbox");
const checkMessage = document.getElementById("checkMessage");

signup.addEventListener("click", () => {

  const firstNameInput = firstName.value.trim();
  const middleNameInput = middleName.value.trim();
  const otherNameInput = otherName.value.trim();
  const emailInput = email.value.trim();

  // STOP ALL EMPTY FIELD

  if (!firstNameInput) {
    message.textContent = "First name required";
    message.style.color = "red";
    return;

  } else {
    message.textContent = "";
  }

  if (!middleNameInput) {
    middleMessage.textContent = "Middle name required";
    middleMessage.style.color = "red";
    return;
  } else {
    middleMessage.textContent = "";
  }

  if (!otherNameInput) {
    otherNameMessage.textContent = "Other name required";
    otherNameMessage.style.color = "red";
    return;
  } else {
    otherNameMessage.textContent = "";
  }

  if (!emailInput) {
    emailMessage.textContent = "Email required";
    emailMessage.style.color = "red";
    return;
  } else {
    emailMessage.textContent = "";
  }

  if (!password.value) {
    passwordMessge.textContent = "Password field required";
    passwordMessge.style.color = "red";
    return;
  }

  if (!confirmPassword.value) {
    confirmpasswordMessge.textContent = "Confirm password field required";
    confirmpasswordMessge.style.color = "red";
    return;
  }

  if (!male.checked && !female.checked) {
    genderMessage.textContent = "Please select gender";
    genderMessage.style.color = "red";
    return;
  } else {
    genderMessage.textContent = "";
  }

  if (!checkbox.checked) {
    checkMessage.textContent = "Please agree to our T&C";
    checkMessage.style.color = "red";
    return;
  } else {
    checkMessage.textContent = "";
  }


  // GET USERS ALREADY STORED

  const users = JSON.parse(localStorage.getItem("users")) || [];


  // FIND IF USER ALREADY EXISTS

  const exitUser = users.find(user => user.email === emailInput);

  if (exitUser) {
    emailMessage.textContent = "User already exists";
    emailMessage.style.color = "red";
    return;
  }


  // STORE NEW USER

  const newUser = {
    firstName: firstNameInput,
    middleName: middleNameInput,
    otherName: otherNameInput,
    email: emailInput,
    password: password.value,
    gender: male.checked ? "Male" : "Female"
  };

  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));


  // GO TO INDEX AFTER SUCCESSFUL SIGNUP

  window.location.href = "login.html";

});


// PASSWORD FILED

password.addEventListener("input", () => {

  const passUpper = /[A-Z]/.test(password.value);
  const passNum = /[0-9]/.test(password.value);
  const passSymbol = /[#$.!*/?,]/.test(password.value);
  const value = password.value;


  if (value.length === 0) {
    passwordMessge.textContent = "";
    passwordMessgeBar.style.color = "";
    passwordMessgeBar.style.width = "";

  } else if (!passUpper) {
    passwordMessge.textContent = "Password must contain at least one uppercase character";
    passwordMessge.style.color = "red";
    passwordMessgeBar.style.width = "20%";
    passwordMessgeBar.style.color = "red";
    passwordMessgeBar.style.backgroundColor = "red";

  } else if (!passNum) {
    passwordMessge.textContent = "Password must contain at least one number";
    passwordMessge.style.color = "red";
    passwordMessgeBar.style.width = "50%";
    passwordMessgeBar.style.color = "red";
    passwordMessgeBar.style.backgroundColor = "red";

  } else if (!passSymbol) {
    passwordMessge.textContent = "Password must contain at least one special character";
    passwordMessge.style.color = "red";
    passwordMessgeBar.style.width = "75%";
    passwordMessgeBar.style.color = "red";
    passwordMessgeBar.style.backgroundColor = "red";

  } else {
    passwordMessge.textContent = "";
    passwordMessgeBar.style.width = "100%";
    passwordMessgeBar.style.color = "green";
    passwordMessgeBar.style.backgroundColor = "green";
  }

});


// CONFIRM PASSWORD FILED

const confirmPassword = document.getElementById("confirmPassword");
const confirmpasswordMessge = document.getElementById("confirmpasswordMessge");
const confirmpasswordMessgeBar = document.getElementById("confirmpasswordMessgeBar");

confirmPassword.addEventListener("input", () => {

  const value = confirmPassword.value;

  if (value.length === 0) {
    confirmpasswordMessge.textContent = "";
    confirmpasswordMessge.style.color = "";
    confirmpasswordMessgeBar.style.width = "";
    confirmpasswordMessgeBar.style.backgroundColor = "";

  } else if (password.value !== confirmPassword.value) {
    confirmpasswordMessge.textContent = "Password not Matched!";
    confirmpasswordMessge.style.color = "red";
    confirmpasswordMessgeBar.style.width = "50%";
    confirmpasswordMessgeBar.style.backgroundColor = "red";

  } else {
    confirmpasswordMessge.textContent = "Password Matched!";
    confirmpasswordMessge.style.color = "green";
    confirmpasswordMessgeBar.style.width = "100%";
    confirmpasswordMessgeBar.style.backgroundColor = "green";
  }

});

