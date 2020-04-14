
//mejor un preventDefault en lugar de return cuando haya back para devolver
//al ppio código no clase error, y marcar errores con cĺases ** revisar..**

// validation function
function Validate() {
  var count_error =0;
  // SELECTING ALL TEXT ELEMENTS
  var username = document.forms["vform"]["username"];
  var email = document.forms['vform']['email'];
  var password = document.forms['vform']['password'];
  var password_confirm = document.forms['vform']['password_confirm'];

// SELECTING ALL ERROR DISPLAY ELEMENTS
  var name_error = document.getElementById('name_error');
  var email_error = document.getElementById('email_error');
  var password_error = document.getElementById('password_error');

  // validate username
  if (username.value == "") {
    username.classList.add("inputError");
    document.getElementById('username_div').style.color = "red";
    name_error.textContent = "Username is required";
    username.focus();
    count_error++;
  } else{

  }
  // validate username
  if (username.value.length < 3) {
    username.classList.add("inputError");
    document.getElementById('username_div').style.color = "red";
    name_error.textContent = "Username must be at least 3 characters";
    username.focus();
    count_error++;
  }else {
    username.classList.add("inputNoError");
    document.getElementById('username_div').style.color = "black";
    name_error.textContent = "";
  }

  // validate email
  var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
  //if (email.value == "") {
    if (!(regex.test(email.value))) {
    email.classList.add("inputError");
    document.getElementById('email_div').style.color="red";
    email_error.textContent = "Email is required";
    email.focus();
    count_error++;
  } else {
    email.classList.add("inputNoError");
    document.getElementById('email_div').style.color="black";
    email_error.textContent = "";
  }
  // validate password
  if (password.value == "") {
    password.classList.add("inputError");
    document.getElementById('password_div').style.color = "red";
    password_confirm.classList.add("inputError");
    password_error.textContent = "Password is required";
    password.focus();
    count_error++;
  }else {
    password.classList.add("inputNoError");
    document.getElementById('password_div').style.color = "black";
    password_confirm.classList.add("inputNoError");
    password_error.textContent = "";
  }
  // check if the two passwords match
  if (password.value != password_confirm.value) {
    password.classList.add("inputError");
    document.getElementById('pass_confirm_div').style.color = "red";
    password_confirm.classList.add("inputError");
    password_error.innerHTML = "The two passwords do not match";
    count_error++;
  }else{
    password.classList.add("inputNoError");
    document.getElementById('pass_confirm_div').style.color = "black";
    password_confirm.classList.add("inputNoError");
    password_error.innerHTML = "";
  }

  if (count_error==0) return true;
  else return false;
}


// event handler functions
function nameVerify() {
  if (username.value != "") {
    username.style.border = "1px solid #3b599";
    document.getElementById('username_div').style.color = "#5e6e66";
    name_error.innerHTML = "";
    return true;
  }
}
function emailVerify() {
  if (email.value != "") {
    email.style.border = "1px solid #5e6e66";
    document.getElementById('email_div').style.color = "#5e6e66";
    email_error.innerHTML = "";
    return true;
  }
}
function passwordVerify() {
  if (password.value != "") {
    password.style.border = "1px solid #5e6e66";
    document.getElementById('pass_confirm_div').style.color = "#5e6e66";
    document.getElementById('password_div').style.color = "#5e6e66";
    password_error.innerHTML = "";
    return true;
  }
  if (password.value === password_confirm.value) {
    password.style.border = "1px solid #5e6e66";
    document.getElementById('pass_confirm_div').style.color = "#5e6e66";
    password_error.innerHTML = "";
    return true;
  }

}
