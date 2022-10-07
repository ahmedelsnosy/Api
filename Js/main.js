let fullName = document.getElementById("userName");
let email = document.getElementById("userEmail");
let password = document.getElementById("userPass");
let loginEmail = document.getElementById("loginEmail");
let loginPass = document.getElementById("loginpass");

localStorage.setItem("home", JSON.stringify("home.html"));

var users;
if (localStorage.getItem("someUsers") == null) {
  var users = [];
} else {
  users = JSON.parse(localStorage.getItem("someUsers"));
}
function addUser() {
  if (!isEmptyForSignup()) {
    if (exist()) {
      displayExist();
    } else {
      var user = {
        name: fullName.value,
        email: email.value,
        password: password.value,
      };
      users.push(user);
      localStorage.setItem("someUsers", JSON.stringify(users));
      displaysuccess();
      clearSignup();
    }
  } else {
    displayRequired();
  }
}

function exist() {
  for (var i = 0; i < users.length; i++) {
    if (users[i].email == email.value) {
      return true;
    }
  }
  return false;
}

function searchUser() {
  if (isEmpty()) {
    displayRequired();
  } else {
    for (var i = 0; i < users.length; i++) {
      if (
        users[i].email == loginEmail.value &&
        users[i].password == loginPass.value
      ) {
        
        
        location.href = JSON.parse(localStorage.getItem("home"));
        
      } else {
        displayIncorrect();
      }
    }
  }
}

function clearLogin() {
  loginEmail.value = "";
  loginPass.value = "";
}
function clearSignup() {
  fullName.value = "";
  email.value = "";
  password.value = "";
}

function isEmptyForSignup() {
  if (fullName.value !== "" || email.value !== "" || password.value !== "") {
    return false;
  } else {
    return true;
  }
}

function isEmpty() {
  if (loginEmail.value == "" || loginPass.value == "") {
    return true;
  } else {
    return false;
  }
}

function displayRequired() {
  document.getElementById(
    "required"
  ).innerHTML = `<span>All input is required</span>`;
}

function displayIncorrect() {
   document.getElementById(
     "required"
   ).innerHTML = `<span>Email or Password incorrect</span>`;
}

function displayExist() {
  document.getElementById("done").innerHTML = `<span>Email is exsited</span>`;
}

function displaysuccess() {
  document.getElementById(
    "success"
  ).innerHTML = ` <p class="text-bg-dark">Signup is successed</p>`;
}
